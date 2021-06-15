const express = require("express");

const router = express.Router();

// middleware
const { requireSignin } = require("../middlewares");

// controllers
const {
    makeInstructor,
    getAccountStatus,
    currentInstructor,
  } = require("../controllers/instructor");
  
  router.post("/make-instructor", requireSignin, makeInstructor);
  router.post("/get-account-status", requireSignin, getAccountStatus);
  router.get("/current-instructor", requireSignin, currentInstructor);
  

module.exports = router;