const express = require('express');
const app = express();
const port = 3030;
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(process.env.PORT || port, () => console.log(`Listening at ${port}`));

module.exports = app;