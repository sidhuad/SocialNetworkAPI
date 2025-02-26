import { Schema, model, Document } from "mongoose";
import SReactions from "./reactionModel.js";

interface IThoughts extends Document {
  thoughtText: string;
  createdAt: Date;
  username: string;
  reactions: typeof SReactions[];
  reactionCount: number;
}

const thoughtsSchema = new Schema<IThoughts>(
  {
    thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
    createdAt: { type: Date, default: Date.now },
    username: { type: String, required: true },
    reactions: [SReactions],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtsSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thoughts = model("Thoughts",thoughtsSchema);

export default Thoughts;