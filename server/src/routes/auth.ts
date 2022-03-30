import { Router } from "express";
import { check } from "express-validator";

import { login, refreshJWT } from "../controllers/auth";
import { validateToken } from "../middlewares/validate-jwt";

const router: any = Router();

router.post('/login', login);

router.get('/google', login);

router.get('/', validateToken, refreshJWT);


export default router;