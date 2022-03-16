import path from 'path';

export const loginGet = (req: any, res: any) => {
    res.sendFile(path.join(`${__dirname}../../../../public/index.html`));
};