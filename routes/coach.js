const path = require("path");
const express = require("express");
const router = express.Router();
const Coach = require("../controllers/coach");

router.get("/getCoach", Coach.getCoaches);
router.get("/getCoachId", Coach.getCoachId);
router.get("/getContact/:id", Coach.getContact);

router.post("/registerCoach", Coach.registerCoach);
router.post("/contactCoach", Coach.contactCoach);

module.exports = router;
