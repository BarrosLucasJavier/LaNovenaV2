import  { check, body }  from 'express-validator'

const loginValidation = [
    check('user')
        .notEmpty().withMessage('Debes introducir un usuario').bail(),

    body('password')
        .notEmpty().withMessage('Debes introducir una constraseña').bail()
        .custom((value, {req}) => {
            const user = process.env.ADMIN_USER
            const pass = process.env.ADMIN_PASS

            if (user  !== req.body.user || value !== pass) {
                return Promise.reject("User o constraseña incorrecto")
            }
            return true
        })
]
export default loginValidation