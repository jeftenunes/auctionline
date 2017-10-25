const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db/sequelize.js');
const routes = require('./server/routes/index.route.js');

const app = express(),
      port = process.env.PORT || 3000;;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);