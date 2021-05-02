/* eslint-disable @typescript-eslint/no-unused-vars */
import { getMongoRepository, MongoRepository } from 'typeorm';
import Hotel from '@modules/hotels/infra/typeorm/schemas/Hotel';

import IHotelsRepository from '@modules/hotels/repositories/IHotelsRepository';
import { ISearchOptions } from '@modules/hotels/dtos/ISearchOptionsDTO';
import HotelListQueryBuilder from '../query-builders/hotel-list';

class HotelsRepository implements IHotelsRepository {
  private ormRepository: MongoRepository<Hotel>;

  constructor() {
    this.ormRepository = getMongoRepository(Hotel);
  }

  public async index({ text }: ISearchOptions = {}): Promise<Hotel[]> {
    const query = HotelListQueryBuilder.withText(text);

    const hotels = await this.ormRepository.find(query);

    return hotels;
  }

  public async find(hotel_id: string): Promise<Hotel | undefined> {
    const hotel = await this.ormRepository.findOne(hotel_id);

    return hotel;
  }
}

export default HotelsRepository;
