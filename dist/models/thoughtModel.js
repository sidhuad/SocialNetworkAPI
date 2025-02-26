import { Schema, model } from "mongoose";
import SReactions from "./reactionModel.js";
const thoughtsSchema = new Schema({
    thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
    createdAt: { type: Date, default: Date.now },
    username: { type: String, required: true },
    reactions: [SReactions],
}, {
    toJSON: {
        virtuals: true,
    },
    id: false,
});
thoughtsSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});
const Thoughts = model("Thoughts", thoughtsSchema);
export default Thoughts;
