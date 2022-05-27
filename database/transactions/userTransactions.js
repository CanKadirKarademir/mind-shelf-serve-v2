const { FadabHelper } = require("fadab-mysql-helper");

class UserTransactions extends FadabHelper {
  constructor() {
    super();
    this.baseTable = "tblUser";
  }
}

module.exports = UserTransactions;
