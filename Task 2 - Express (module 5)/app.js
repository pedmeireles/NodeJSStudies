// //Steps to reproduce the code:

// /**
//  * npm init; Create a dummy project
//  * npm install express --save
//  * copy/paste the following code on app.js (or the main file, which you deifned in npm init). 
//  * run "node <main js file, defined in npm init>", without quotes .For example, "node app.js"
//  * 
//  */

// const express = require('express'); 

// const app = express();

// const paths = [
//     {
//     url: '/',
//     callback: (req, res, next) =>{
//         console.log("first dummy request");
//         next();
//     }},
//     {
//     url: '/',
//     callback: (req, res, next) =>{
//         console.log("second dummy request");
//         next();
//     }},
//     {
//     url: '/users',
//     callback: (req, res, next) =>{
//         console.log("users dummy request");
//         res.send("<h1> Hello, from the users page of website! </h1>");
//     }},
//     {
//     url: '/',
//     callback: (req, res, next) =>{
//         console.log("root dummy request");
//         res.send("<h1> Hello, from the root page of website! </h1>");
//     }},
// ]

// //First 2 middleware paths are the second assignment, but without the res.send();

// //The last 2 middleware paths are the ones for the assignment 3.\

// // the iteration is to spare unecessary lines of code, since the iterator will populate the middlewares in the app variable.
// paths.forEach(({url, callback}) => {
//     app.use(url, callback);
// });

// app.listen(3000);

// /** What was the most challenging? 
//  * I've wanted to test the iterator solution, to be more efficient and cleaner, and also avoid repeting the same function over and over again.
//  * The complexity for this was creating the callback parameter on the list of paths. 
//  * 
//  */

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('First Middleware!!!');
    next();
});

app.use('/users', (req, res, next) => {
    console.log('Second Middleware for "/users" !!!');
    res.send('<h1>List of Users!!!</h1><ol><li>Ram</li><li>Kumar</li></ol>');
});

app.use('/', (req, res, next) => {
    console.log('Second Middleware for "/"!!!');
    res.send('<h1>Welcome to Node using Express</h1>');
});

app.listen('3000');