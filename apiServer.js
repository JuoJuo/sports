const express = require('express');
const session = require("express-session");
const path = require("path");
const { findUser, getSportsList } = require("./dao");
const app = express();

const PORT = 80;
app.use(session({ secret: 'my-ass' }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')))

app.use('*', (req, res, next) => {
  if (req.session.loginUser || req.originalUrl === '/login') {
    return next();
  }

  res.status(401).send({msg: 'no auth!'});
});

app.post('/login', async (req, res) => {
  const rs = await findUser(req.body);
  if (rs) {
    req.session.loginUser = rs._id;
    req.session.cookie.maxAge = 2 * 60 * 60 * 1000;
    req.session.cookie.httpOnly = false;
    res.status(200).send({data: rs, msg: 'success'});
  } else {
    res.status(403).send({msg: 'please check your userName or password'});
  }
})

app.get('/sportsType',async (req, res) => {
  const list = await getSportsList();
  res.send(list);
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
