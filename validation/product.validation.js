import  { check, body }  from 'express-validator'

const productValidation = [
    check('nombre')
        .notEmpty().withMessage('Debes introducir un nombre').bail(),
    check('category')
        .notEmpty().withMessage('Debes introducir una categoria').bail(),
    check('descripcion')
        .notEmpty().withMessage('Debes introducir una descripción').bail(),
    check('precio')
        .notEmpty().withMessage('Debes introducir un precio').bail(),

]
export default productValidation