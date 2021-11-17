import {Router} from 'express';
import * as messageController from '../controllers/message.controller';
import Product from '../models/Message';
import {authJwt} from '../middlewares'

const router = Router(); 

router.get('/', messageController.getMessages);
router.post('/',[authJwt.verifyToken], messageController.createMessage);
router.get('/:messageId', messageController.getMessageById);
router.put('/:messageId',[authJwt.verifyToken,authJwt.isModerator], messageController.updateMessageById);
router.delete('/:messageId',[authJwt.verifyToken,authJwt.isAdmin], messageController.deleteMessageById);

export default router;