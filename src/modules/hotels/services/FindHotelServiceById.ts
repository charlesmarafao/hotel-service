import IHotelsRepository from '@modules/hotels/repositories/IHotelsRepository';
import { injectable, inject } from 'tsyringe';

import Hotel from '@modules/hotels/infra/typeorm/schemas/Hotel';

import AppError from '@shared/errors/AppError';

@injectable()
class FindHotelServiceById {
  private hotelsRepository: IHotelsRepository;

  constructor(
    @inject('HotelsRepository')
    hotelsRepository: IHotelsRepository,
  ) {
    this.hotelsRepository = hotelsRepository;
  }

  public async execute(hotel_id: string): Promise<Hotel> {
    const hotel = await this.hotelsRepository.find(hotel_id);

    if (!hotel) {
      throw new AppError('Hotel does not exist', 404);
    }

    return hotel;
  }
}

export default FindHotelServiceById;
