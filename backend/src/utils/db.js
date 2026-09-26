import mongoose from "mongoose"

const connectDb = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongoDb connected")
    }
    catch(error) {
        console.error("MongoDb connection failed", error)
        process.exit(1)
        // process.exit(0) means program ended successfully
        // process.exit() means stops nodejs program immediately
    }
}

export default connectDb;