import {Router} from 'express';
import * as userC from '../controllers/user.controller'
import {authJwt,verifySignup} from '../middlewares'

const router = Router();

router.get('/',[authJwt.verifyToken,authJwt.isAdmin],userC.getUsers)
router.put('/:userId',[authJwt.verifyToken,authJwt.isAdmin],userC.updateUserById)
router.delete('/:userId',[authJwt.verifyToken,authJwt.isAdmin],userC.deleteUserById)

export default router;