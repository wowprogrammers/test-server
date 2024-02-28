import express from 'express';
import Authentication from '../../middleware/authMiddleware.js';
import userController from './controllers.js';
const userRoute = express.Router();
// Create new user
userRoute.post('/', userController.contactUser);
// Get user by id(protected route)
userRoute.get('/:userId', Authentication.passport, userController.getUserById);
// update user by id
userRoute.patch('/:userId', userController.updateUserById);
export default userRoute;
