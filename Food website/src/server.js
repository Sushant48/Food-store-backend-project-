const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
require('dotenv').config();



const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');


const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'frontend')));
// Middleware


app.use('/api/users', userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/orders', orderRoutes);

const MONGODB_URI = 'mongodb://localhost:27017/food_app'; 


mongoose.connect(MONGODB_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});




// Listen on Port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
