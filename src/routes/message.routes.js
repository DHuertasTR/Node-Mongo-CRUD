import {Router} from 'express';
import * as messageController from '../controllers/message.controller';
import Product from '../models/Message';
import {verifyToken} from '../middlewares'

const router = Router(); 

router.get('/', messageController.getMessages);
router.post('/',verifyToken, messageController.createMessage);
router.get('/:messageId', messageController.getMessageById);
router.put('/:messageId',verifyToken, messageController.updateMessageById);
router.delete('/:messageId',verifyToken, messageController.deleteMessageById);

export default router;