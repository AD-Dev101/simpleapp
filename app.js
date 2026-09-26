require('dotenv').config()
const express = require('express');
const app = express();
const port = 4000;
const gh={
  "Name": "AD",
  "Course": "Btech",
};

app.get('/', (req, res) => {
  res.send("<h1>HELLO WORLD!</h1>");
});
app.get('/insta',(req,res)=>{
    res.send("nvm._.avirall");
});
app.get('/yt',(req,res)=>{
    res.send("MR BEAST");
});
app.get('/github',(req,res)=>{
  res.json(gh);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});