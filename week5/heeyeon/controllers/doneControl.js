const { getConn } = require("../database/conn");

module.exports = {
    doneView: async (req, res, next) => {
        const conn = await getConn;
        try {
            const [rows, op] = await conn.query("select * from todolist where isDone=true");
            req.doneview = rows;
            conn.release();
            next();
        } catch (doneviewErr) {
            res.json(doneviewErr);
        }
    },

    doneCheck: async (req, res, next) => {
        const conn = await getConn;
        const { id, isDone } = req.body;
        try {
            await conn.query("update todolist set isDone=? where id=?", [isDone, id]);
            conn.release();
            next();
        } catch (donecheckErr) {
            res.json(donecheckErr);
        }
    },
};
