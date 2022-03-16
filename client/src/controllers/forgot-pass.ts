import path from 'path';

export const forgotPass = (req: any, res: any) => {
    res.sendFile(path.join(`${__dirname}../../../../public/html/en/forgot-pass.html`));
};