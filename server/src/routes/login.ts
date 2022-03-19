import { Router } from "express";
import { loginGet } from "../controllers/login";

const router = Router();

router.get('/', loginGet);

export default router;