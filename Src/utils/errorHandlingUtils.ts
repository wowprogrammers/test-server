import { Request, Response } from 'express'
import mongoose from 'mongoose'

export const returnError = (_: Request, res: Response, error: any) => {
	console.error(error)

	if (res.headersSent) {
		return
	}

	if (error instanceof Error) {
		res.status(400).json({ success: false, message: error.message })
		return
	}

	if (error instanceof mongoose.MongooseError) {
		res.status(400).json({ success: false, message: error.message })
		return
	}

	res.status(500).json({
		success: false,
		message: 'An unknown error occurred',
	})
}
