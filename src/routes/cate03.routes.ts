import {Request, Response, Router} from 'express';

const cate03Router = Router();

cate03Router.get('/workshop', async (req:Request, res:Response) => {
    res.render('workshop');
});
cate03Router.get('/history', async (req:Request, res:Response) => {
    res.render('history');
});

export default cate03Router;