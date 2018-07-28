const router = require("express").Router();
const controller = require("./monthlyWinner.controller");

router.put("/", controller.MonthlyWinnerPut);

module.exports = router;
