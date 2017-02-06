// Declarations
const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    app = express(),
    cors = require('cors');

// routes 
const port = 3333,
    index = require('./routes/index'),
    todos = require('./routes/todos')
    

// views
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs'); 
app.engine('html', require('ejs').renderFile);

// set static folders
app.use(express.static(path.join(__dirname,'client')));

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// CORS Setup
app.use(cors());
app.use( function(req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Access-Control-Allow-Headers, Authorization, Accept'); // If needed
    res.header('Access-Control-Allow-Credentials', false);
    next();
});


// routes
app.use('/',index);
app.use('/api',todos);

app.listen(port, ()=>{
    console.log('Server started and listening on port ' + port);
});