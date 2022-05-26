const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const infoRoute = require("./routes/info");



const startServer = async (server) => {
  try {
    const cors=require('cors');

    const app = express();
    const port = process.env.PORT || 3000;
    
    // middlewares
    app.use(cors());
    app.use(express.json());
    // Add headers before the routes are defined
    app.use(function (req, res, next) {
    
      // Website you wish to allow to connect
      res.setHeader('Access-Control-Allow-Origin', '*');
    
      // Request methods you wish to allow
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
      // Request headers you wish to allow
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
      // Set to true if you need the website to include cookies in the requests sent
      // to the API (e.g. in case you use sessions)
      res.setHeader('Access-Control-Allow-Credentials', true);
    
      // Pass to next layer of middleware
      next();
    });
    app.use('/api', infoRoute);
    
    // routes
    app.get("/", (req, res) => {
        res.send("Welcome to my API");
    });
    
    
    
    /* // mongodb connection
    // connect to mongodb
    mongoose.connect('mongodb://myUser:kHzzHQ45uACiZqFO@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(()=>console.log("Conect mongodb connection"));
    
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'mongodb connection error:')); */
    
    app.listen(port, () => console.log("Server listening to", port));
  } catch (error) {
    console.log(error);
    return error;
  }
}
module.exports = { startServer }

