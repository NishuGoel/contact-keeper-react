const express = require('express');
const connectDB = require('./config/db')
const app = express();
connectDB();
app.get('/', (req, res) => res.json({msg: 'Welcome ot the Contact Keeper API....'}));
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));



// Init middleware

app.use(express.json({extended: false}))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));