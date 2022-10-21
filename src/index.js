const path = require('path');
const express = require('express');
const cors = require("cors");
//const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const { default: mongoose } = require('mongoose');
const shoeRoute = require ("../routes/shoe");
const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, 'public')));

dotenv.config();
//CONNECT DB
app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));

mongoose.connect((process.env.MONGODB_URL), () => {
  console.log("Connect to MongoDB");
});



//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', handlebars.engine(
  {
    extname: '.hbs'
  }
));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


app.get('/', (req, res) => {
  res.render('home');
})

app.get('/search', (req, res) => {
  res.render('search');
})

//Routes
app.use("/v1/shoe", shoeRoute)

app.listen(port, () => 
  console.log(`Example app listening get http://localhost:${port}`)
);