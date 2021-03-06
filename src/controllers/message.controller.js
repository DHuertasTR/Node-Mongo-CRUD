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
export const getMessageById = async (req, res) => {
    const id = req.params.messageId;
    await Message.findById(id)
    .then(message => {
        res.json(message)
    })
    .catch(err => {
        res.json(err)
    })
}
export const updateMessageById = async (req, res) => {
    const id = req.params.messageId;
    await Message.findByIdAndUpdate(id, req.body, {new:true})
    res.status(200).json(Message)
}
export const deleteMessageById = async (req, res) => {
    const id = req.params.messageId;
    await Message.findByIdAndDelete(id)
    .then(message => {
        res.json(message)
    })
    .catch(err => {
        res.json(err)
    })
}