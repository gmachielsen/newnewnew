
const express = require("express");

const router = express.Router();

// middleware
const { requireSignin, isInstructor } = require("../middlewares");

// controllers
const { uploadImage, removeImage, create, read } = require("../controllers/course");

// image
router.post("/course/upload-image", uploadImage);
router.post("/course/remove-image", removeImage);
// course 
router.post("/course", requireSignin, isInstructor, create);
router.get("/course/:slug", read);

module.exports = router;