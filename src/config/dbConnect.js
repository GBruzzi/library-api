import mongoose  from 'mongoose';

mongoose.connect('mongodb+srv://ggbruzzi:mkonjibhu123@cluster0.rhbk2if.mongodb.net/alura-nodelibrary');

let db = mongoose.connection;

export default db;
