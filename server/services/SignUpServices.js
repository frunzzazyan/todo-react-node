const bcrypt = require("bcrypt")

class SignUpServices{
    constructor(models){
        this.models = models
    }

    async postUser(body){
        try {
            const hash = await bcrypt.hash(body.password, 10)
            delete body.password
            delete body.rpassword
            body.password = hash

            const newUserDb = await this.models.signup(body)
            const saveUser = await newUserDb.save()
            return saveUser
        } catch (error) {
            res.status(404).json(error)
        }
    }
}

module.exports = SignUpServices