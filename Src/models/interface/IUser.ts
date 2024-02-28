import { Document } from 'mongoose'

export declare module IUserModule {
	interface IMobileNumber {
		country: string
		countryCode: string
		mobileNumber: string
	}

	interface IAttributes {
		company: string
		designation: string
		website: string
	}

	interface IUser {
		name: string
		mobileNumber: IMobileNumber
		tags: string[]
		source: string
		attributes: IAttributes
	}
	interface IUserObject extends Document {
		name: string
		mobileNumber: IMobileNumber
		tags: string[]
		source: string
		attributes: IAttributes
	}
}
