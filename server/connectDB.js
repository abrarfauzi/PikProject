const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect("mongodb+srv://hananmadi:hananmadi@cluster0.xevknwe.mongodb.net/");
        console.log("CONNECTED to DB")
    } catch (error) {
      console.log(error);
      process.exit(1);  
    }
}
module.exports = connectDB;