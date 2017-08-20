var express = require('express');//create the webserver, for listening
var morgan = require('morgan');//output logs
var path = require('path');
var app = express();
var Pool = require('pg').Pool;
var crypto = require('crypto');

var config = {
    user: 'shreya3112',
    database: 'shreya3112',
    host: 'db.imad.hasura-app.io',
    post: '5432',
    password: process.env.DB_PASSWORD
}
app.use(morgan('combined'));

function createTemplate(data){
    var title = data.title;
    var heading  = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `

            <html>
                
                <head>
                    <title>
                        ${title}
                    </title>        
                    <link href="/ui/style.css" rel="stylesheet" />
                </head>
                
                <body>
                    <div class= "container">
                    <div>
                        <a href="/">Home</a>
                    </div>
                    <hr/>
                    <h3>
                        ${heading}
                    </h3>
                    <div>
                        ${date.toDateString()}
                    </div>
                    <div>
                        ${content}
                    </div>
                    </div>
                </body>
            </html>
                    `;
        return htmlTemplate;
    
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

function hash(input, salt){
    var hashed = crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
    return ['pbkdf2Sync', '10000', salt, hashed.toString('hex')].join('$');
}
app.get('/hash/:input', function(req, res){
    var hashedString = hash(req.params.input, 'this is a random string');
    res.send(hashedString);
})
var pool = new Pool(config);
app.get('/test-db', function(req, res){
//make a select request
pool.query('SELECT * FROM test', function(err, result){
    if(err){
        res.status(500).send(err.toString());
    }else{
        res.send(JSON.stringify(result.rows));
    }
});

//return a respose with the results
});

var counter = 0;
app.get('/counter', function(req, res){
    counter = counter + 1;
    res.send(counter.toString());
});

var names = [];
app.get('/submit-name', function(req, res){//URL: /submit-name?name=xxxx
   //Get the name from the request object
   var name = req.query.name; 
   names.push(name);
   //JSON  javascript object notaiton
   res.send(JSON.stringify(names));
});

app.get('/articles/:articleName', function(req, res){
    //articleName = article-one
    //Select * FROM article WHERE title = article-one //- is coming as the minus operator so 
    pool.query("SELECT * FROM article WHERE title = $1", [req.params.articleName] , function(err, result){
        if(err){
            res.status(500).send(err.toString());
        }
        else{
            if(result.rows.length === 0){
                res.status(400).send("Article not found");
            }
            else{
            var articleData = result.rows[0];
            res.send(createTemplate(articleData));
            }
        }
    });
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
