import path from 'path';

export const error404Get = (req: any, res: any) => {
    res.sendFile(path.join(`${__dirname}../../../../public/html/404.html`));
};