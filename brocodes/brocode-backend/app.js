const express = require('express');
const cors = require('cors');
const app = express();
const validusers = [{
    username:'mrigank',
    password:'mrigank'
},
{ 
    username:'ankit',
    password:'mrigank'
},

{ 
    username:'digbijaya',
    password:'mrigank'
},
{ 
    username:'manj',
    password:'mrigank'
},
{ 
    username:'pavan',
    password:'mrigank'
},
{ 
    username:'bhagwan',
    password:'mrigank'
},

];
 

app.use(cors());
app.use(express.json());



app.post("/api/login", (req, res) => {
    const { username, password } = req.body;
    console.log(username);
    if (validusers.find(user => user.username === username && user.password ===password)){
        return res.status(200).send(true);
    } else {
        return res.status(403).send(false);
    }
});

app.post("/api/sigup",(req,res) =>{
    const {username,password} = req.body;
    validusers.push({username,password});
    console.log(username , password);
    return res.status(200).send('user added sucessfully');
});

app.listen(3003);

console.log("Listening on port 3003");
