const path = require('path');

const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors')
const compression = require('compression');

// var crypto = require("crypto")


dotenv.config({ path: 'config.env' });
const ApiError = require('./utils/apiError');
const globalError = require('./middlewares/errorMiddleware');
const dbConnection = require('./config/database');
// Routes
const mountRoutes = require('./routes')
const {webhookCheckout} = require('./services/orderService')

// const categoryRoute = require('./routes/categoryRoute');
// const subCategoryRoute = require('./routes/subCategoryRoute');
// const brandRoute = require('./routes/brandRoute');
// const productRoute = require('./routes/productRoute');
// const userRoute = require('./routes/userRoute')
// const authRoute = require('./routes/authRoute')
// const reviewRoute = require('./routes/reviewRoute')
// const wishlistRoute = require('./routes/wishlistRoute')
// const addressRoute = require('./routes/addressRoute')
// const couponRoute = require('./routes/couponRoute')

// Connect with db
dbConnection();

// express app
const app = express(); 

// Enable other domains to access you application
app.use(cors())
app.options('*', cors())

// compress all responses
app.use(compression())

// Checkout webhook
app.post(
  '/webhook-checkout',
  express.raw({ type: 'application/json' }),
  webhookCheckout
);

// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname,'uploads')))

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  console.log(`mode: ${process.env.NODE_ENV}`);
}

// console.log(crypto.randomBytes(32).toString('hex'))


// Mount Routes
mountRoutes(app)
// app.use('/api/v1/categories', categoryRoute);
// app.use('/api/v1/subcategories', subCategoryRoute);
// app.use('/api/v1/brands', brandRoute);
// app.use('/api/v1/products', productRoute);
// app.use('/api/v1/users', userRoute);
// app.use('/api/v1/auth', authRoute);
// app.use('/api/v1/reviews', reviewRoute);
// app.use('/api/v1/wishlists', wishlistRoute);
// app.use('/api/v1/address', addressRoute);
// app.use('/api/v1/coupons', couponRoute);

app.all('*', (req, res, next) => {
  next(new ApiError(`Can't find this route: ${req.originalUrl}`, 400));
});

// Global error handling middleware for express
app.use(globalError);

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
  console.log(`App running running on port ${PORT}`);
});

// Handle rejection outside express
process.on('unhandledRejection', (err) => {
  console.error(`UnhandledRejection Errors: ${err.name} | ${err.message}`);
  server.close(() => {
    console.error(`Shutting down....`);
    process.exit(1);
  });
});
