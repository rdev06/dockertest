const express = require('express');
const port = 4000;
const app = express();
let mor =(req,res,next)=>{
    console.log(req.method+' '+req.url)
next()
}
app.use(mor);
app.get('/',(req,res)=>res.send('index page is working fine'));
app.get('/about',(req,res)=>res.send('about page is working fine'));
app.listen(port,()=>console.log(`server is running on http://localhost:${port}`))