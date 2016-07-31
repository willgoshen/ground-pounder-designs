var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic('../ground-pounder-designs'));
app.listen(8080);
console.log("Listening on port 8000");
console.log("Access site at http://localhost:8080/index.html")
