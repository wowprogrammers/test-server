import * as dotenv from 'dotenv'
dotenv.config()

const environments = {
	devDbUrl: process.env.devDbUrl ?? '',
	jwtSecret: process.env.jwtSecret ?? '',
	jwtExpires:process.env.jwtExpires ?? ''
	//similar all env variales list here
}

export default environments
