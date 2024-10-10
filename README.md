# Markdown to HTML Converter

## Overview

This full-stack application allows users to convert Markdown code into HTML text in real-time. Built with a React frontend and a Node.js backend, the application uses WebSocket for seamless communication between the client and server.

## Features

- Real-time conversion of Markdown to HTML
- User-friendly interface built with React
- WebSocket for efficient data transmission
- Simple and clean design
- Lightweight and fast

## Technologies Used

- **Frontend**: React, HTML, CSS
- **Backend**: Node.js
- **WebSocket**: `ws` library for real-time communication
- **Markdown Parser**: `marked` library for converting Markdown to HTML

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm 

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SanS1112/mkdown.git
   cd mkdown

2. **Install dependencies:**

  For the backend:

    cd backend
    npm install

  For the frontend:

    cd ../frontend
    npm install

3. **Running the Application:**
 
  *Start the backend server:*

  In the backend directory, run:

    npm start

  The backend will typically run on http://localhost:8080.

  *Start the frontend:*

  In the frontend directory, run:
   
    npm run dev

  The frontend will typically be available at http://localhost:5173.

4. **Usage**
  Open your browser and navigate to http://localhost:5173.
  Enter Markdown code in the input field.
  The converted HTML will be displayed in real-time.

