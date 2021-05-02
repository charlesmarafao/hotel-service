import { ObjectID as ObjectIdType } from 'mongodb';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectID,
  ObjectIdColumn,
} from 'typeorm';
import {
  Commission,
  Guests,
  Policies,
  Price,
  RateFamilyEstimated,
  Room,
} from '@modules/hotels/dtos/IHotelOfferDTO';

@Entity('hotelOffers')
class HotelOffers {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  hotelId: ObjectIdType;

  @Column()
  checkInDate: string;

  @Column()
  checkOutDate: string;

  @Column()
  rateCode: string;

  @Column()
  boardType: string;

  @Column()
  self: string;

  @Column()
  available: boolean;

  @Column()
  offerId: string;

  @Column()
  rateFamilyEstimated: RateFamilyEstimated;

  @Column('simple-json')
  commission: Commission;

  @Column('simple-json')
  room: Room;

  @Column('simple-json')
  guests: Guests;

  @Column('simple-json')
  price: Price;

  @Column('simple-json')
  policies: Policies;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default HotelOffers;
