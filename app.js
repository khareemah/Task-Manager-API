const express = require('express');
const app = express();
const port = 3000;
const tasks = require('./routes/tasks');
const notFound = require('./middleware/notFound');
const errorHandlerMiddleware = require('./middleware/errorHandlerMiddleware');

const connectDB = require('./db/connect');
require('dotenv').config();

app.use(express.json());
app.use(express.static('./public'));
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
