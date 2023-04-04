// index.js

// init project
require('dotenv').config();
var express = require('express');
var app = express();


var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));


app.use(express.static('public'));

/*
FRONT END
HTML page with project name and examples
(This was created for me by FCC)
*/
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// BACK END

app.get('/api/whoami', function (req, res) {
/*
Inputs:
  N/A
Outputs:
  JSON object with ipaddress, language, and software keys:
  {
    ipaddress: ip address string,
    language: preferred language string,
    software: software string
  }
*/
  res.json({
    "ipaddress": req.headers["x-forwarded-for"],
    "language": req.headers["accept-language"],
    "software": req.headers["user-agent"]
  });
});

// listen for requests
var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
