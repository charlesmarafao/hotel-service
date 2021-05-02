/* eslint-disable @typescript-eslint/interface-name-prefix */
export default interface IHotel {
  id: string;
  type: string;
  hotelId: string;
  chainCode: string;
  dupeId: string;
  name: string;
  rating: string;
  cityCode: string;
  latitude: number;
  longitude: number;
  hotelDistance: HotelDistance;
  address: Address;
  contact: Contact;
  description: Description;
  amenities: string[];
  media: MediaEntity[];
}

export interface HotelDistance {
  distance: number;
  distanceUnit: string;
}

export interface Address {
  lines: string[];
  postalCode: string;
  cityName: string;
  countryCode: string;
  stateCode: string;
}
export interface Contact {
  phone: string;
  fax: string;
  email: string;
}
export interface Description {
  lang: string;
  text: string;
}
export interface MediaEntity {
  uri: string;
  category: string;
}
