import * as dotenv from 'dotenv';
dotenv.config();
const environments = {
    devDbUrl: process.env.devDbUrl ?? '',
};
export default environments;
