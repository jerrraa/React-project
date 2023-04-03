const express = require("express");
const cors = require("cors"); //npm install cors --save

const routes = require("./routes");
const server = express();
const port = 3001;

server.use(cors());
server.use(express.urlencoded({ extended: false}));
server.use(express.json());

server.get('/', (req, res) => {res.send("Hello!")});
server.use('/', routes);

server.listen(port, () => {
    console.log(`Express running on port ${port}...`); 
});
//npx nodemon server/index.js
//npm install nodemon --save