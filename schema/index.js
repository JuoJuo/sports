const SportsModel = require('./Sports');
const UserModel = require('./User');
const mongoose = require('mongoose');

const databaseUrl = 'mongodb+srv://sporting:zhadi123456@cluster0.jlhwj.mongodb.net/sport';

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
