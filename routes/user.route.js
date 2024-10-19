var express = require("express");
const { getUserData } = require("../services/user.service");
var router = express.Router();

router.get("/get-user", async (req, res) => {
  let username = req.query.username; // Extract username from query parameters
  if (!username) {
    return res.status(400).json({
      status: false,
      message: "Username is required",
    });
  }

  let response = await getUserData(username);
  res.json(response);
});

module.exports = router;
