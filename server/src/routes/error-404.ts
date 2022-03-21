import { Router } from "express";
import { error404Post } from "../controllers/error-404";

const router = Router();

router.get('/', error404Post);

export default router;