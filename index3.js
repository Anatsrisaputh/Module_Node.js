
const express = require('express');
const app = express();

app.get(('/add/:a/mode/:b'), function (req, res) {
    // let answerPositive = Number(req.params.a) + Number(req.params.b);
    // let answerMinus = Number(req.params.a) - Number(req.params.b);
    // let answerDivide = Number(req.params.a) / Number(req.params.b);
    // let answerMultiply = Number(req.params.a) * Number(req.params.b);
    let answer = 0;

if (mode == Positive) {
    answer = Number(req.params.a) + Number(req.params.b);
}else if (mode == Minus) {
    answer = Number(req.params.a) - Number(req.params.b);
}else if (mode == Divide) {
    answer = Number(req.params.a) / Number(req.params.b);
}else if (mode == Multiply) {
    answer = Number(req.params.a) * Number(req.params.b);
}
else;
})

console.log(answer)
answer = String(answer)
    res.send(answer);

app.listen(8000, function() {
    console.log('Server is running on port 8000')
})



