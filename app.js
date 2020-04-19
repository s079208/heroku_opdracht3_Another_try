const express = require('express');
const app = express();
const path = require('path');
const port = 5000;
const blogposts = require('./data/portfolio.json');


app.set('view engine', 'ejs');
app.set('views',  path.resolve(__dirname, 'views'));
app.use(express.static('public'));


app.get("/", function(request, response){
  response.render("home",{
    posts: blogposts.blog,
    post: blogposts.blog[request.params.postid]
  });
});
app.get("/werk", function(request, response){
  response.render("werk",{
    posts: blogposts.blog,
    post: blogposts.blog[request.params.postid]
  });
});
app.get("/contact", function(request, response){
  response.render("contact");
});

app.get('/werk/:postid', function(req,res){
  res.render('detail', {
    post: blogposts.blog[req.params.postid]
  });
});


app.use(function(request, response){
  response.statusCode = 404;
  response.render("404");
});


app.set('port', (process.env.PORT || 5000));
// app luisteren naar applicatiepoort
app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get('port'));
  });
