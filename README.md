Social Network API - NoSQL
==========================

This is a simple RESTful API for a social network that was built using a NoSQL database (MongoDB). It allows users to create accounts, create thoughts, react to thoughts, and add other users as friends. It is built using Node.js, Express.js, and Mongoose.

Installation
------------

To install this project, follow these steps:

1.  Clone the repository to your local machine.
2.  Navigate to the root directory of the project.
3.  Install the necessary dependencies using the following command:



`npm install`



Usage
-----

To use the API, run the following command in your terminal:



`npm start`

The server will start and listen for incoming requests on port 3001. You can then test the API using a tool such as Postman.

API Endpoints
-------------

The following API endpoints are available:

### Users

-   `GET /api/users` - Get all users
-   `GET /api/users/:id` - Get a single user by ID
-   `POST /api/users` - Create a new user
-   `PUT /api/users/:id` - Update a user by ID
-   `DELETE /api/users/:id` - Delete a user by ID
-   `POST /api/users/:userId/friends/:friendId` - Add a friend for a user
-   `DELETE /api/users/:userId/friends/:friendId` - Remove a friend for a user

### Thoughts

-   `GET /api/thoughts` - Get all thoughts
-   `GET /api/thoughts/:id` - Get a single thought by ID
-   `POST /api/thoughts` - Create a new thought
-   `PUT /api/thoughts/:id` - Update a thought by ID
-   `DELETE /api/thoughts/:id` - Delete a thought by ID
-   `POST /api/thoughts/:thoughtId/reactions` - Add a reaction to a thought
-   `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` - Remove a reaction from a thought

Contributing
------------

If you would like to contribute to this project, please submit a pull request. All contributions are welcome!

License
-------

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
