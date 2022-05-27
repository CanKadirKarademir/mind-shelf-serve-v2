const TransactionsFactory = require("../../database/transactionFactory");
const userTransactions = TransactionsFactory.creating("userTransactions");

class AuthController {
  constructor() {}

  finOneUserAsync(where) {
    return userTransactions.findOneAsync(where);
  }
}
module.exports = AuthController;
