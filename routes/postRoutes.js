const express = require("express");
const router = express.Router();

const posts = require("../data/posts");

// Get all posts
router.get("/", (req, res) => {
  const limit = req.query.limit;
  console.log(limit, "limit");
  if (limit && limit < posts.length) {
    res.json(posts.slice(0, limit));
    return;
  }
  res.json(posts);
});

// Get individual post
router.get("/:id", (req, res, next) => {
  const post = posts.find((post) => post.id === +req.params.id);
  if (post) res.json(post);
  else next();
});

// Added Post
router.post("/", (req, res) => {
  if (req.body.userId && req.body.title && req.body.content) {
    if (posts.find((p) => p.title == req.body.title)) {
      res.json({ error: "Post title Already Taken" });
      return;
    }
    const post = {
      id: posts[posts.length - 1].id + 1,
      userId: req.body.userId,
      title: req.body.title,
      content: req.body.content,
    };

    posts.push(post);
    res.json(posts[posts.length - 1]);
  } else res.json({ error: "Insufficient Data" });
});

// Get individual user
router.get("/:id", (req, res, next) => {
  const user = users.find((user) => user.id === +req.params.id);
  if (user) res.json(user);
  else next();
});

// Update individual post
router.patch("/:id", (req, res, next) => {
  const post = posts.find((p, i) => {
    if (p.id == req.params.id) {
      for (const key in req.body) {
        posts[i][key] = req.body[key];
      }
      return true;
    }
  });

  if (post) res.json(post);
  else next();
});

// Delete individual post
router.delete("/:id", (req, res, next) => {
  // The DELETE request route simply removes a resource.
  const post = posts.find((p, i) => {
    if (p.id == req.params.id) {
      posts.splice(i, 1);
      return true;
    }
  });

  if (post) res.json(post);
  else next();
});

module.exports = router;
