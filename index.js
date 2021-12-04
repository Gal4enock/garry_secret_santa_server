const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const potterRouter = require('./potterRouter');
const PORT = process.env.PORT || 4000;
const URL = 'mongodb+srv://gaga:gaga123@cluster0.54q8g.mongodb.net/db-potters?retryWrites=true&w=majority';

const app = express();

app.use(cors({
  origin: '*',
}));

app.use(express.json());
app.use('/', potterRouter);

const start = async () => {
  try {
    await mongoose.connect(URL);
    app.listen(PORT,
      () => console.log(`server is listening on port ${PORT}`))
  }
  catch (e) {
    console.log(e);
  }
};

start();
