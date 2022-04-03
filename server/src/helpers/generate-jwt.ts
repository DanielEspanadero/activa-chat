import jwt, { JwtPayload } from 'jsonwebtoken';
import 'dotenv/config';
import { User } from '../models/user';

export const generateAccessToken = (uid = '') => {

    return new Promise((resolve: any, reject: any) => {

        const user = { uid };

        jwt.sign(user, process.env.SECRETPRIVATEKEY as string, {
            expiresIn: '4h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('Failed to generate JWT');
            } else {
                resolve(token);
            }
        });
    })
};

export const checkJWT = async (token = '') => {

    try {

        if (token.length < 10) {
            return null;
        }

        const { uid }: any = jwt.verify(token, process.env.SECRETPRIVATEKEY as string);
        const user = await User.findById(uid);

        if (user) {
            if (user.status) {
                return user;
            } else {
                return null;
            }
        } else {
            return null;
        }

    } catch (error) {
        return null;
    }
};