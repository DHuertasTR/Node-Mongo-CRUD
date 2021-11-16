import moongose from 'mongoose';
moongose.connect('mongodb://localhost/test').then(db=> console.log('db connected')).catch(err=> console.log(err));