// DEPENDENCIES
const express = require("express");

const PORT = process.env.PORT || 3002;
const app = express();

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));


require("/routes/apiRoutes")(app);
require("/routes/htmlRoutes")(app);

app.listen(PORT, () =>
  console.log(`Express server currently running on port: ${PORT}`)
);