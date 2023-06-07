
const express = require('express');
const cors = require('cors');
const connectDB = require('./utils/db');
const Routes = require('./routes/userRoutes');
const serverless = require("serverless-http");

require('dotenv').config();

const app = express();




connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/.netlify/functions/api`', Routes);




module.exports = app;
module.exports.handler = serverless(app);