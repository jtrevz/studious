const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// app.use(express.static(__dirname, "build"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("public"));
}

app.get("*", (req, res) => {
  //   res.sendFile(path.join(__dirname, "build", "index.html"));
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.listen(port, () => {
  console.log("Server is up!");
});
