import {
  Address,
  Contact,
  Description,
  HotelDistance,
  MediaEntity,
} from '@modules/hotels/dtos/IHotelDTO';

import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectID,
  ObjectIdColumn,
} from 'typeorm';

@Entity('hotels')
class Hotel {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  type: string;

  @Column()
  hotelId: string;

  @Column()
  chainCode: string;

  @Column()
  dupeId: string;

  @Column()
  name: string;

  @Column()
  rating: string;

  @Column()
  cityCode: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @Column('simple-json')
  hotelDistance: HotelDistance;

  @Column('simple-json')
  address: Address;

  @Column('simple-json')
  contact: Contact;

  @Column('simple-json')
  description: Description;

  @Column('simple-array')
  media: MediaEntity[];

  @Column('simple-array')
  amenities: string[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Hotel;
