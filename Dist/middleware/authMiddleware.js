import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import environments from '../constants/environments.js';
import User from '../models/user/userModel.js';
const Authentication = {
    passport: async (req, res, next) => {
        try {
            let token;
            if (req.headers.authorization &&
                req.headers.authorization.startsWith('Bearer')) {
                token = req.headers.authorization.split(' ')[1];
            }
            if (!token) {
                return res.status(401).json({ Error: 'You are not logged in!' });
            }
            const verifyJwt = promisify(jwt.verify);
            const decodedPayload = await verifyJwt(token, environments.jwtSecret);
            const currentUser = await User.findById(decodedPayload.id).lean();
            if (!currentUser) {
                return res
                    .status(404)
                    .json({ Error: 'User belongs to the token does not exist' });
            }
            req.user = currentUser;
            next();
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(401).json({ Error: error.message });
            }
            if (error instanceof jwt.TokenExpiredError) {
                return res.status(401).json({ message: 'Token has expired.' });
            }
        }
    },
    // //  Authorization
    // restricted: (...roles: any) => {
    // 	return (req: Request, res: Response, next: NextFunction) => {
    // 		// roles = ['admin']
    // As there is no role propety on user 
    // 		if (!roles.includes(req.user.role)) {
    // 			return res.status(403).json({
    // 				Error: 'You dont have permission to perform this operation',
    // 			})
    // 		}
    // 		next()
    // 	}
    // },
};
export default Authentication;
