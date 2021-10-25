const express = require('express'); // can include express because of the node module // common.js system (module)
const path = require('path')
require('dotenv').config()

console.log(`The best class at New Paltz is ${process.env.BEST_CLASS}`)

const usersController = require('./controllers/users');

const app = express()
const port = process.env.PORT || 3000

app
    .use('/', express.static(path.join(__dirname, '../docs')))
    .use('/users', usersController)

app
    .get('*', (req, res)=> res.sendFile(path.join(__dirname, '../docs/index.html')))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})