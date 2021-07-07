import {Request, Response, Router} from 'express';

const cate01Router = Router();

cate01Router.get('/video', async (req:Request, res:Response) => {
   res.render('video');
});
cate01Router.get('/install', async (req:Request, res:Response) => {
   res.render('install');
});
cate01Router.get('/3d', async (req:Request, res:Response) => {
   res.render('3d');
});

export default cate01Router;