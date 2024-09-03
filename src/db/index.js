import mongoose from 'mongoose';
import {DB_NAME} from '../constants.js';


const connectDB = async () => {
    try {
        const mongoURI = "mongodb+srv://sakshamagarwal1616:saksham1616@cluster0.yzusa.mongodb.net/myDatabase?retryWrites=true&w=majority";

        const connectionInstance = await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`\nMongoDB connected!! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MONGODB CONNECTION ERROR:", error);
        process.exit(1);
    }
}


// const connectDB = async () => {
//     try {
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
//     }
//     catch(error){
//         console.log("MONGODB CONNECTION ERROR",error);
//         process.exit(1);
//     }
// }

export default connectDB;