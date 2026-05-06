require('dotenv').config();
const express = require("express")
const momgoose =require("mongoose");
const listen =require("./config/listen");
const Database =require("./config/db");
const app = express()






listen(app);
Database(momgoose);


