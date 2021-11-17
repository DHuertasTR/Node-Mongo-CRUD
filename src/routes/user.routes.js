import {Router} from 'express';
import * as userC from '../controllers/user.controller'
import {authJwt} from '../middlewares'

const router = Router();

router.post('/',[authJwt.verifyToken,authJwt.isAdmin],userC.createUser)

export default router;