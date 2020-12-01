import mongoose from 'mongoose';

const connection = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('Error: ${error.message}');
    process.exit(1);
  }
};

export default connection;
