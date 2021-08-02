import { Router } from 'express';
import cate01Router from './cate01.routes';
import cate02Router from "./cate02.routes";
import cate03Router from "./cate03.routes";
import exitRouter from "./exit.routes";

const routes = Router();
routes.use('/cate01', cate01Router);
routes.use('/cate02', cate02Router);
routes.use('/cate03', cate03Router);
routes.use('/exit', exitRouter);

export default routes;