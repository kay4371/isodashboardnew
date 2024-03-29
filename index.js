var express = require('express');
var bodyParser = require('body-parser');
var app = express();
let port=process.env.PORT||3000;
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render("index")
});

app.get('/form', function (req, res) {
    res.render("form")
});

app.post('/form', urlencodedParser, function (req, res) {
    res.render("finish", {data: req.body});
});

app.use(express.static(__dirname + '/public'));
app.listen(port,()=>{
    console.log("App is listening on port http://localhost:", port)
});