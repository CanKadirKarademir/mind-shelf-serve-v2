const router = require("express")();
const jwt = require("jsonwebtoken");
const ContollerFactory = require("../controller/controllerFactory");
const { verifyToken } = require("../middleware");
const authController = ContollerFactory.creating("authController");
const Validator = require("../middleware/validator");
const { tokenControl } = verifyToken;
const HttpStatusCode = require("http-status-codes");
const { errorSender } = require("../utils");

router.post("/login", Validator.request, async (req, res) => {
  try {
    console.log(req.body);
    const result = await authController.finOneUserAsync({
      EmailAddress: req.body.EmailAddress,
      Password: req.body.Password,
    });
    if (!result)
      throw errorSender.errorObject(
        HttpStatusCode.BAD_REQUEST,
        "Check your email address or password !"
      );

    const payload = {
      UserID: result.Id,
      UserTypeName: result.UserTypeName,
    };
    const token = jwt.sign(payload, req.app.get("api_key"), {
      expiresIn: "7d",
    });
    res.json({ result, token });
  } catch (error) {
    res
      .status(error.status || HttpStatusCode.INTERNAL_SERVER_ERROR)
      .send(error.message);
  }
});

router.get("/token-decode", tokenControl, async (req, res) => {
  res.json(req.decode);
});

module.exports = router;
