import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const generateAccessToken = (user: any) => {
    return jwt.sign(user, process.env.SECRETPRIVATEKEY!, { expiresIn: '4h' });
};