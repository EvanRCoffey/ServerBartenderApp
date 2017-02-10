var express = require('express');
var Blowfish = require('blowfish');

var app = express();
var port = 3000;

var bf = new Blowfish("secret key");

var encrypted = bf.encrypt("text");
console.log(encrypted);

var decrypted = bf.decrypt(encrypted);
console.log(decrypted);

app.listen(port);