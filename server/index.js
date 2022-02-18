import express from "express";// eslint-disable-line
import cors from 'cors';
import bodyParser from 'body-parser';
//components
import Connection from './connection/db.js';
import DefaultData from './default.js';
import Route from './routes/route.js';

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));
app.use('/',Route);


const port=8000;


Connection();  


app.listen(port,function() {
    console.log(`Server started on port ${port}`);
})

DefaultData();