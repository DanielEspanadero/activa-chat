import { Request, Response, response } from "express";
import bcryptjs from 'bcryptjs';

import { User } from "../models/user";
import { generateAccessToken } from "../helpers/generate-jwt";
import { googleVerify } from "../helpers/google-verify";

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        // Verificar si el email existe
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                msg: 'Email / password are not correct. - email'
            });
        };
        // Si el usuario está activo
        if (!user.status) {
            return res.status(400).json({
                msg: 'Email / password are not correct. - status: false'
            });
        };
        // Verificar la contraseña
        const validPassword = bcryptjs.compareSync(password, user.password);

        if (!validPassword) {
            return res.status(400).json({
                validPassword,
                msg: 'Email / password are not correct. - Password'
            });
        };

        // Generar el JWT
        const token = await generateAccessToken(user.id);

        res.status(200).json({
            user,
            token
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Talk to the administrator'
        });
    };
};

export const googleSignin = async (req: Request, res = response) => {
    const { id_token } = req.body;
    try {
        const { email, name, img } = await googleVerify(id_token);
        let user = await User.findOne({ email });

        if (!user) {
            // Tengo que crearlo
            const data = {
                name,
                email,
                password: ':P',
                img,
                google: true
            };
            user = new User(data);
            await user.save();
        }
        // Si el usuario en DB
        if (!user.status) {
            return res.status(401).json({
                msg: 'Hable con el administrador, usuario bloqueado'
            });
        }
        // Generar el JWT
        const token = await generateAccessToken(user.id);
        res.json({
            user,
            token
        });
    } catch (error) {
        res.status(400).json({
            msg: 'Token de Google no es válido'
        })
    }
}

export const refreshJWT = async (req: any, res: Response) => {
    const user = req;

    // Generate JWT
    const token = await generateAccessToken(user.id);

    res.status(200).json({
        user,
        token
    })
}