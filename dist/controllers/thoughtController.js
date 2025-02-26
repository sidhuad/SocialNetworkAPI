import Thoughts from "../models/thoughtModel.js";
import User from "../models/userModels.js";
export const getThoughts = async (_req, res) => {
    try {
        const thoughts = await Thoughts.find({})
            .select('-__v');
        res.status(200).json(thoughts);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const createThoughts = async (req, res) => {
    try {
        const thoughts = await Thoughts.create(req.body);
        const user = await User.findByIdAndUpdate(req.body.userId, { $addToSet: { thoughts: thoughts._id } }, { new: true });
        // checking if user exists
        if (!user)
            res.status(404).json({ message: "user not found" });
        res.status(200).json(thoughts);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
