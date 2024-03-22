import { validationResult } from "express-validator"
import productController from './product.controller.js'


const adminController = {
    login: (req, res) => {
        res.render("login")
    },
    loginValidation: async (req, res) => {
        try {
            const errors = validationResult(req)
            const allProducts = await productController.products()

            if (req.session.user) {
                return res.render("admin", { allProducts })
            }
            if (errors.isEmpty()) {
                req.session.user = req.body.user
                res.cookie("sessionId", req.sessionID)
                return res.render("admin", { allProducts })
            } else {
                const error = errors.mapped()
                return res.render("login", { error })
            }
        } catch (error) {
            console.log(error);
        }
    },
    logout: (req, res) => {
        req.session.destroy(() => {
            res.clearCookie("sessionId");
            res.redirect("/admin")
        })
    },

}
export default adminController