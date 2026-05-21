#### Basic Login System - Project Overview

This project is a basic authentication system built using Node.js and Express that allows users to register, log in, and securely access data using JSON Web Tokens (JWT). It focuses on handling user credentials safely by storing user information in MongoDB and hashing passwords using bcrypt before saving them to the database. The main goal of the project is to understand how backend authentication works, from receiving user input to validating credentials and generating secure tokens for session management.

#### What is the tech stack used in this project?

In this project, I have used Node.js as the runtime environment, Express.js for building RESTful APIs, MongoDB as the database, and Mongoose for object modeling and database interaction. For security, bcrypt is used to hash passwords, jsonwebtoken is used to generate and verify tokens, and dotenv is used to manage environment variables like database URLs and secret keys. Postman is used for testing the API endpoints.

#### How to Test the Project

1. First, make sure the server is running without any errors. You should see messages like *“Server running on port 3004”* and *“Mongo connected”* in the terminal.
2. Open Postman (or any API testing tool).
3. To test  **user registration** , send a `POST` request to: http://localhost:3004/api/users/register
4. In the request body, select **raw → JSON** and add:

   ```
   {
     "username": "john",
     "email": "john@gmail.com",
     "password": "12345678"
   }
   ```
5. If the request is successful, you should get a response showing the user details (without the password).
6. Next, test **login functionality** by sending a `POST` request to:

```
{
  "email": "john@gmail.com",
  "password": "12345678"
}
```

7. On successful login, you will receive a **JWT token** along with user details.
8. If you enter the wrong email or password, the API will return an error message like  *“Incorrect email or password”
9. You can copy the JWT token and verify it on [https://jwt.io/](https://jwt.io/) to see the decoded user information.

Example Response:

```
{  "message": "Login successful",  
"token": "8rSmwI6iw1e3uNjCuvs1jE_YNQrDFE4",  
"user": {    "_id": "6a0f476237d5f051ef7b96af",   
 "username": "john",   
 "email": "john@gmail.com"  }}
```


#### Where can I use this in real life?

Authentication like this is widely used in real-world applications such as social media platforms, banking systems, e-commerce websites, and any application that requires user accounts. It ensures that only authorized users can access protected resources, maintains user sessions securely using tokens, and prevents unauthorized access to sensitive data.
