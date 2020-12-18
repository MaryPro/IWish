const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const morgan = require('morgan')
const router = require ('./routes/router');
// const { createIwishDB } = require('./seeder');


mongoose.connect('mongodb+srv://AdminSuper:rktnrf37@cluster0.i7upe.mongodb.net/Iwish?retryWrites=true&w=majority', {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(() => console.log('Connected MongoAtlas'))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
// createIwishDB();

app.use('/', router);




module.exports = app;

