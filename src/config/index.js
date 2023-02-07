import dotenv from 'dotenv';

dotenv.config();

const variables = {
  PORT: process.env.PORT,
  COHERE_API_KEY: process.env.COHERE_API_KEY
}

export default variables;