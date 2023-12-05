import { validationResult } from "express-validator"

const homeController = {
    home: (req, res) =>{
        res.render("index")
    },
    login: (req, res) =>{
        const errors = validationResult(req)



        if (errors.isEmpty()) {
            return res.render("admin")
        } else {
            const error = errors.mapped()
            console.log(error);
            return res.render("index", {error})
        }
    }
}
export default homeController