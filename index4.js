const express = require('express');  //import express module
const app = express(); // creat express app 
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})) // app.use('/access_file',express.static('public'))
app.post('/add', function (req, res) {
    let firstNumber = Number(req.body.a);
    let secondNumber = Number(req.body.b);
    let answer;
    switch (req.body.mode) {
        case "add":
            answer = firstNumber + secondNumber;
            break;
        case "minus":
            answer = firstNumber - secondNumber;
            break;
        case "multiply":
            answer = firstNumber * secondNumber;
            break;
        case "divide":
            answer = firstNumber / secondNumber;
            break;
        default:
            answer = firstNumber + secondNumber;
            break;
    }

   
    
    res.status(200).send(`This answer is ${answer}`);
})

app.listen(8000, function() {
    console.log('Server is running on port 8000')
})