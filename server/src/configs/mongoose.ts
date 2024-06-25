import mongoose from 'mongoose';

const mongooseSetup = () => {
  const uri = process.env.MONGODB_URI ?? "";
  mongoose
    .connect(uri, {})
    .then(() => {
      console.log("Connected to MongoDB successfully :)");
    })
    .catch((e) => {
      console.log("Error while attempting to connect to MongoDB");
      console.error(e);
    });
};

export default mongooseSetup;
