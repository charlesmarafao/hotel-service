import { Router } from 'express';

import HotelOffersController from '../controllers/HotelOffersController';

const HotelsRouter = Router();
const hotelOffersController = new HotelOffersController();

HotelsRouter.get('/:hotel_id', hotelOffersController.index);

export default HotelsRouter;
