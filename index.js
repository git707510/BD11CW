let express = require('express');

let app = express();

app.get('/name',(req,res)=>{
  let myName = (req.query.name).toUpperCase();
  res.send(myName);
  console.log(myName);
})

app.get('/fullName',(req,res)=>{
  let myName = req.query.firstName + ' ' + req.query.lastName;
  res.send(myName);
})

app.get('/dateFormat',(req,res)=>{
  let dateFormat = req.query.month + ', ' + req.query.Year;
  res.send(dateFormat);
})

app.get('/greet',(req,res)=>{
  res.send("Namaste " + req.query.greet)
})

app.get('/formattedAddress',(req,res)=>{
  let formattedAddress = req.query.street + ', ' + req.query.city + ', ' + req.query.state;
  res.send(formattedAddress);
})

app.get('/email',(req,res)=>{
  res.send(req.query.userName + '@'+ req.query.domainName);
})

let PORT = 3000;

app.listen(PORT,()=>{
  console.log(`Server is running on port http://localhost/${PORT}`);
})