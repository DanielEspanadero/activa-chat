import { Router } from "express";
import { chatGet } from "../controllers/chat";
import { validateToken } from "../middlewares/validate-jwt";

const router: any = Router();

router.get('/', validateToken, chatGet);

export default router;