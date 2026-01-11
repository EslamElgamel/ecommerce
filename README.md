# Node.js E-commerce REST API

A professional, scalable, and feature-rich e-commerce RESTful API built with Node.js, Express, and MongoDB. This project provides a robust backend for online stores, supporting user authentication, product management, cart, orders, reviews, and more.

## Features

- **User Authentication & Authorization** (JWT, roles)
- **Product, Category, Brand, Subcategory Management**
- **Cart & Wishlist Functionality**
- **Order Processing & Checkout (Stripe integration)**
- **Coupon & Discount System**
- **User Addresses**
- **Product Reviews**
- **Image Uploads (Multer, Sharp)**
- **Comprehensive Validation & Error Handling**
- **API Filtering, Sorting, Pagination**
- **Email Notifications (Nodemailer)**
- **CORS, Compression, Security Best Practices**

## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB & Mongoose**
- **JWT for Auth**
- **Stripe for Payments**
- **Multer & Sharp for Images**
- **Nodemailer for Emails**

## Getting Started

### Prerequisites
- Node.js v20+
- MongoDB instance (local or cloud)

### Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd ecommerce-main
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and set the following variables:
   ```env
   PORT=8000
   NODE_ENV=development
   DB_URI=mongodb://localhost:27017/ecommerce
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRE=30d
   STRIPE_SECRET_KEY=your_stripe_secret
   EMAIL_USER=your_email@example.com
   EMAIL_PASS=your_email_password
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

- `/api/v1/auth` - Authentication (register, login, etc.)
- `/api/v1/users` - User management
- `/api/v1/products` - Product CRUD
- `/api/v1/categories` - Category CRUD
- `/api/v1/subcategories` - Subcategory CRUD
- `/api/v1/brands` - Brand CRUD
- `/api/v1/cart` - Cart operations
- `/api/v1/order` - Order processing
- `/api/v1/reviews` - Product reviews
- `/api/v1/wishlists` - Wishlist management
- `/api/v1/coupons` - Coupon management
- `/api/v1/address` - User addresses

## Deployment

This project is ready for deployment on Vercel (see `vercel.json`).

## License

ISC

---

*Professional backend for modern e-commerce applications.*
