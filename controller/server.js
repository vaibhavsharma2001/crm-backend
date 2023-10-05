const express = require('express');
const mongoose = require('mongoose');
// const userRoutes = require('./routes/users');
// const cutomerRoutes=require('./routes/customerRoutes');
const app = express();
mongoose.connect('mongodb://localhost:27017/admin');
app.use(express.json());
// app.use('/users', userRoutes);
// app.use('/customer',cutomerRoutes);
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to database');
});
module.exports=server.js;