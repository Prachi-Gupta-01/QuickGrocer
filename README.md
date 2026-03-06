# QuickGrocer

QuickGrocer is a modern full-stack grocery delivery web application built with Next.js.  
It simulates a real-world grocery platform with authentication, product browsing, cart management, checkout, live order tracking, and real-time communication between users and delivery partners.

The project demonstrates implementation of modern web technologies including real-time updates using WebSockets, AI-powered chat, live map tracking, and a responsive UI optimized for both mobile and desktop devices.

---

## Features

### Grocery Store Interface
- Full grocery store UI with product listing
- Category-based product browsing
- Product detail view
- Responsive product grid layout

### Shopping Cart and Checkout
- Add products to cart
- Update product quantities
- Remove items from cart
- Checkout system with order creation

### Authentication
- Secure login and signup using NextAuth
- Session management
- Protected routes for authenticated users

### Real-Time Delivery Tracking
- Live order tracking on an interactive map
- Delivery partner location updates in real-time
- Map powered by Leaflet

### Real-Time Order Status
- Socket.io based live order updates
- Real-time order status notifications
- Live delivery progress updates

### AI Chat System
- AI chat functionality between user and delivery partner
- Gemini API used for intelligent conversation support
- Real-time messaging interface

### Database Architecture
- MongoDB database for persistent storage
- Mongoose schemas for products and orders
- Scalable backend structure

### Animations and UI
- Smooth page transitions using Framer Motion
- Modern UI interactions
- Fully responsive design for mobile and desktop

### Deployment
- Deployed on Vercel using the free tier
- Optimized for serverless environments

---

## Tech Stack

### Frontend
- Next.js 16 (App Router)
- React
- Framer Motion
- Leaflet Maps

### Backend
- Next.js API Routes
- Socket.io

### Authentication
- NextAuth

### Database
- MongoDB
- Mongoose

### AI Integration
- Gemini API

### Deployment
- Vercel

---

## Project Architecture

```
quickgrocer/
│
├── app/                    # Next.js App Router pages
│   ├── products
│   ├── cart
│   ├── checkout
│   ├── orders
│   └── tracking
│
├── components/             # Reusable UI components
│
├── lib/                    # Database and utility functions
│
├── models/                 # Mongoose schemas
│   ├── Product.js
│   └── Order.js
│
├── socket/                 # Socket.io configuration
│
├── public/                 # Static assets
│
├── styles/                 # Global styles
│
└── README.md
```

---

## Database Schema Overview

### Product Schema
Stores grocery product information.

Fields include:
- name
- description
- price
- category
- image
- stock

### Order Schema
Stores customer order details.

Fields include:
- userId
- products
- totalPrice
- deliveryStatus
- deliveryLocation
- createdAt

---

## Installation

Clone the repository.

```bash
git clone https://github.com/yourusername/quickgrocer.git
cd quickgrocer
```

Install dependencies.

```bash
npm install
```

---

## Environment Variables

Create a `.env.local` file in the root directory.

```
MONGODB_URI=your_mongodb_connection_string

NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GEMINI_API_KEY=your_gemini_api_key
```

---

## Running the Application

Start the development server.

```bash
npm run dev
```

Open the application in your browser.

```
http://localhost:3000
```

---

## Deployment

This project is configured for deployment on Vercel.

Steps:

1. Push the repository to GitHub
2. Import the project into Vercel
3. Add the required environment variables
4. Deploy

Vercel automatically builds and deploys the application.

---

## Future Improvements

- Payment gateway integration
- Admin dashboard for product management
- Push notifications for order updates
- Delivery partner mobile interface
- Order analytics dashboard

---



## License

This project is licensed under the MIT License.
