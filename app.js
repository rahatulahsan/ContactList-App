//import modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

//Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/contactlist');

//On connection
mongoose.connection.on('connected', () => {
    console.log('Connected to Database mongodb @ 27017');
});

mongoose.connection.on('error', (err) => {
    if(err){
        console.log('Error establishing Database connection', + err);
    }
});


//port no
const port = 3000;

//Adding middleware = cors
app.use(cors());

//Body-parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api', route);


//testing server
app.get('/', (req, res) => {
    res.send('Hello Buddy!');
});


app.listen(port, () => {
    console.log('Application has been started on port ' + port);
});
