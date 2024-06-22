const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User.model");
const { isLoggedOut, isLoggedIn } = require("../middleware/route-guard");

const router = express.Router();

const saltRounds = 10;

/* GET home page */
router.get("/signup", isLoggedOut, (req, res, next) => {
  res.render("auth/signup");
});

// auth.routes.js
// the imports, get and post route remain untouched for now

router.get("/userProfile", isLoggedIn, async (req, res) => {
  const user = await User.findOne({ username: req.session.currentUser.username });
  res.render("auth/profile", { user });
  
});

router.post("/signup", isLoggedOut, async (req, res, next) => {
  // console.log("The form data: ", req.body);

  const { username, email, password } = req.body;

  const hashedPassword = await bcrypt

    .genSalt(saltRounds)

    .then((salt) => bcrypt.hash(password, salt))

    .then((hashedPassword) => {
      return hashedPassword;
    })

    .catch((error) => next(error));

  await User.create({ username, email, passwordHash: hashedPassword });

  res.redirect(`/userProfile`);
});

router.get("/login", isLoggedOut, (req, res, next) => {
  res.render("auth/login");
});

router.post("/login", isLoggedOut, (req, res, next) => {

  // req.body destructuring

  const { email, password } = req.body;

  // and email and password validation stay the same

  User.findOne({ email })

    .then((user) => {
      if (!user) {
        console.log("Email not registered. ");

        res.render("auth/login", {
          errorMessage: "User not found and/or incorrect password.",
        });

        return;
      } else if (bcrypt.compareSync(password, user.passwordHash)) {
        // when we introduce session, the following line gets replaced with what follows:

        // res.render('users/user-profile', { user });

        //******* SAVE THE USER IN THE SESSION ********//

        req.session.currentUser = user;

        res.redirect("/userProfile");
      } else {
        console.log("Incorrect password. ");

        res.render("auth/login", {
          errorMessage: "User not found and/or incorrect password.",
        });
      }
    })

    .catch((error) => next(error));
});

router.post("/logout", isLoggedIn, (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      next(err);
    } else {
      res.redirect("/");
    }
  });
});

module.exports = router;
