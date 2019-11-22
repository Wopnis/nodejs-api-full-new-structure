const express = require('express');
const router = require('./routers/router');
const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost:27017/users-database', { useNewUrlParser: true });

const app = express();
const port = process.env.PORT || 8000 ;
app.use(express.json()) ;

app.use(router);



app.listen(port, () => {
    console.log('server on port ' + port)
})