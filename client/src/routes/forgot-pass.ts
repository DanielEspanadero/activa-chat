import { Router } from "express";
import { forgotPass } from "../controllers/forgot-pass";

const router = Router();

router.get('/', forgotPass);

export default router;