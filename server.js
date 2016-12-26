var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/src/'));

app.listen(8080);

console.log('Express listening on port 8080, open http://localhost:8080');