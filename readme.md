# Backend Assessment for Hng Stage 5

## Introduction

Welcome to the repository for Hng Stage 5! In this stage, you'll find the backend code and resources needed to run the Hng Stage 5 API. This document provides details on the prerequisites, setup, and available endpoints for the API.

## Prerequisites

Before you can successfully run this API, make sure you have the following prerequisites in place:

1. **NodeJS (npm)**: Ensure you have Node.js and npm (Node Package Manager) installed on your system. You can download and install them from [Node.js official website](https://nodejs.org/).

2. **MongoDB**: You'll need a running MongoDB instance as this API relies on a MongoDB database for data storage. Make sure you have MongoDB installed and running on your system or use a cloud-based MongoDB service.

3. **Environment Variables (.env)**: Create a `.env` file in the root directory of the project. This file should contain the following environment variable:

   - `MONGO_URL` (String): This variable should hold the MongoDB connection URL, allowing the API to establish a connection to your database.

> Please note that these variables are crucial, and the API won't function correctly without them.

## Getting Started

To get started with the API, follow these steps:

1. Clone this repository by running the following command:

   ```bash
   git clone https://github.com/olurocks/stage5.git
   ```

2. Navigate to the project directory:

   ```bash
   cd stage 5
   ```

3. Install the necessary dependencies by running:

   ```bash
   npm install
   ```

4. Start the API by running:

   ```bash
   npm start
   ```

By default, the API will run on port `8000`. You can access it via `http://localhost:8000/`.

## Available Endpoints

The API comes with several endpoints that allow you to interact with it. For detailed information on how to use these endpoints, refer to the API documentation available [here](https://documenter.getpostman.com/view/19182062/2s9YJaXPXr).

## Happy Coding!

You're all set to begin using the Hng Stage 5 API. If you encounter any issues or have questions, refer to the documentation and feel free to reach out for assistance. Happy coding!