const { getConn } = require("../database/conn");

module.exports = {
    todoView: async (req, res, next) => {
        const conn = await getConn;
        try {
            const [rows, op] = await conn.query("select * from todolist");
            req.todoview = rows;
            conn.release();
            next();
        } catch (todoviewErr) {
            res.json(todoviewErr);
        }
    },

    todoInsert: async (req, res, next) => {
        const conn = await getConn;
        try {
            await conn.query("insert into todolist (content) values (?)", req.body.content);
            conn.release();
            next();
        } catch (todoinsertErr) {
            res.json(todoinsertErr);
        }
    },

    todoUpdate: async (req, res, next) => {
        const conn = await getConn;
        try {
            await conn.query("update todolist set content=? where id=?", [
                req.body.newContent,
                req.body.id,
            ]);
            conn.release();
            next();
        } catch (todoupdateErr) {
            res.json(todoupdateErr);
        }
    },

    todoDelete: async (req, res, next) => {
        const conn = await getConn;
        try {
            await conn.query("delete from todolist where id = ?", req.body.id);
            conn.release();
            next();
        } catch (tododeleteErr) {
            res.json(tododeleteErr);
        }
    },
};
