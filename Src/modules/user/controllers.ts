import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { ObjectId } from 'mongoose'
import environments from '../../constants/environments.js'
import { returnError } from '../../utils/errorHandlingUtils.js'
import UserRepository from './repositories.js'
const signToken = (id: ObjectId) => {
	return jwt.sign({ id }, environments.jwtSecret, {
		expiresIn: environments.jwtExpires,
	})
}

const userController = {
	contactUser: async (req: Request, res: Response) => {
		try {
			const { name, mobileNumber, source, tags, attributes } = req.body

			const user = await UserRepository.contactUser({
				name,
				mobileNumber,
				source,
				tags,
				attributes,
			})

			const token = signToken(user._id)
			// can send to client in res as well cookie
			res.status(201).json({
				success: true,
				user,
				token,
			})
		} catch (error) {
			returnError(req, res, error)
		}
	},

	getUserById: async (req: Request, res: Response) => {
		try {
			const { userId } = req.params

			const user = await UserRepository.getUserById(userId)

			return res.status(200).json({
				success: true,
				user,
			})
		} catch (error) {
			returnError(req, res, error)
		}
	},

	updateUserById: async (req: Request, res: Response) => {
		try {
			const { userId } = req.params

			const { name, mobileNumber, source, tags, attributes } = req.body
			const updateUser = await UserRepository.updateUserById(
				userId,
				name,
				mobileNumber,
				source,
				tags,
				attributes
			)

			return res.status(200).json({ success: true, user: updateUser })
		} catch (error) {
			returnError(req, res, error)
		}
	},
}

export default userController
