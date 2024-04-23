import mongoose from "mongoose";


async function connectDB() {
    try {
          await mongoose.connect(process.env.MONGO_URI!)
          const connection = mongoose.connection;
            connection.on("error", (error) => {
                console.log(`connection error: ${error}`)
            })
            connection.on("connected", () => {
                console.log(`connected to database`)
                process.exit(1)
            } )
            
    } catch (error) {
        console.log(`something went wrong: ${error}`)
    }
}