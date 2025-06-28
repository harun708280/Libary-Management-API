import dotenv from 'dotenv'
import { connectDB } from './config/database'
import { app } from './app'
dotenv.config()
const PORT = process.env.PORT || 500

const startServer = async ()=>{
    await connectDB()
    app.listen(PORT,()=>{
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    })
}

startServer()