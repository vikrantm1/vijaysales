
var express = require('express');

var app=express();

app.get("/",(req,res)=>{

    res.send(

            "<h1>Vijay Sales</h1>"
            +"<hr/>"
            +"<h3>Our Products</h3>"
            +"<h4>Smart Devices Under Sales</h4>"+
            "<ol>"
                +"<li>Smart Watches</li>"
                +"<li>Mobiles</li>"
                +"<li>Washing Machines</li>"
                +"<li>T.V</li>"
                +"<li>Laptops</li>"
            +"</ol>"

    );

});

app.get("/aboutus",(req,res)=>{

    res.send(

            "<h1>About US</h1>"
            +"<hr/>"
            +"<h3>Trusted Brand in last 25 years</h3>"
            +"<h4>SWe sell products PAN India</h4>"+
            "<ol>"
                +"<li>Smart Watches</li>"
                +"<li>Mobiles</li>"
                +"<li>Washing Machines</li>"
                +"<li>T.V</li>"
                +"<li>Laptops</li>"
            +"</ol>"

    );

});

    var server=app.listen(9000);
    console.log("Vijay Sales App running on port 9000");