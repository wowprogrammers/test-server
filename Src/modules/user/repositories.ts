import { IUserModule } from '../../models/interface/IUser'
import User from '../../models/user/userModel.js'

class UserRepository {
	async contactUser(data: IUserModule.IUser) {
		// check required data and handle all business logic here

		if (!data.tags) {
			throw new Error('tags are required')
		}

		const user = await User.create(data)

		return user
	}

	async getUserById(userId: string) {
		if (!userId) {
			throw new Error('userId is required')
		}

		const user = await User.findById(userId).lean()

		if (!user) {
			throw new Error('User not found')
		}

		return user
	}

	async updateUserById(
		userId: string,
		name: string,
		mobileNumber: IUserModule.IMobileNumber,
		source: string,
		tags: string[],
		attributes: IUserModule.IAttributes
	) {
		if (!userId) {
			throw new Error('userId is required')
		}

		if (!name && !mobileNumber && !source && !tags && !attributes) {
			throw new Error('update data is required')
		}

		const user = await User.findByIdAndUpdate(
			userId,
			{
				$set: {
					name,
					mobileNumber,
					source,
					tags,
					attributes,
				},
			},
			{
				new: true,
			}
		)

		if (!user) {
			throw new Error('invalid user id. user not found')
		}

		return user
	}
}

export default new UserRepository()
