import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Carregar as variáveis de ambiente do arquivo .env
dotenv.config();

// Acessar as variáveis de ambiente
const mongodbUri = process.env.MONGODB_URI;

mongoose.connect(mongodbUri);

let db = mongoose.connection;

export default db;
