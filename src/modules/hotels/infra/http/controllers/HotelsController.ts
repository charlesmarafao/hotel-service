import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListHotelsService from '@modules/hotels/services/ListHotelsService';
import FindHotelServiceById from '@modules/hotels/services/FindHotelServiceById';
import AppError from '@shared/errors/AppError';

class HotelsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { text } = request.query;

    const listHotelsService = container.resolve(ListHotelsService);

    const hotels = await listHotelsService.execute({ text: String(text) });

    return response.status(200).json(hotels);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { hotel_id } = request.params;

    if (!hotel_id) {
      throw new AppError('The hotel id field is required');
    }

    const findHotelServiceById = container.resolve(FindHotelServiceById);

    const hotel = await findHotelServiceById.execute(hotel_id as string);

    return response.status(200).json(hotel);
  }
}

export default HotelsController;
