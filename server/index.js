const app = require("./app");

app.listen(process.env.PORT || 3002, (err) => {
  err
    ? console.log(err)
    : console.log("You spin me right round, baby right round");
});
