import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListOffersByHotelService from '@modules/hotels/services/ListOffersByHotelService';

class HotelOffersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { hotel_id } = request.params;

    const listOffersByHotelService = container.resolve(
      ListOffersByHotelService,
    );

    const hotel = await listOffersByHotelService.execute(String(hotel_id));

    return response.status(200).json(hotel);
  }
}

export default HotelOffersController;
