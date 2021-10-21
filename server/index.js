const express = require('express'); // can include express because of the node module // common.js system (module)
const usersController = require('../controllers/users');


const app = express()
const port = 3000

app
    .get('*', (req, res, next)=> {
      console.log('A request cam')
      next();
    })
    .get('/', (req, res) => {
      res.send('Hello World!')
    })
    .get('/newpaltz', (req, res) => {
      res.send('Hello New Paltz!')
    })

    .use ('/users', usersController)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// 'vue ui' 