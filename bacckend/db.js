const mongoose = require('mongoose');
const mongoURI="mongodb://localhost:27017";

const server='127.0.0.1:27017';
let database='inotebook';



const connectToMongo=async()=>
{

    mongoose.set('strictQuery',false);
    try{
        await mongoose.connect(`mongodb://${server}/${database}`);
        console.log('mongodb connected');
    }
    catch(err)
    {
        console.log('failed to connect to mongodb');
    }


};

module.exports=connectToMongo;