const connectToMongo = require('./db');
const express = require("express");
const app = express();
connectToMongo();

const port = 3005;

//Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));



// app.get('/',(req,res)=>res.send("Hello sagar!")),

app.listen(port,()=>{
    console.log(`App Listening At port no ${port}`);
})

