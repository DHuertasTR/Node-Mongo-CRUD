import { Schema,model } from "mongoose";

const messageSchema =new Schema({
    title: String,
    message: String
},{ timestamps: true, versionKey: false });

export default model('Message',messageSchema);