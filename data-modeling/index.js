'use strict';

const mongoose = require('mongoose');
const Catagories = require('./models-singular/categories.js');
// Require your model

// Mongoose Server URI
const MONGOOSE_URI = 'mongodb://localhost:27017/class05';

// Connect
mongoose.connect(MONGOOSE_URI);
let food = new Catagories();
food.create({name:'Banana', description: 'could be'})
  .then(item =>{
    console.log(item);
  }) 
  .catch (err => {
    console.error(err);
  });

// Do some work

// Disconnect
mongoose.disconnect();