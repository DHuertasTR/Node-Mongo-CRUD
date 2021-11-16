import Message from "../models/Message";

export const createMessage = async(req, res) => {
    
    const {title,message} = req.body;
    const newMessage = new Message({title,message});
    const messagePromise = await newMessage.save();
    res.status(201).json(messagePromise)
}
export const getMessages = async(req, res) => {
    const messagesPromise = await Message.find();
    res.json(messagesPromise)
}
export const getMessageById = (req, res) => {
}
export const updateMessageById = (req, res) => {
}
export const deleteMessageById = (req, res) => {
}