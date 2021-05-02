import HotelOffer from '@modules/hotels/infra/typeorm/schemas/HotelOffer';

import IHotelOffersRepository from '@modules/hotels/repositories/IHotelOffersRepository';
import { hotelOffersMock } from './mocks/hotel-offers';

// in-memory
class HotelOffersRepository implements IHotelOffersRepository {
  private hotelOffers: HotelOffer[] = [];

  constructor(hotelOffers = hotelOffersMock) {
    this.hotelOffers = hotelOffers;
  }

  public async index(hotel_id: string): Promise<HotelOffer[]> {
    const findhotelOffers = this.hotelOffers.filter(
      hotelOffers => hotelOffers.hotelId === (hotel_id as unknown), // to compare strings as ObjectID in-memory
    );

    return findhotelOffers;
  }
}

export default HotelOffersRepository;
