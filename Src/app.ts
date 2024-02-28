import dotenv from 'dotenv'
import express from 'express'
import connectDB from './config/database.js'
import userRoute from './modules/user/routes.js'

dotenv.config()
const app = express()

// Built in middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Custom middleware
app.use('/api/v1/user', userRoute)
const port = process.env.PORT || 5000
// Run the server if database connected successfully
connectDB().then(() => {
	app.listen(port, () => {
		console.log(`Server is running on the port ${port}`)
	})
})
