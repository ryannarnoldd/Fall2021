const express = require('express'); // can include express because of the node module // common.js system (module)
const path = require('path')
require('dotenv').config()

console.log(`The best class at New Paltz is ${process.env.BEST_CLASS}`)

const usersController = require('./controllers/users');
const postsController = require('./controllers/posts');

const app = express()
const port = process.env.PORT || 3000

app
    .use('/', express.static(path.join(__dirname, '../docs')))

    .use(express.json())
    .use('/users', usersController)
    .use('/posts', postsController)

app
    .get('*', (req, res)=> res.sendFile(path.join(__dirname, '../docs/index.html')))

app
    .use((err, req, res, next) => {
      console.log(err)
      res.status(err.code || 500).send(err);
    })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})