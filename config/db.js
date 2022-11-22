import mongoose from "mongoose";

const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(conn => console.log(`Connected DB: ${conn.connection.host}`))
        .catch(error => {
            console.log(error.message)
            process.exit(1);
        })
}

export default dbConnection;