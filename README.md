# How to Run the Project

This guide will walk you through the steps to clone the repository and run the project locally.

## Step 1: Clone the Repository

First, clone the repository to your local machine. Run the following command in your terminal:
```bash

git clone https://github.com/shrishail356/Ai-Web3-Assistant.git
```
After cloning, navigate into the project directory:
```bash

cd Ai-Web3-Assistant
```

## Step 2: Install Frontend Dependencies

you need to install the necessary dependencies. Follow these steps:

Open a terminal and navigate to the frontend project directory.

Run one of the following commands to install the dependencies:

* Using npm:
    ```bash
    
    npm install
    ```
* Using pnpm (if you prefer pnpm):
    ```bash
    
    pnpm install
    ```
* Using yarn (if you prefer yarn):
    ```bash
    
    yarn install
    ```
This will install all the required packages for the frontend.

## Step 3: Start Docker for Backend

Before running the frontend, ensure that the backend is running in a Docker container. Follow these steps:

### 3.1: Install Docker
* Go to the Docker download page.
* Download and install Docker Desktop for your system (Windows/macOS/Linux).
* Follow the installation instructions based on your operating system.

### 3.2: Start Docker
* Open Docker Desktop.
* Wait for Docker to start running. You should see the Docker icon in your system tray or taskbar.

### 3.3: Add Docker to PATH (If Necessary)
If Docker isn't added to your PATH automatically, follow the instructions in the Docker documentation for your operating system to add it.

### 3.4: Run the Backend Docker Commands

Once Docker is set up, run the following commands in the terminal to pull and run the backend Docker container:

* Pull the Docker image:

    ```bash
    docker pull shrishail356/python-backend:latest
    

* Run the Docker container:

    ```bash
    
    docker run -p 8000:8000 -p 6379:6379 shrishail356/python-backend:latest
    

This will start the backend service on port `8000` and Redis on port `6379`.

Step 4: Run the Frontend

Once the backend is running, start the frontend by running:

```bash

npm start
```

This will launch the frontend on the default port (usually 5173 for vite).

# Step 5: Check the Live Link
Once the backend is running, you can check out the live application at [cryptod5.com](http://cryptod5.com).

Important: Make sure the backend is up and running before accessing the live link.
