const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        const uri = process.env.DB_URI;
        const conn = await mongoose.connect(uri);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } 
    catch(error) {
        console.log(`Error connecting to MongoDB Atlas: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;