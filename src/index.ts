//********** Imports **********//
import Server  from "./server";
import mongoose from 'mongoose';

const server = new Server(5500);
server.start();

mongoose.connect("mongodb://127.0.0.1:27017/liv-sig-gen-api", 
(err)=>{
    if(!err)
        console.log("MongoDB connected");
    else
        console.log("MongoDBError : ", err);
});


