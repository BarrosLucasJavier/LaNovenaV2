import { productService } from '../services/products.service.js'

const productController = {
    catalogo: async (req, res) =>{
        try {
            const allProducts = await productService.getAll();
            const categories = allProducts.map((product) => product.categoria)
            const uniquesCategories= categories.filter((value, index, self) =>{
                return self.indexOf(value) === index;
            })

            if (req.query.categories === "Todos" || !req.query.categories ) {
                return res.render("catalogo", {allProducts, categories:uniquesCategories})
            } else {
                const filtered = allProducts.filter(prod => prod.categoria === req.query.categories)
                console.log("productos",filtered);
                return res.render("catalogo", {allProducts: filtered, categories:uniquesCategories})
            }
        } catch (error) {
            console.log(error)
        }
    },

}

export default productController;
