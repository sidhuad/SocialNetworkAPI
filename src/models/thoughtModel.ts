import { Schema,model,ObjectId,type Document } from "mongoose";

interface IThoughts extends Document{
    thoughtText:string;
    createdAt: Date;
    username:string;
    reactions:
}