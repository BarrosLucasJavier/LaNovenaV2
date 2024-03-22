import fs from 'fs'
import path from 'path'
import { productService } from "../services/products.service.js"
import { validationResult } from "express-validator"

const productController = {
    products: async () => {

        const allProducts = await productService.getAll();
        allProducts.sort((a, b) => a.name.localeCompare(b.name));
        return allProducts;
    },
    categories: async () => {

        const allProducts = await productController.products();
        const categories = allProducts.map((product) => product.category);

        const uniquesCategories = categories.filter((value, index, self) => {
            return self.indexOf(value) === index;
        })
        return uniquesCategories;
    },
    catalogue: async (req, res) => {
        try {
            const allProducts = await productController.products();
            const categories = await productController.categories();

            if (req.query.categories === "Todos" || !req.query.categories) {
                return res.render("catalogue", { allProducts, categories });
            } else {
                const filtered = allProducts.filter(prod => prod.category === req.query.categories)
                return res.render("catalogue", { allProducts: filtered, categories });
            }

        } catch (error) {
            console.log(error);
        }
    },
    edit: async (req, res) => {
        try {
            const product = await productService.getOne(req.params.id);
            const categories = await productController.categories();
        
            res.render("editProduct", { product, categories });

        } catch (error) {
            console.log(error);
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, category, description, price, order } = req.body;
            const errors = validationResult(req);
            const allProducts = await productController.products();
            const categories = await productController.categories();

            if (errors.isEmpty()) {
                const product = allProducts.filter(element => element.id === id);
                const productUpdated = {
                    name,
                    category,
                    description,
                    price: +price,
                    image: req.file && req.file.filename ? req.file.filename : product[0].image,
                    sold: order === "Si" ? true : false
                };
                await productService.update(id, productUpdated);
                return res.redirect("/admin");
            } else {
                const error = errors.mapped();
                res.render("editProduct", { product: { ...req.body, id }, categories, error });
            }

        } catch (error) {
            console.log(error);
        }
    },
    search: async (req, res) => {
        try {
            const { searches } = req.query;
            const products = await productController.products();

            if (searches) {
                const allProducts = products.filter((product) => product.name.toLowerCase().includes(searches.toLowerCase()));
                allProducts.sort((a, b) => a.name.localeCompare(b.name));
                /* poder hacer un if para saber si va a admin o productos */
                return res.render("admin", { allProducts });
            } else {
                return res.render("admin", { allProducts: products });
            }
        } catch (error) {
            console.log(error);
        }
    },
    newProduct: async (req, res) => {

        const categories = await productController.categories();

        res.render("newProduct", { categories });
    },
    create: async (req, res) => {
        try {
            const { name, category, description, price, order } = req.body;
            const errors = validationResult(req);
            const categories = await productController.categories();

            if (errors.isEmpty()) {

                const newProduct = {
                    name,
                    category,
                    description,
                    price: +price,
                    image: req.file && req.file.filename ? req.file.filename : 'no-image.png',
                    sold: order === "Si" ? true : false
                };
                await productService.store(newProduct);
                return res.redirect("/admin");
            } else {
                console.log(errors);
                const error = errors.mapped();
                res.render("newProduct", { categories, error });
            }

        } catch (error) {
            console.log(error);
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await productService.delete(id);

            if (deleted.image !== 'no-image.png') {
                const url = path.join(process.cwd(), `/public/img/productos/${deleted.image}`);
                fs.existsSync(url) && fs.unlinkSync(url);
            }

            return res.redirect("/admin");

        } catch (error) {
            console.log(error);
        }
    }

}

export default productController;
