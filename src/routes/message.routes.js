import {Router} from 'express';
import * as messageController from '../controllers/message.controller';
import Product from '../models/Message';

const router = Router();

router.get('/', messageController.getMessages);
router.post('/', messageController.createMessage);
router.get('/:messageId', messageController.getMessageById);
router.put('/:messageId', messageController.updateMessageById);
router.delete('/:messageId', messageController.deleteMessageById);

export default router;