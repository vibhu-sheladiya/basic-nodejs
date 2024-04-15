const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const bodyParser = require("body-parser");
const { createDb } = require("./connection/connection");
const router = require("./routes/routes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

createDb();

app.use("/v1", router);
server.listen(3000, () => {
  console.log(`server is done ${3000}`);
});
