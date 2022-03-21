import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const generateAccessToken = (uid = '') => {

    return new Promise((resolve, reject) => {

        const user = { uid };

        jwt.sign(user, process.env.SECRETPRIVATEKEY as string, {
            expiresIn: '4h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el JWT');
            } else {
                resolve(token);
            }
        });
    })
};