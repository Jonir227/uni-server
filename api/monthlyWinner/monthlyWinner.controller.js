const MonthlyWinner = require("../../models/monthlyWinner");

exports.MonthlyWinnerPut = (req, res) => {
  const { season, first, second, third } = req.body;
  MonthlyWinner.create(season, first, second, third).then(() => {
    return res.json({
      message: "success!"
    });
  });
};
