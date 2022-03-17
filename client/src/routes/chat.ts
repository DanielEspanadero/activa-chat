import { Router } from "express";
import { chatGet } from "../controllers/chat";

const router = Router();

router.get('/', chatGet);

export default router;