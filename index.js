const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello World %HIRER_NAME%");
});

app.listen(port, () => {
  console.info(`Listening on ${port}.`);
});
