import express from 'express';
import morgan from 'morgan';
import messageRoutes from './routes/message.routes';
import authRoutes from './routes/auth.routes'
import './database'

const app = express();

app.use(express.json())
app.use(morgan('dev'));

app.get('/',(req,res)=>{
    console.log('welcome');
    res.send('welcome');
    
});

app.use('/messages',messageRoutes);
app.use('/auth', authRoutes)

export default app;