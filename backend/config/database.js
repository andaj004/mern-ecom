const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const connectDatabase = () => {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then((conn) => {
    console.log(`MongoDB connected: ${conn.connection.host}`);
  }).catch((err) => {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  });
};

module.exports = connectDatabase;

