
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000 || process.env.PORT;
require('dotenv').config();
const connectDB = require('./utils/db');
const userRoutes = require('./routes/userRoutes');


connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/', userRoutes);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
