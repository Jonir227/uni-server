const mongoose = require("mongoose");

const { Schema } = mongoose;

const monthlyWinner = new Schema({
  season: {
    type: String,
    default: "201807"
  },
  winners: {
    type: Array,
    default: [
      { first: "bjbj6363" },
      { second: "aasdlkfjas" },
      { third: "jonir" }
    ]
  }
});

User.statics.create = function(season, first, second, third) {
  const user = new this({
    season,
    winners: {
      first,
      second,
      third
    }
  });
  return user.save();
};

module.exports = mongoose.model("BucketUser", BucketUser);
