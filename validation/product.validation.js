import  { check }  from 'express-validator'

const productValidation = [
    check('name')
        .notEmpty().withMessage('Debes introducir un nombre').bail(),
    check('category')
        .notEmpty().withMessage('Debes introducir una categoria').bail(),
    check('description')
        .notEmpty().withMessage('Debes introducir una descripción').bail(),
    check('price')
        .notEmpty().withMessage('Debes introducir un precio').bail(),

]
export default productValidation