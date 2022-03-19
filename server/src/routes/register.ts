import { Router } from "express";
import { registerGet } from "../controllers/register";

const router = Router();

router.get('/', registerGet);

export default router;