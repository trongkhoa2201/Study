require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/auth', require('./routes/authRoutes'));
app.use('/users', require('./routes/userRoutes'));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
