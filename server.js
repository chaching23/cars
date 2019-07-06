var express = require("express");
var app = express();

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));



app.get("/users", function (request, response){
    response.render('users');
})



app.get("/corvette", function (request, response){

    var users_array = [
        {image: './images/corvette.jpg' , favorite_food: "burger", age: "20", sleeping_spots: "zzzz"}, 

    ];
    response.render('details', {users: users_array});
})


app.get("/fordgt", function (request, response){

    var users_array = [
        {image: "./images/fordgt.jpg" ,favorite_food: "hot dog", age: "25", sleeping_spots: "xxxx"}, 
    ];
    response.render('details', {users: users_array});
})


app.get("/ferrari", function (request, response){

    var users_array = [

        {image: "./images/ferrari.jpg" ,favorite_food: "sanwhich", age: "30", sleeping_spots: "yyyy"}, 
    ];
    response.render('details', {users: users_array});
})





app.listen(8000, function() {
    console.log('listening on port 8000')
})

// app.get('/home', function(request, response) {
//     response.render('home');
// })

// app.get('/corvette', function(request, response) {
//     response.render('corvette');
// })

// app.get('/fordgt', function(request, response) {
//     response.render('fordgt');
// })

// app.get('/ferrari', function(request, response) {
//     response.render('ferrari');
// })
