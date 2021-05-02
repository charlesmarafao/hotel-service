import { ISearchOptions } from '@modules/hotels/dtos/ISearchOptionsDTO';
import Hotel from '@modules/hotels/infra/typeorm/schemas/Hotel';

import IHotelsRepository from '@modules/hotels/repositories/IHotelsRepository';
import { hotelsMock } from './mocks/hotels';

// in-memory
class HotelsRepository implements IHotelsRepository {
  private hotels: Hotel[] = [];

  constructor(hotels = hotelsMock) {
    this.hotels = hotels;
  }

  public async index({ text }: ISearchOptions = {}): Promise<Hotel[]> {
    const { hotels } = this;

    if (text) {
      const matchOptions = (key: string): boolean =>
        key.toLowerCase().includes(text.toLowerCase());

      return this.hotels.filter(
        hotel =>
          matchOptions(hotel.name) ||
          matchOptions(hotel.address.cityName) ||
          matchOptions(hotel.address.countryCode),
      );
    }

    return hotels;
  }

  public async find(hotel_id: string): Promise<Hotel | undefined> {
    const findHotel = this.hotels.find(
      hotel => hotel.id === (hotel_id as unknown), // to compare strings as ObjectID in-memory
    );

    return findHotel;
  }
}

export default HotelsRepository;
