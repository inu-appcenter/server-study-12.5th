const express = require("express");
const router = express.Router();

const { doneView, doneCheck } = require("../controllers/doneControl");

/**
 * @method GET
 * @summary view
 */
router.get("/", doneView, (req, res) => {
    res.json({ success: true, message: "doneview 성공", data: req.doneview });
});

/**
 * @method patch
 * @summary check
 */
router.patch("/check", doneCheck, (req, res) => {
    res.json({ success: true, message: "donecheck 성공" });
});

module.exports = router;
