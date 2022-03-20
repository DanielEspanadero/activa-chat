import { response } from "express";

export const login = (req: any, res = response) => {
    res.status(200).json({
        msg: 'Login get'
    });
};