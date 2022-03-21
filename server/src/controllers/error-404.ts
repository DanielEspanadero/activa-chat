export const error404Post = (req: any, res: any) => {
    res.status(404).json({
        msg: 'Error 404 - Page not found'
    });
};