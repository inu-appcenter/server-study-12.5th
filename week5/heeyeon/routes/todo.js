const express = require("express");
const router = express.Router();

const { todoView, todoInsert, todoUpdate, todoDelete } = require("../controllers/todoControl");

/**
 * @method GET
 * @summary view
 */
router.get("/", todoView, (req, res) => {
    res.json({ success: true, message: "todoView 성공", data: req.todoview });
});

/**
 * @method POST
 * @summary insert
 */
router.post("/insert", todoInsert, (req, res) => {
    res.json({ success: true, message: "todoInsert 성공" });
});

/**
 * @method PUT
 * @summary update
 */
router.put("/update", todoUpdate, (req, res) => {
    res.json({ success: true, message: "todoUpdate 성공" });
});

/**
 * @method DELETE
 * @summary delete
 */
router.delete("/delete", todoDelete, (req, res) => {
    res.json({ success: true, message: "todoDelete 성공" });
});

module.exports = router;
