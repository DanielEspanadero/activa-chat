import { Router } from "express";
import { check } from "express-validator";

import { login } from "../controllers/auth";

const router: any = Router();

router.post('/', login);

router.get('/google', login);


export default router;