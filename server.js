const express = require('express');
const mongoose = require('mongoose');
const connectionDB=require('./middlewares/db')
const cal = require('./routes/calculatorRoutes');

const app = express();

app.use('/',cal);

connectionDB;
const PORT=process.env.PORT ;
app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});

