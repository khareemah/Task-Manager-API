const express = require('express');
const app = express();
const port = 3000;
const tasks = require('./routes/tasks');

const connectDB = require('./db/connect');
require('dotenv').config();

app.use(express.json());
app.use('/api/v1/tasks', tasks);

const start = async () => {
  try {
    await connectDB(
      'mongodb+srv://Kareemah:Ajimobi20_$$@taskmanager.epyzcdb.mongodb.net/task-manager?retryWrites=true&w=majority'
    );
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
