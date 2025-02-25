import { ObjectId, Schema, model, type Document } from "mongoose";

interface IUser extends Document{
    username:string;
    email:string;
    thoughts:ObjectId[];
    friends:ObjectId[];
}

const userSchema = new Schema<IUser>({
    username: {type: String, unique:true, required:true, trim:true},
    email: {type:String, required:true, unique:true, match:/\w+@\w+\.\w+/,lowercase:true },
    thoughts: [{type: Schema.Types.ObjectId, ref:'Thought' }],
    friends: [{type: Schema.Types.ObjectId, ref:'User' }]
})

userSchema.virtual("friendCount").get(function (){
    return `${this.friends?.length || 0}`;
})
const User = model("User", userSchema);

const user1 = new User({username:"username1", email:"abc@email.com", });

console.log(user1.friendCount);