const express = require('express');
const path = require('path');
const myAPIKey = "fd8aed99";
const bodyParser = require('body-parser');

const app = express();
const indexPage = require('./routes/index');

//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine',require('ejs').__express);
app.set('view engine','ejs');
app.set('views','views');



// app.get('/',(req,res,next)=>{
//     res.render('index',{title:'title'});
// });
app.use(indexPage);



app.listen(3000);

