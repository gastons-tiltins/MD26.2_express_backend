import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// dotenv.config({path: '../.env'});

mongoose.set('strictQuery', false);

const COLLECTION_NAME = 'jokes';

const mongoConnect = async () => {
  await mongoose
    .connect(`mongodb://localhost:27017/${COLLECTION_NAME}`)
    .then(() => {
      console.log('Connected to MongoDB.');
    })
    .catch((err) => {
      console.log('Connection Error: ', err);
    });
};

export default mongoConnect;
