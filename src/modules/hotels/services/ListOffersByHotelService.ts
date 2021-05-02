import IHotelOffersRepository from '@modules/hotels/repositories/IHotelOffersRepository';

import HotelOffer from '@modules/hotels/infra/typeorm/schemas/HotelOffer';

import AppError from '@shared/errors/AppError';

import { injectable, inject } from 'tsyringe';

@injectable()
class ListOffersByHotelService {
  private hotelOffersRepository: IHotelOffersRepository;

  constructor(
    @inject('HotelOffersRepository')
    hotelOffersRepository: IHotelOffersRepository,
  ) {
    this.hotelOffersRepository = hotelOffersRepository;
  }

  public async execute(hotel_id: string): Promise<HotelOffer[]> {
    const hotelOffers = await this.hotelOffersRepository.index(hotel_id);

    if (!hotelOffers.length) {
      throw new AppError('Hotel offers do not exists', 404);
    }

    return hotelOffers;
  }
}

export default ListOffersByHotelService;
