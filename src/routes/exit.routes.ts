import {Request, Response, Router} from 'express';
const exitRouter = Router();

exitRouter.get('/:num', async (req:Request, res:Response) => {
    res.render('exit'+req.params.num);
});

export default exitRouter;