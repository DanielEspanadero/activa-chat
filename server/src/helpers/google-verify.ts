// import { OAuth2Client } from 'google-auth-library';

const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleVerify = async (idToken = '') => {

    const ticket = await client.verifyIdToken({
        idToken,
        audience: process.env.GOOGLE_PUBLIC
    });

    const { name: name,
        picture: img,
        email: email
    } = ticket.getPayload();

    return { name, img, email };
}