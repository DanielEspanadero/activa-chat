import { User } from "../models/user";

export const registerPost = async (req: any, res: any) => {
    try {
        const { firstName, lastName, email } = req.body;
        const date = new Date();

        const user = await new User({ firstName, lastName, email, date });
        await user.save();
        res.status(200).json({ user });
    } catch (error: any) {
        throw new Error(error)
        // res.status(500).json({
        //     msg: error
        // });
    };
};