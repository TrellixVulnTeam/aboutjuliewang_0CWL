const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const User = require('../models/user')
const passport = require('passport')

// function initialize(passport, getUserByUsername, getUserById) {
//   const authenticateUser = async (username, password, done) => {
//     const user = getUserByUsername(username)
//     if (user == null) {
//       return done(null, false, { message: 'No user with that username' })
//     }

//     try {
//       if (await bcrypt.compare(password, user.password)) {
//         return done(null, user)
//       } else {
//         return done(null, false, { message: 'Password incorrect' })
//       }
//     } catch (e) {
//       console.log(e)
//       return done(e)
//     }
//   }
// passport.use(new LocalStrategy({ usernameField: 'username', passwordField:'password' }, authenticateUser))
// passport.serializeUser((user, done) => done(null, user.id))
// passport.deserializeUser((id, done) => {
//   User.findById(id, (err,user) => {
//     done(err,user)
//   }
//     )
// })
// }

function initialize(){

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
  
passport.use(new LocalStrategy(function (username, password, done) {
	User.findOne({ username: username }, function (err, user) {
		if (err) return done(err);
		if (!user) return done(null, false, { message: 'Incorrect username.' });

		bcrypt.compare(password, user.password, function (err, res) {
			if (err) return done(err);
			if (res === false) return done(null, false, { message: 'Incorrect password.' });
			
			return done(null, user);
		});
	});
}));
}
module.exports = initialize