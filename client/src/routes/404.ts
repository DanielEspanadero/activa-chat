import { Router } from "express";
import { error404Get } from "../controllers/404";

const router = Router();

router.get('/', error404Get);

export default router;
