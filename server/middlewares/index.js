const expressJwt = require("express-jwt");
import User from "../models/user";

export const requireSignin = expressJwt({
    getToken: (req, res) => req.cookies.token,
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],
  }); // req.user._id controleert of jwt token overeen komt met?? ja de jwt token in de backend??

export const isInstructor = async (req, res, next) => {
    try {
      const user = await User.findById(req.user._id).exec();
      if (!user.role.includes("Instructor")) {
        return res.sendStatus(403);
      } else {
        next();
      }
    } catch (err) {
      console.log(err);
    }
  }