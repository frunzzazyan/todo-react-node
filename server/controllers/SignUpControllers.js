const schemaSignUp = require("../schema/signup.js")
class SignUpControllers{
    async postUser(req,res){
        try {
            const value = await schemaSignUp.validateAsync(req.body)
            const signupData = await req.app.locals.services.signup.postUser(value)
            console.log(signupData)
            res.json(signupData)
        } catch (error) {
            res.status(404).json(error)
        }
    }
}

module.exports = SignUpControllers