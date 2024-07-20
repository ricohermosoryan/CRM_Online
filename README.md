# Project Setup Guide

This guide provides the necessary steps to set up and run the project using Docker and various commands.

## Initial Setup

### Step 1: Run `make setup` Command

1. Open your terminal.
2. Navigate to the root directory of your project.
3. Run the following command:
   make setup
   
This command will:

Run docker-compose build
Run docker-compose up
Access the container and run composer update

Step 2: Configure Backend

1. Access the backend folder:

cd backend

2. Copy the example environment file to create a new .env file:

cp .env.example .env

3. Update the .env file with the following database configuration:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=CRM
DB_USERNAME=root
DB_PASSWORD=root

4. Run the Laravel development server:

php artisan serve

Step 3: Configure Frontend

1. Go back to the root directory:

cd ..

2. Access the frontend folder:


cd frontend

3. Start the frontend development server:

npm run start

Summary
By following these steps, you will set up and run both the backend and frontend of the project. Make sure to configure the .env file correctly and run the necessary commands in the specified order.

If you encounter any issues, refer to the project's documentation or contact the project maintainers for assistance.
