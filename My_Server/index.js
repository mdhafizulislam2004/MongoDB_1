const express = require('express');
const app = express();
const cors=require('cors')
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('MongoDB Start');
});

const users = [
  { id: "1", name: "Habib", email: "hafizul2004habib@gmail.com" },
  { id: "2", name: "Habib", email: "hafizul2004hafizul@gmail.com" },
  { id: "3", name: "Hafizul", email: "hafizul2004official@gmail.com" },
]

app.get('/user', (req, res) => {
  res.send(users);
});

app.post("/user",(req,res)=>{
  console.log("Add User Data",req.body);
  const newUser=req.body
  newUser.id=users.length+1
  users.push(newUser)
  res.send(newUser)
})

app.listen(port, () => {
  console.log(`MongoDB Data Base ${port}`);
});