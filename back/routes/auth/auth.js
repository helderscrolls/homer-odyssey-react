const express = require("express");
const router = express.Router();

/*
router.post("/signup", function(req, res, next) {
  res.send("I am in POST signup");
});
*/
router.post("/signup", (req, res) => {
  res.send("youhou - POST");
});

module.exports = router;
