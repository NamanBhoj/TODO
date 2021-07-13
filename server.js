const app = require("./app.js");
let port = process.env.PORT;

app.listen(port, function (req, res) {
  console.log("Server listening at port " + port);
});
