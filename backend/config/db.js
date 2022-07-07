const mongoose = require('mongoose') 


//to connect to the database, mongoose methods return promises so async
 const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)  //cyan.underline is from colors package

    }catch(error){
        console.log(error)
        process.exit(1)
    }
}


module.exports = connectDB

