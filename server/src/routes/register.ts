import { Router } from "express";
import { registerPost } from "../controllers/register";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";

const router = Router();

router.post('/', [
    check('firstName', 'The firstName is required.').not().isEmpty(),
    check('lastName', 'The lastName is required.').not().isEmpty(),
    check('email', 'This email is not valid.').isEmail(),
    check('password', 'The password must have more than 6 letters.').isLength({ min: 6 }),
    validateFields
], registerPost);

export default router;