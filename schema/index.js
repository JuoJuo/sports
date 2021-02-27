const SportsModel = require('./Sports');
const UserModel = require('./User');
const mongoose = require('mongoose');

const databaseUrl = 'mongodb://127.0.0.1:27017/sport';

const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const conn = mongoose.createConnection(databaseUrl, config);

const Sports = conn.model('Sports', SportsModel);
const User = conn.model('User', UserModel);

module.exports = {
  Sports,
  User,
};
