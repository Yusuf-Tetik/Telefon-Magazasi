// // request - response => server

// // http

// var http = require("http") // require bir kütüphaneyi projemize dahil etmeye yarar
// //node modules => http, fs, os

// var server = http.createServer((req, res) => {
// var fs = require("fs");
//     console.log(req.url);

//     if(req.url == "/")
//     {
//         fs.readFile("index.html", (err, html) => {
//             res.write(html);
//             res.end();
//         });
//     }
//     else if(req.url == "/products")
//     {
//         fs.readFile("urunler.html", (err, html) => {
//             res.write(html);
//             res.end();
//         });
//     }
//     else
//     {
//         fs.readFile("404.html", (err, html) => {
//             res.write(html);
//             res.end();
//         });
//     }

// });

// server.listen(3000, () => {
//     console.log("node.js server at port 3000");
// });



// Express Server
const express = require("express");
const app = express();
const userRoutes= require("./routes/user");


app.set("view engine","ejs");

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.use(userRoutes);

app.listen(3000, () => {
    console.log("listening on port 3000");
});