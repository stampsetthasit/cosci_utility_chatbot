const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).send("cosci assistant chatbot app is running...");
});

module.exports = router;
