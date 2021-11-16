import {Router} from 'express'
import * as authC from '../controllers/authController'

const router = Router();

router.post('signin', authC.signIn)
router.post('signup', authC.signUp)

export default router;