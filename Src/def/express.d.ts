declare namespace Express {
	export interface Request {
		user: import('mongoose').FlattenMaps<
			import('../models/interface/IUser').IUserModule.IUserObject
		> & { _id: import('mongoose').Types.ObjectId }

	}
}
