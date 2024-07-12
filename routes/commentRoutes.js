const express = require("express");
const router = express.Router();

const comments = require("../data/comments");

// Get all comments
router.get("/", (req, res) => {
  res.json(comments);
});

// Get individual comment
router.get("/:id", (req, res, next) => {
  const comment = comments.find((comment) => comment.id === +req.params.id);
  if (comment) res.json(comment);
  else next();
});

module.exports = router;
