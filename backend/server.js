const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./src/routes");

const app = express();

const port = process.env.PORT || 5000;

//
//mongodb+srv://DataBaseUser:fI3eiG5ylhvCDNOt@cluster0.mqflduw.mongodb.net/test
mongoose.connect(
  "mongodb+srv://DataBaseUser:fI3eiG5ylhvCDNOt@cluster0.mqflduw.mongodb.net/test",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useFindAndModify: false,
  },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("MongoDB conectado com sucesso!");
    }
  }
);
app.use(cors());

app.use(cookieParser());

app.use(express.json());

app.use(routes);

app.listen(port, function () {
  console.log(`Server funfando na porta ${port}`);
});
