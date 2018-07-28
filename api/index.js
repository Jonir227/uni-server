const router = require("express").Router();
const user = require("./user");
const monthlyWinner = require("./monthlyWinner");

router.use("/user", user);
router.use("/monthly-winner", monthlyWinner);

module.exports = router;
