import mongoose from 'mongoose';

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connnection = mongoose.connection;

    connnection.on('connnected', () => {
      console.log('MongoDB connected successfully!');
    });

    connnection.on('error', (err) => {
      console.log(
        `MongoDB connection error. Please make sure MongoDB is running. ${err}`
      );
      process.exit();
    });
  } catch (error) {
    console.log('Something event wrong!');
    console.log(error);
  }
}
