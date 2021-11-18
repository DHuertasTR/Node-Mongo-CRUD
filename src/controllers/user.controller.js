import User from '../models/User'

export const getUsers=async(req,res)=>{
    const users=await User.find();
    res.json(users)
}

export const updateUserById = async(req,res)=>{
    const id=req.params.userId
    const user= await User.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).json(user)
}

export const deleteUserById = async(req,res)=>{
    const id = req.params.userId
    await User.findByIdAndDelete(id)
    .then(user =>{
        res.json(user)
    })
    .catch(err =>{
        res.json(err)
    })
}