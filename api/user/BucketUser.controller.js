const BucketUser = require("../../models/BucketUser");

// api for admin
exports.userPut = (req, res) => {
  const { username, nickName } = req.body;
  return BucketUser.find({ username, nickName }).then(data => {
    if (data)
      return res.json({
        message: "logined"
      });
    return BucketUser.create(username, nickName).then(() => {
      return res.json({
        message: "logined"
      });
    });
  });
};
