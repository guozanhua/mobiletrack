var socketIO = require('./dependencies/socket.io');
var io = require('./dependencies/sails.io')(socketIO);

var L = require("./dependencies/leaflet.js");

L.Icon.Default.imagePath = 'images';