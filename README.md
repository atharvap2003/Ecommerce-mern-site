# Vite + MERN + Tailwind Ecommerce Project

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [License](#license)
- [Contact](#contact)

## About

This project is an Ecommerce website built using the MERN stack with Vite for the frontend, Tailwind CSS for styling, and several additional technologies to enhance functionality. The application focuses on electronics products and includes features such as authentication, OAuth, welcome emails on registration, state management with Redux Toolkit, and more.

## Features

- User Authentication (Sign Up, Login, Logout)
- OAuth integration for social login
- Welcome emails sent using Nodemailer
- State management with Redux Toolkit
- Add to Cart functionality
- Multer for image upload
- Product details page
- Admin panel for managing products and users
- Responsive design with Tailwind CSS
- 'New Arrivals' section showcasing the latest products

## Technologies Used

- **Frontend:**
  Vite, React, Tailwind CSS, Redux Toolkit, Framer Motion

- **Backend:**
  Node.js, Express.js, MongoDB, Mongoose, Google OAuth, Nodemailer, Multer

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name

2. **Install Dependency:**
   ```bash
    Navigate to frontend directory and install dependencies
    cd ../client
    npm install

    # Navigate to backend directory and install dependencies
    cd ../server
    npm install

3. **For Running the Project on Localhost**
   ```bash
   For Frontend: Navigate to frontend directory & ....
   cd ../client
   npm run dev

   For Backend: Navigate to backend directory & ....
   cd ../server
   npm start
Note: Open your browser and navigate to http://localhost:5173 to view the application.

## Project Structure:
    ```bash
    Ecommerce-mern-site/
    │
    ├── frontend/
    │   ├── public/
    │   ├── src/
    │   │   ├── components/
    │   │   ├── features/
    │   │   ├── hooks/
    │   │   ├── pages/
    │   │   ├── redux/
    │   │   ├── App.jsx
    │   │   ├── index.js
    │   │   └── main.jsx
    │   ├── tailwind.config.js
    │   ├── vite.config.js
    │   └── package.json
    │
    ├── server/
    │   ├── config/
    │   ├── controllers/
    │   ├── middleware/
    │   ├── models/
    │   ├── routes/
    │   ├── utils/
    │   ├── server.js
    │   └── package.json
    │
    ├── .gitignore
    ├── README.md
    └── package.json
## License:
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact:
- **For any questions or inquiries, please contact:**
 - Name: Atharva Pandharikar
 - Email: atharvapandharikar5@gmail.com

