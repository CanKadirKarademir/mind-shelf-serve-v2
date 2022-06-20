const joi = require("joi");

module.exports = {
  "/login": {
    //test
    POST: joi.object().keys({
      body: joi.object({
        EmailAddress: joi.string().max(256).required(),
        Password: joi.string().max(99).required(),
      }),
    }),
  },
};
