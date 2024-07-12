const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.set("view engine", "ejs");

app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log("req.requestTime", req.requestTime);
  next();
});

const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");
const commentRoutes = require("./routes/commentRoutes");

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});

app.use((req, res) => {
  res.status(404);
  res.json({ error: "Resource Not Found" });
});
