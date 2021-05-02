/* eslint-disable @typescript-eslint/no-unused-vars */
import { getMongoRepository, MongoRepository } from 'typeorm';
import { ObjectID } from 'mongodb';
import HotelOffer from '@modules/hotels/infra/typeorm/schemas/HotelOffer';

import IHotelOffersRepository from '@modules/hotels/repositories/IHotelOffersRepository';

class HotelOffersRepository implements IHotelOffersRepository {
  private ormRepository: MongoRepository<HotelOffer>;

  constructor() {
    this.ormRepository = getMongoRepository(HotelOffer);
  }

  public async index(hotel_id: string): Promise<HotelOffer[]> {
    const hotelOffers = await this.ormRepository.find({
      hotelId: new ObjectID(hotel_id),
    });

    return hotelOffers;
  }
}

export default HotelOffersRepository;
