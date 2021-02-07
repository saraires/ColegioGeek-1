const Joi = require('@hapi/joi');
// const { join } = require('path')

const login_schema = Joi.object({
    email: Joi.string().email({
        minDomainSegments: 2,tlds: { allow: ['com', 'net'] }
    }).trim().required(),
    password: Joi.string().min(8).pattern(new RegExp('^[a-zA-Z]')).required(),
    picked: Joi.string().length(1).pattern(new RegExp('^[1-3]')).required()
});

async function validateLogin(object) {
    try {
      const value = await login_schema.validateAsync(object);  
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {validateLogin}
