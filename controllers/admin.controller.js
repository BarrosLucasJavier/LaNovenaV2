import { validationResult } from "express-validator"
import { productService } from "../services/products.service.js"


const adminController = {
    login: (req, res) => {
        res.render("login")
    },
    loginValidation: async (req, res) => {
        try {
            const errors = validationResult(req)
            const allProducts = await productService.getAll()
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
                const producto = allProducts.filter(element => element.id === id)
                const prod = {
                    nombre,
                    categoria: category,
                    descripcion,
                    precio: +precio,
                    imagen: req.file && req.file.filename ? req.file.filename : producto[0].imagen,
                    vendido: encargo === "Si" ? true : false
                }
                await productService.update(id, prod)
                return res.redirect("/admin");
            } else {
                const error = errors.mapped()
                res.render("editProduct", { product: { ...req.body, id }, categ: uniquesCategories, error })
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
    search: async (req, res) => {
        try {
            const  {busqueda}  = req.query
            const allProducts = await productService.getAll()
            console.log('busqueda',busqueda);
            const producto = allProducts.filter((product) => product.nombre.toLowerCase().includes(busqueda.toLowerCase()))
            console.log(producto);
        } catch (error) {
            console.log(error)
        }
    }
}
export default adminController