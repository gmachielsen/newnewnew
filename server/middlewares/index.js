const expressJwt = require("express-jwt");

exports.requireSignin = expressJwt({
    getToken: (req, res) => req.cookies.token,
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],
  }); // req.user._id controleert of jwt token overeen komt met?? ja de jwt token in de backend??