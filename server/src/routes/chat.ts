import { Router } from "express";
import { chatGet } from "../controllers/chat";

const router: any = Router();

router.get('/', chatGet);

export default router;