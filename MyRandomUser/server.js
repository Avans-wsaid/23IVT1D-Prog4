var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(request, response) {
    response.send('Hello Avans!');
});

app.get('/about', function(request, response) {
    response.send('Written by Walid');
});

app.post('/', function(request, response) {
    response.send('Hello Avans, POST request received!');
});

app.put('/', function(request, response) {
    response.send('Hello Avans, PUT request received!');
});

var items = Array(
    '{ "gender": "male", "name": { "title": "mr", "first": "virgil", "last": "pena" }, "location": { "street": "8701 shady ln dr", "city": "busselton", "state": "south australia", "postcode": 7378 }, "email": "virgil.pena@example.com", "login": { "username": "silverelephant802", "password": "picture", "salt": "pIJWDT59", "md5": "457f8b1a631beebd97360a0df85b7624", "sha1": "4d5954987ca0ceac93e3b40b3e6bca8645c99ff9", "sha256": "fe73c79fcccb03c39eaeaa6a6122e77a4adeb54b64292863b8ad794a102d9385" }, "dob": "1974-08-12 22:57:29", "registered": "2015-09-06 12:25:58", "phone": "03-6400-8720", "cell": "0445-489-222", "id": { "name": "TFN", "value": "223885560" }, "picture": { "large": "https://randomuser.me/api/portraits/men/2.jpg", "medium": "https://randomuser.me/api/portraits/med/men/2.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/2.jpg" }, "nat": "AU" }',
    '{ "gender": "female", "name": { "title": "mrs", "first": "alexis", "last": "johnson" }, "location": { "street": "2751 elgin st", "city": "maidstone", "state": "newfoundland and labrador", "postcode": 89465 }, "email": "alexis.johnson@example.com", "login": { "username": "smallmouse513", "password": "sniffing", "salt": "nia7RMQa", "md5": "9b1f0136ef6aabe40276c60e5523c61b", "sha1": "23900a29981a701afcabb6df65bb567a9c0b4397", "sha256": "ec6f24c52d59efc6e245b4d364f18ef35ffd0f80a45065e99a1290dc3b69d0ee" }, "dob": "1949-05-03 11:59:48", "registered": "2010-09-23 07:23:12", "phone": "163-005-1432", "cell": "727-458-3284", "id": { "name": "", "value": null }, "picture": { "large": "https://randomuser.me/api/portraits/women/9.jpg", "medium": "https://randomuser.me/api/portraits/med/women/9.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/women/9.jpg" }, "nat": "CA" }',
    '{ "gender": "male", "name": { "title": "mr", "first": "dominic", "last": "chow" }, "location": { "street": "9921 dieppe ave", "city": "inwood", "state": "british columbia", "postcode": 95581 }, "email": "dominic.chow@example.com", "login": { "username": "smallgoose231", "password": "donjuan", "salt": "6Ko1dlpx", "md5": "3226e0f890ed68db6e7dd32fad92571c", "sha1": "5a54cfdc521dabdf0fa6e976f79792c33144e25e", "sha256": "d8453eb3b8c110b8bfaaaf01aeb332183278a224e81e4977722a4bb5a01abc84" }, "dob": "1993-12-13 10:05:50", "registered": "2014-09-05 19:09:31", "phone": "986-820-3485", "cell": "269-545-7671", "id": { "name": "", "value": null }, "picture": { "large": "https://randomuser.me/api/portraits/men/35.jpg", "medium": "https://randomuser.me/api/portraits/med/men/35.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/35.jpg" }, "nat": "CA" }'
);

app.get('/api', function(request, response) {

    response.setHeader('Content-Type', 'application/json');

    var item = items[Math.floor(Math.random()*items.length)];

    response.send('{"results": ['  + item +  ']}');
});

app.all('*', function(request, response) {
    response.status(404);
    response.send('404 - Not found');
});

app.listen(port, function() {
    console.log('Server app is listening on port ' + port);
});

