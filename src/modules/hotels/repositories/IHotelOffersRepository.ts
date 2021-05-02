import HotelOffer from '@modules/hotels/infra/typeorm/schemas/HotelOffer';

export default interface IHotelsRepository {
  index(hotel_id: string): Promise<HotelOffer[]>;
}
