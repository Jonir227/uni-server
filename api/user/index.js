const router = require("express").Router();
const controller = require("./BucketUser.controller");

router.put("/", controller.userPut);

module.exports = router;
