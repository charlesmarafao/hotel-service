import { Router } from 'express';

import HotelsController from '../controllers/HotelsController';

const HotelsRouter = Router();
const hotelsController = new HotelsController();

HotelsRouter.get('/', hotelsController.index);
HotelsRouter.get('/:hotel_id', hotelsController.show);

export default HotelsRouter;
