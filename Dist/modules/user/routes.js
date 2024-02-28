import express from 'express';
import userController from './controllers.js';
const userRoute = express.Router();
// Create new user
userRoute.post('/', userController.contactUser);
// Get user by id
userRoute.get('/:userId', userController.getUserById);
// update user by id
userRoute.patch('/:userId', userController.updateUserById);
export default userRoute;
