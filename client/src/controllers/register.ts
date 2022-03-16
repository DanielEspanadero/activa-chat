import path from 'path';

export const registerGet = (req: any, res: any) => {
    res.sendFile(path.join(`${__dirname}../../../../public/html/en/register.html`));
}