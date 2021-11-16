import express from 'express';
import morgan from 'morgan';
import messageRoutes from './routes/message.routes';

const app = express();

app.use(morgan('dev'));

app.get('/',(req,res)=>{
    console.log('welcome');
    res.send('welcome');
    
});

app.use('/messages',messageRoutes);

export default app;