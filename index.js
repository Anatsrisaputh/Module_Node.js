const express = require('express');  //import express module
const app = express(); // creat express app 
const dogRoute = require('./routes/dogRoute')
const catRoute = require('./routes/catRoute')


// // Crete ตัวที่  listen GET Methods ที่ path '/'
// app.get(`/`,function (req, res) {
//     res.send('Hello world');
// });

// app.get('/myname', function (req, res) {
//     res.send('Hello Jane');
// });

// //set app listen  on port 8000
// app.listen(8000, function() {
//     console.log('Server is running on port 8000')
// })
app.use('/cat',catRoute);
app.use('/dog',dogRoute);

app.get('/query_path', function (req, res) {
    console.log(req.query.age);
    console.log(req.query.name);
    console.log(req.query.number);
    res.send(req.query);
})

// app.get('/add', function (req, res) {
//     let num1 = Number(req.query.a);
//     let num2 = Number(req.query.b);
//     let answer = Number(num1 + num2);
//     console.log(answer);
//     answer = String(answer)
//     res.send(answer);
// })


app.get('/cal/:a/:mode/:b', function (req, res) {
    let firstNumber = Number(req.params.a);
    let seconNumber = Number(req.params.b);
    let answer;
    switch (req.params.mode) {
        case "add":
        answer = firstNumber + secondNumber;
        break;
        case "subtract":
            answer = firstNumber - secondNumber;
        break;
        case "multiply":
            answer = firstNumber / secondNumber;
        break;
        case "divide":
            answer = firstNumber * secondNumber;
        break;
    }
})

 answer = String(answer);
    res.send (answer);


//set app listen  on port 8000
app.listen(8000, function() {
    console.log('Server is running on port 8000')
})



// module.exports = router;
