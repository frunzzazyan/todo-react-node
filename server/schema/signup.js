const Joi = require('joi');

const schemaSignUp = Joi.object({
    fname: Joi.string().min(3).max(30).required(),
    lname: Joi.string().min(3).max(30).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    age: Joi.number().integer().min(18).max(100),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    rpassword: Joi.ref('password'),
})

module.exports = schemaSignUp