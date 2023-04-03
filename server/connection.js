const mysql = require("mysql"); 

const conn = mysql.createConnection({
    host: "127.0.0.1",
    port: 8889,
    user: "root", 
    password: "",
    database: "reactdb"
});

conn.connect();
module.exports = conn;