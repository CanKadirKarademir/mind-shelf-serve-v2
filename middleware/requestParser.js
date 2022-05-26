const validators = require("./requiredParameters");
const HttpStatusCode = require("http-status-codes");
const parserUtils = require("../utils/parserUtils");

class RequestParser {
  constructor() {}

  static async fadabParser(req, res, next) {
    try {
      if (req.method == "GET")
        req.query = parserUtils.parsePaginationAndConditionVariables(req.query);
      next();
    } catch (err) {
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(err.message);
    }
  }
}

module.exports = RequestParser;
