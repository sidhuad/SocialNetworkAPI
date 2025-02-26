import User from "../models/userModels.js";
// get all users
export const getUsers = async (_req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
// get a single user by id
export const getSingleUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
            .select('-__v')
            .populate('friends')
            .populate('thoughts');
        // if user is not found
        if (!user)
            res.status(404).json({ message: "user not found" });
        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
// create users
export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
// update a single user by id
export const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, req.body, {
            new: true,
        });
        // if user is not found
        if (!user)
            res.status(404).json({ message: "user not found" });
        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
// delete a single user by id
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.userId);
        // if user is not found
        if (!user)
            res.status(404).json({ message: "user not found" });
        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
// create a user's friend
export const createUserFriend = async (req, res) => {
    try {
        // checking if the friend we are trying to add exists or not!!
        const friend = await User.findById(req.params.friendId);
        // if friend does not exist
        if (!friend)
            res.status(404).json({ message: "Friend not found" });
        const user = await User.findByIdAndUpdate(req.params.userId, { $addToSet: { friends: req.params.friendId } }, { new: true });
        // if user does not exist
        if (!user)
            res.status(404).json({ message: "User does not exist" });
        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
// delete a user's friend
export const deleteUserFriend = async (req, res) => {
    try {
        // checking if the friend we are trying to delete exists or not!!
        const friend = await User.findById(req.params.friendId);
        // if the friend exist we proceed with finding the user and removing the friend
        if (!friend)
            res.status(404).json({ message: "friend not found" });
        const user = await User.findByIdAndUpdate(req.params.userId, {
            $pull: { friends: req.params.friendId },
        });
        if (!user)
            res.status(404).json({ message: "user not found" });
        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
