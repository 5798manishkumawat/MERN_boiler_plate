const { rest } = require("lodash");
const User = require("./models/user");
const router=require("express").Router();

router.route("/").post((req, res) => {
    console.log(req.body);
    const user=req.body.user;
    const newuser= new User({user});
    newuser.save().then(() => res.json("user added!!")).catch((err) => res.status(400));
  });

module.exports=router;