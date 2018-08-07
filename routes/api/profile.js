const express = require("express");
const router = express.Router();

//when creating a route in this file, instead of app.get() inside of server.js
//we use router.get()/router.post()/router.put()
//res.json() is similiar to send() which we use to output Hello world, but its going to output json instead
//thast what we want from this api ... is to server json

//this /test will be equivalent to api/users since its in Profiles file
router.get("/test", (req, res) => res.json({ msg: "Profiles Works" }));

//we have to export the router in order for server.js file to pick it up
module.exports = router;
