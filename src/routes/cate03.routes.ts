import {Request, Response, Router} from 'express';
const cate03Router = Router();

cate03Router.get('/workshop', async (req:Request, res:Response) => {
    res.render('workshop');
});
cate03Router.get('/history', async (req:Request, res:Response) => {
    res.render('history');
});
cate03Router.get('/3d', async (req:Request, res:Response) => {
    res.render('3d');
});

export default cate03Router;