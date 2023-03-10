const express = require('express');
const app = express();
const mongoose = require('mongoose');
require("dotenv/config");
const cors = require("cors");
const bodyParser = require('body-parser');
// ======================Routes=====================
const user = require("./routes/User.route.js");
const login = require("./routes/Login.route");
const logistic = require('./routes/Logistic.route');




// ======================Monogodb===================
mongoose.set('strictQuery', false);
const connectMongo = async () => {
  try {
     await mongoose.connect(process.env.DB_Connection)
      console.log("Mongodb Connection was succeed.")
    } catch (error) {
      console.log(error);
  }
}
connectMongo();

// ---------to handle errors after intial connection--------
// ADD THIS IS YOUR CONNECTION FILE
mongoose.connection.on('error', err => {
    console.log(err);
});

app.get('/', (req, res)=>{
    res.send("Hello Express.js");
})




// =====================Using Middlewares=================
app.use(
  cors()
);
// app.use(
//   cors({
//     origin: "*",
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     optionsSuccessStatus: 204,
//   })
// );



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use("/user", user);
app.use("/login", login);
app.use("/logistic", logistic)




// =====================Listening on Port==============

const Port = process.env.PORT || 8080;
app.listen(Port, (err) => {
  if(err) throw err;
  console.log(`Server is listening on port ${Port}`);
})
