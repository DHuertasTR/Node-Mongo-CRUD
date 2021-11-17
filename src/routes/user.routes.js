import {Router} from 'express';
import * as userC from '../controllers/user.controller'
import {authJwt,verifySignup} from '../middlewares'

const router = Router();

router.post('/',[authJwt.verifyToken,authJwt.isAdmin,verifySignup.checkRolesExists],userC.createUser)

export default router;