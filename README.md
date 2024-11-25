# Birthday Master - Backend

## Description

The **Birthday Master Web Server** is the backend service responsible for handling API requests, processing data, and managing interactions with the **PostgreSQL** database. Built with **Node.js** and **Express.js**, this server provides RESTful endpoints for managing information about people and their birthdays. The server is designed with scalability and maintainability in mind, making use of modern tools and best practices.

---

## Architecture Overview

The backend follows a layered architecture:
1. **Routes:** Define API endpoints and direct requests to the appropriate controllers.
2. **Controllers:** Handle the business logic for incoming requests and coordinate interactions between routes and repositories.
3. **Repositories:** Interact directly with the PostgreSQL database using parameterized queries to ensure security.
4. **Database:** Stores structured data for people and supports CRUD operations.

---

## Technical Details

### Tools and Technologies

#### Languages and Frameworks
- **Node.js:** Provides the runtime environment for running JavaScript on the server.
- **Express.js:** Simplifies the creation of APIs with robust routing and middleware support.

#### Database
- **PostgreSQL:** A reliable and scalable relational database used to store person records and their associated details.

#### Libraries and Middlewares
- **pg:** Enables secure and efficient interaction with PostgreSQL, including executing SQL queries.
- **Cors:** Manages Cross-Origin Resource Sharing, allowing the frontend to communicate with the backend.
- **Morgan:** Logs incoming HTTP requests for debugging and monitoring.
- **Moment.js:** Simplifies date manipulation and formatting.
- **uuid:** used to generate unique identifiers (UUIDs), providing a simple API for creating secure, standards-compliant UUIDs for various use cases like database entries or resource identifiers.

---

## API Endpoints

### People Endpoints
1. **GET /people**:  
   - Retrieves all people from the database.
   - **Response:**  
     ```json
     [
       {
         "id": "12345",
         "firstname": "John",
         "lastname": "Doe",
         "birthday": "1990-06-15"
       }
     ]
     ```

2. **GET /people/:month**:  
   - Retrieves people whose birthdays fall in the specified month.
   - **Request Parameter:**  
     - `:month` (values from 1-12)  

3. **POST /person**:  
   - Adds a new person to the database.
   - **Request Body:**  
     ```json
     {
       "firstname": "Jane",
       "lastname": "Smith",
       "birthday": "1985-10-22"
     }
     ```

4. **PUT /person/:id**:  
   - Updates an existing person's information in the database.
   - **Request Body:**  
     ```json
     {
       "firstname": "Updated Name",
       "lastname": "Updated Lastname",
       "birthday": "2000-01-01"
     }
     ```

5. **DELETE /person/:id**:  
   - Deletes a person from the database by their ID.

---

## Setup Instructions

### Prerequisites
- **Node.js** (version 14+ recommended)
- **PostgreSQL** (version 13+ recommended)

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/birthday-master-backend.git
   cd birthdaymasterwebserver

### Install dependencies:
npm install

### .env File configuration

You must create your .env file on the root folder with the following variables

* DB_USER - user of your postgres database server
* DB_HOST - your postgres database host
* DB_PSW - your postgres databese pasword
* DB_DB - your databse name
* DB_PORT - your postgres database host port
* WS_PORT - your webserver port

### Start the server
npm run webserver

### Future Enhancements

* Implement user authentication and authorization for secure access.

### Contact

For more information or inquiries, feel free to contact:

* Email: afranco@mangochango.com
* GitHub Repository: Birthday Master

---