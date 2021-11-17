import User from '../models/User'
import moduleName from 'jsonwebtoken'
import jwt from 'jsonwebtoken'
import config from '../config'

export const signUp = async (req,res)=>{
    const {username, email, password, roles}=req.body;
    
    const userFound= User.find({email})

    const newUser=new User({
        username,
        email,
        password: await User.encryptPassword(password)  
    })

    const savedUser=await newUser.save();

    const token=jwt.sign({id:savedUser._id},config.SECRET,{
        expiresIn:43200
    })

    res.json({token})


}

export const signIn =async (req,res)=>{
    res.json('signIn')
}