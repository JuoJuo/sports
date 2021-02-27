const mongoose = require('mongoose');

const Sports = new mongoose.Schema({
  type: String,
  desc: String,
  img: String,
});

module.exports = Sports;
