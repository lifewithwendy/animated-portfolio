# Wendy's Portfolio

A portfolio website built with React and Vite, showcasing Wendy's projects and skills. Deployed on [Fly.io](https://wendys-portfolio.fly.dev/).

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)

## Demo

Check out the live demo here: [wendys-portfolio.fly.dev](https://wendys-portfolio.fly.dev/)

## Features

- Interactive and responsive design
- Smooth animations and transitions
- Project showcase with descriptions
- Contact form for inquiries

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have the following tools installed on your machine:

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [Vite](https://vitejs.dev/)
- [Fly.io CLI](https://fly.io/docs/getting-started/installing-flyctl/) (for deployment)

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/portfolio.git
    cd portfolio
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the development server:**
    ```bash
    npm run dev
    ```

    The application should now be running on `http://localhost:3000`.

## Project Structure

The project structure is as follows:

```
portfolio/
├── public/               # Static assets
│   └── index.html        # Main HTML file
├── src/                  # Application source code
│   ├── components/       # Reusable components
│   ├── pages/            # Page components
│   ├── App.jsx           # Main App component
│   └── main.jsx          # Entry file
├── .gitignore
├── fly.toml              # Fly.io deployment configuration
├── Dockerfile            # Docker configuration for deployment
├── package.json
└── vite.config.js        # Vite configuration
```

## Deployment

To deploy the project on Fly.io, follow these steps:

1. **Login to Fly.io:**
    ```bash
    flyctl auth login
    ```

2. **Create and launch the app:**
    ```bash
    flyctl launch
    ```

    Follow the prompts to set up your deployment.

3. **Deploy the app:**
    ```bash
    flyctl deploy
    ```

## Technologies Used

- **React** – Frontend library for building user interfaces
- **Vite** – Fast frontend build tool
- **Fly.io** – Cloud platform for deploying applications
- **Docker** – Containerization platform for deployment

Access the deployed app:
Visit the URL provided after the deployment, such as:
https://wendys-portfolio.fly.dev/
