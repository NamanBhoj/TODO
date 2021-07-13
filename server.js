const app = require("./app.js");
let port = process.env.PORT || 3000;

app.listen(port, function (req, res) {
  console.log("Server listening at port " + port);
});
