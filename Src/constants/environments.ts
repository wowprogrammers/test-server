import * as dotenv from 'dotenv'
dotenv.config()

const environments = {
	devDbUrl: process.env.devDbUrl ?? '',
	//similar all env variales list here
}

export default environments
