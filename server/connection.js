const mysql = require("mysql"); 

const conn = mysql.createConnection({
    host: "localhost",
    user: "root", 
    password: 'test',
    database: "react-project"
});

conn.connect();
module.exports = conn;