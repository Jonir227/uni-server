const mongoose = require("mongoose");

const { Schema } = mongoose;

const BucketUser = new Schema({
  username: String,
  nickName: String
});

User.statics.create = function(username, nickName) {
  const user = new this({
    username,
    nickName
  });
  return user.save();
};

module.exports = mongoose.model("BucketUser", BucketUser);
