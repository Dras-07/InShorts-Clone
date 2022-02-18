import mongoose from 'mongoose';

const Connection= async()=>{
   try{
       const url=`mongodb://anjanays619:Semite123@clone-inshort-shard-00-00.bkogf.mongodb.net:27017,clone-inshort-shard-00-01.bkogf.mongodb.net:27017,clone-inshort-shard-00-02.bkogf.mongodb.net:27017/PROJECT-0?ssl=true&replicaSet=atlas-v5bac9-shard-0&authSource=admin&retryWrites=true&w=majority`;
await  mongoose.connect(url,{useNewUrlParser:true});
console.log('connected to database');
   }catch(error){
       console.log('error',error);
   }
}

export default Connection;



