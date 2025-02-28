import Thoughts from "../models/thoughtModel.js";
import User from "../models/userModels.js";
// get all thoughts
export const getThoughts = async (_req, res) => {
    try {
        const thoughts = await Thoughts.find({}).select("-__v");
        res.status(200).json(thoughts);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
// get single thougt
export const getSingleThought = async (req, res) => {
    try {
        const thoughts = await Thoughts.findById(req.params.thoughtId);
        // if no thought found
        if (!thoughts) {
            res.status(404).json({ message: "thought not found" });
            return;
        }
        res.status(200).json(thoughts);
        return;
    }
    catch (err) {
        res.status(500).json(err);
        return;
    }
};
// create a thought
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
// update a thought
export const updateThought = async (req, res) => {
    try {
        const thoughts = await Thoughts.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
        res.status(200).json(thoughts);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
// delete a thought
//x todo update the user when a thought is deleted
export const deleteThought = async (req, res) => {
    try {
        const thoughts = await Thoughts.findById(req.body.thoughtId);
        if (!thoughts) {
            res.status(404).json({ message: "Thought not found" });
            return;
        }
        // pulling the thought before deleting it
        await User.findByIdAndUpdate({ thoughts: req.params.thoughtId }, { $pull: { thoughts: req.params.thoughtId } }, { new: true });
        // deleting the thought
        await Thoughts.findByIdAndDelete({ _id: req.params.thoughtId });
        res.status(200).json(thoughts);
        return;
    }
    catch (err) {
        res.status(500).json(err);
        return;
    }
};
// reactions
// create a reaction
export const createReaction = async (req, res) => {
    try {
        const reaction = await Thoughts.findByIdAndUpdate(req.params.thoughtId, {
            $addToSet: { reactions: req.body },
        }, { new: true });
        res.status(200).json(reaction);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
//delete a reaction
export const deleteReaction = async (req, res) => {
    try {
        const reaction = await Thoughts.findByIdAndUpdate(req.params.thoughtId, { $unset: { reactions: "" } });
        res.status(200).json(reaction);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
