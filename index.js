const express = require('express');

const app = express();


app.use('/public',express.static(`${__dirname}/public`));

let home = require('./routes/home');

home(app);


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
});