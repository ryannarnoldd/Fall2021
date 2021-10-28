/* Ry
*/
const express = require('express');
const model = require('../models/users');
const app = express.Router();

app
    .get('/:user_id', (req, res, next)=> {
        res.send(model.Get(req.params.user_id))
    })

module.exports = app;