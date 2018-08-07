const express = require("express");
const mongoose = require("mongoose");
const app = express();

//if /routes/api/users is the route, then we want to connect to users(a variable that represent a file), then bellow we tell it to use users file for /api/users
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

// DB Config
//db requires key from keys.js
//mongoURI is in the keys.js file, its a string value that contains the username & password

const db = require("./config/keys").mongoURI;

//Connect to MongoDB
//since we're using promise, we use then() & catch(err)

db.mongoConnect = () => {
  mongoose.Promise = global.Promise;
  mongoose
    .connect(
      db,
      { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB Connected"))
    .catch(err => {
      throw err;
    });
};

mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
//homepage

app.get("/", (req, res) => res.send("Hello"));
//process.env.PORT is for when deploying to heroku
const port = process.env.PORT || 5000;

//Use these routes (defined above)
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

//listening to that port that we defined & telling us which port its running on
app.listen(port, () => console.log(`Server running on port ${port}`));
