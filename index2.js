const express = require('express');
const app = express();
const userRoute = require('./routes/userRoute');

app.use('/user', userRoute);


app.listen(8000, function() {
    console.log('Server is running on port 8000')
})
