const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const storeRoutes = require('./routes/storeRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const addressRoutes = require('./routes/addressRoutes');
const db = require('./database/db');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    req.db = db;
    next();
});

app.use('/users', userRoutes);
app.use('/stores', storeRoutes);
app.use('/products', productRoutes);
app.use('/carts', cartRoutes);
app.use('/addresses', addressRoutes);

app.listen(port, () => {
  console.log(`Server berjalan pada http://localhost:${port}`);
});
