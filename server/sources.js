import dotenv from 'dotenv'

dotenv.config();

const config = {
    SERVER_PATH: process.env.SERVER_KEY,
    DB_PATH: process.env.DB_KEY
}

export default config;