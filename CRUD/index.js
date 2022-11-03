const express=require('express');
const mongoose=require('mongoose');

const url='mongodb://localhost/AlienDBex';

const app=express();

mongoose.connect(url,{useNewUrlParser:true});
const con=mongoose.connection;

con.on('open',()=>{
    console.log('connected...');
})

app.use(express.json());

const xyzRouter=require("./routers/xyz");
app.use('/xyz',xyzRouter);

app.listen(9000,()=>{
    console.log('Server Started');
})