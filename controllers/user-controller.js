const { User, Thought } = require("../models");

const userController = {
  getAllUser: async (req, res) => {
    try {
      const dbUserData = await User.find({})
        .populate({
          path: "friends",
          select: "-__v",
        })
        .select("-__v")
        .sort({ _id: -1 });
      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Failed to get users." });
    }
  },

  getUserById: async ({ params }, res) => {
    try {
      const dbUserData = await User.findOne({ _id: params.id })
        .populate({
          path: "thoughts",
          select: "-__v",
        })
        .populate({
          path: "friends",
          select: "-__v",
        })
        .select("-__v");

      if (!dbUserData) {
        return res.status(404).json({ message: "No user found with this id!" });
      }

      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Failed to get user." });
    }
  },

  createUser: async ({ body }, res) => {
    try {
      const dbUserData = await User.create(body);
      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: "Failed to create user." });
    }
  },

  updateUser: async ({ params, body }, res) => {
    try {
      const dbUserData = await User.findOneAndUpdate({ _id: params.id }, body, {
        new: true,
        runValidators: true,
      });

      if (!dbUserData) {
        return res.status(404).json({ message: "No user found with this id!" });
      }

      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Failed to update user." });
    }
  },

  deleteUser: async ({ params }, res) => {
    try {
      const dbUserData = await User.findOneAndDelete({ _id: params.id });

      if (!dbUserData) {
        return res.status(404).json({ message: "No user with this id!" });
      }

      await Thought.deleteMany({ _id: { $in: dbUserData.thoughts } });

      res.json({ message: "User and associated thoughts deleted!" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Failed to delete user." });
    }
  },
  addFriend: async ({ params }, res) => {
    try {
      const dbUserData = await User.findOneAndUpdate(
        { _id: params.userId },
        { $addToSet: { friends: params.friendId } },
        { new: true, runValidators: true }
      );

      if (!dbUserData) {
        return res.status(404).json({ message: "No user with this id!" });
      }

      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Failed to add friend." });
    }
  },

  removeFriend: async ({ params }, res) => {
    try {
      const dbUserData = await User.findOneAndUpdate(
        { _id: params.userId },
        { $pull: { friends: params.friendId } },
        { new: true }
      );

      if (!dbUserData) {
        return res.status(404).json({ message: "No user with this id!" });
      }

      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Failed to remove friend." });
    }
  },
};


module.exports = userController;
