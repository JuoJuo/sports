const { Sports, User } = require("../schema");

async function getSportsList(page = 1, size = 10) {
  const docs = await Sports
    .find()
    .skip((page - 1) * size)
    .limit(size);

  return docs;
}

async function findUser(Obj) {
  console.log(Obj);
  const docs = await User.findOne(Obj)
  return docs;
}

module.exports = {
  getSportsList,
  findUser,
};
