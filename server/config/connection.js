const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});
mongoose.connection.on('connected', () =>
  console.log('Connected to MongoDB Endpoint')
);

mongoose.connection.on('error', (err) =>
  console.log(`Mongoose default connection error: ${err}`)
);

module.exports = mongoose.connection;