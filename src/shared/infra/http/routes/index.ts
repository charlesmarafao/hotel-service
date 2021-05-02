import { Router } from 'express';
import hotelsRouter from '@modules/hotels/infra/http/routes/hotels.routes';
import hotelOffersRouter from '@modules/hotels/infra/http/routes/hotel-offers.routes';

const routes = Router();

routes.use('/hotels', hotelsRouter);
routes.use('/hotel-offers', hotelOffersRouter);

export default routes;
