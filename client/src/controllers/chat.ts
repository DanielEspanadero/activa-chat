import path from 'path';

export const chatGet = (req: any, res: any) => {
    res.sendFile(path.join(`${__dirname}../../../../public/html/en/chat.html`));
};