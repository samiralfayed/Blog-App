# Blog App

A simple blog application built with **Spring Boot** for the backend and **HTML, CSS, JavaScript** for the frontend. This application supports CRUD (Create, Read, Update, Delete) operations for blog posts and stores data in a MySQL database.

## Features

- **Create Blog Post**: Allows users to create blog posts with title, content, and category.
- **View Blog Posts**: Display all blog posts on the dashboard.
- **Delete Blog Posts**: Users can delete blog posts.
- **Responsive UI**: Web-friendly interface.

## Tech Stack

- **Backend**: Spring Boot (Java)
- **Frontend**: HTML, CSS, JavaScript
- **Database**: MySQL
- **Build Tool**: Maven


Backend Setup
Install JDK 21 or later.

Set up MySQL and create a database blog_db.

Update the application.properties file with your database credentials.

spring.datasource.url=jdbc:mysql://localhost:3306/blog_db?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=your_password


API Endpoints

POST /api/blogs: Create a new blog post.
GET /api/blogs: Retrieve all blog posts.
GET /api/blogs/{id}: Retrieve a single blog post by ID.
DELETE /api/blogs/{id}: Delete a blog post.


Here is the post URL: http://localhost:8080/index.html
![image](https://github.com/user-attachments/assets/0a51a9de-f6cc-48c7-9e3a-bf4ccf767a45)

Here is the Blog Dahboard URL: http://localhost:8080/dashboard.html
![image](https://github.com/user-attachments/assets/869317df-f88f-4fcd-89c8-da209e6cbc26)

