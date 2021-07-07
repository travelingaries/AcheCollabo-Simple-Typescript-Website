import {Request, Response, Router} from 'express';

const cate02Router = Router();

cate02Router.get('/intro', async (req:Request, res:Response) => {
    res.render('intro');
});
cate02Router.get('/cooperation', async (req:Request, res:Response) => {
    res.render('cooperation');
});

export default cate02Router;