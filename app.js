const express = require("express");
const cors = require("cors");

const api = require("./api");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/contacts", api.contacts);

app.use((req, res) => {
  res.status(404).json({ status: "error", code: 404, message: "Not found" });
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res
    .status(status)
    .json({ status: "fail", code: status, message: err.message });
});

module.exports = app;
