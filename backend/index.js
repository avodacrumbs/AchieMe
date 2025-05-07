const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/achie_me', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
}).then(() => {
   console.log('MongoDB connected');
}).catch(err => {
   console.error('MongoDB connection error:', err);
})

app.use('/api', authRoutes);

app.listen(5000, () => {
   console.log('Server is running on port 5000');
});