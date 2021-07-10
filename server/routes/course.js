const express = require("express");
const formidable = require("express-formidable");

const router = express.Router();

// middleware
const { requireSignin, isInstructor } = require("../middlewares");

// controllers
const { uploadImage, removeImage, create, read, uploadVideo, removeVideo, addLesson, update, removeLesson, updateLesson, publishCourse, unpublishCourse } = require("../controllers/course");

// image
router.post("/course/upload-image", uploadImage);
router.post("/course/remove-image", removeImage);
// course 
router.post("/course", requireSignin, isInstructor, create);
router.put("/course/:slug", requireSignin, update);
router.get("/course/:slug", read);
router.post("/course/video-upload/:instructorId", requireSignin, formidable(), uploadVideo);
router.post("/course/video-remove/:instructorId", requireSignin, removeVideo);

// publish unpublish
router.put("/course/publish/:courseId", requireSignin, publishCourse);
router.put("/course/unpublish/:courseId", requireSignin, unpublishCourse);

router.post("/course/lesson/:slug/:instructorId", requireSignin, addLesson);
router.put("/course/lesson/:slug/:instructorId", requireSignin, updateLesson);
router.put("/course/:slug/:lessonId", requireSignin, removeLesson);




module.exports = router;