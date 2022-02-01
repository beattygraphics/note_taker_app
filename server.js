const express = require("express");
const fs = require("fs");


const app = express();

//set initial port

const PORT = process.env.PORT || 3001;

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);



//listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});