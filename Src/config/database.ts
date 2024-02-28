import mongoose from 'mongoose'
import environments from '../constants/environments.js'

const connectDB = async () => {
	try {
		await mongoose.connect(environments.devDbUrl)
		console.log('Database Connected Successfully')
	} catch (error) {
		console.log('Not Connected')
		process.exit(1)
	}
}
export default connectDB
