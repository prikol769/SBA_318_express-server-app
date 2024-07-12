# Blog Platform

This is a simple blog platform built with Node.js and Express.js. It allows users to create, read, update, and delete users, posts, and comments. The platform uses EJS as the templating engine for rendering views.

## Features

- **User Management:** Create, read, update, and delete users.
- **Post Management:** Create, read, update, and delete posts.
- **Comment Management:** Read comments.
- **JSON Parsing:** Supports parsing JSON and URL-encoded data.
- **Static Files:** Serves static files from the `public` directory.
- **404 Handling:** Custom 404 error handling.

## API Endpoints

### Users

- GET /api/users - Get all users
- POST /api/users - Create a new user
- GET /api/users/:id - Get an individual user by ID
- PATCH /api/users/:id - Update an individual user by ID
- DELETE /api/users/:id - Delete an individual user by ID

### Posts

- GET /api/posts - Get all posts (optional query parameter limit to limit results)
- POST /api/posts - Create a new post
- GET /api/posts/:id - Get an individual post by ID
- PATCH /api/posts/:id - Update an individual post by ID
- DELETE /api/posts/:id - Delete an individual post by ID

### Comments

- GET /api/comments - Get all comments (optional query parameter userId to filter by user)
- GET /api/comments/:id - Get an individual comment by ID
