var express = require("express");
var router = express.Router();
const { createEmployee } = require("../controllers/Employee");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/", createEmployee);

module.exports = router;
