import { validationResult } from "express-validator"
import { productService } from "../services/products.service.js"


const adminController = {
    login: async (req, res) => {
        try {
            const errors = validationResult(req)
            const allProducts = await productService.getAll()

            if (errors.isEmpty()) {
                return res.render("admin", { allProducts })
            } else {
                const error = errors.mapped()
                return res.render("index", { error })
            }
        } catch (error) {
            console.log(error);
        }
    },
    edit: async (req, res) => {
        const product = await productService.getOne(req.params.id)
        const allProducts = await productService.getAll();
        const categories = allProducts.map((product) => product.categoria)
        const uniquesCategories = categories.filter((value, index, self) => {
            return self.indexOf(value) === index;
        })
        res.render("editProduct", { product, categ: uniquesCategories })
    },
    update: async (req, res) => {
        try {
            const { id } = req.params
            const { nombre, category, descripcion, precio, encargo } = req.body
            const errors = validationResult(req)
            const allProducts = await productService.getAll();
            const categories = allProducts.map((product) => product.categoria)
            const uniquesCategories = categories.filter((value, index, self) => {
                return self.indexOf(value) === index;
            })
            if (errors.isEmpty()) {
                res.send('asdaosudh')
            } else {
                const error = errors.mapped()
                res.render("editProduct", {product:{...req.body, id}, categ: uniquesCategories, error })
            }
            
        } catch (error) {
            console.log(error);
        }

    }
}
export default adminController