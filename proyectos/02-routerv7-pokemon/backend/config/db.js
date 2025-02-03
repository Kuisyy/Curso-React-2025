import mongoose from 'mongoose';
import dotenv from 'dotenv';


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOSE_URL);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
