import { Router } from "express";
import { check } from "express-validator";

import { login, refreshJWT, googleSignin } from "../controllers/auth";
import { validateToken } from "../middlewares/validate-jwt";

const router: any = Router();

router.post('/login', login);

router.post('/google', googleSignin);

router.get('/', validateToken, refreshJWT);


export default router;