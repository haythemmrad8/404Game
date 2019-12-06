const express = require('express');
const app = express();
const path = require('path');

 
/*app.get('/404/game',(req,res)=>{
  res.sendFile(path.join(__dirname+'/index.html'));
});*/
/*
router.get('/404',(req,res)=>{
  res.sendFile(path.join(__dirname+'/404.html'));
});
*/




app.use(express.static('public'));
app.use(function(req, res, next){
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname+'/index.html'));
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

//add the router
//app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
