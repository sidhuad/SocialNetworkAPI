import { Schema, Types, Document, ObjectId } from "mongoose";

interface IReactions extends Document {
  reactionId: ObjectId;
  reactionBody: string;
  username: string;
  createdAt: Date;
  // need a getter method
}

const reactionSchema = new Schema<IReactions>(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: { type: String, maxlength: 280, required: true },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  {
    toJSON:{
        getters:true,
    },
    id: false,
  }
);

export default reactionSchema;