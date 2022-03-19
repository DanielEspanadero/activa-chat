import { Router } from "express";
import { loginGet } from "../controllers/login";

const router: any = Router();

router.get('/', loginGet);

export default router;