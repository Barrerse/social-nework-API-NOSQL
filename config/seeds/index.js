const mongoose = require('mongoose');
const { User, Thought } = require('../models');

const { MONGO_URI } = require('../config/default.json');

const seedData = async () => {
  // Connect to the database
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });

  // Define some seed data
  const users = [
    {
      username: 'user1',
      email: 'user1@example.com',
      password: 'password1'
    },
    {
      username: 'user2',
      email: 'user2@example.com',
      password: 'password2'
    }
  ];

  const thoughts = [
    {
      thoughtText: 'This is a thought by user1',
      username: 'user1'
    },
    {
      thoughtText: 'This is a thought by user2',
      username: 'user2'
    }
  ];

  // Delete existing data
  await User.deleteMany();
  await Thought.deleteMany();

  // Create new data
  const createdUsers = await User.create(users);
  const createdThoughts = await Thought.create(thoughts);

  // Log the results
