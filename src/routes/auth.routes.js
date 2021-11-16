import {Router} from 'express'

const router = Router();

import * as authC from '../controllers/auth.controller'

router.post('/signin', authC.signIn)
router.post('/signup', authC.signUp)

export default router;