/* eslint-disable @typescript-eslint/interface-name-prefix */
export interface IHotelOffer {
  id: string;
  checkInDate: string;
  checkOutDate: string;
  rateCode: string;
  rateFamilyEstimated: RateFamilyEstimated;
  commission: Commission;
  boardType: string;
  room: Room;
  guests: Guests;
  price: Price;
  policies: Policies;
  self: string;
  hotelId: string;
  available: boolean;
  offerId: string;
}

export interface RateFamilyEstimated {
  code: string;
  type: string;
}
export interface Commission {
  amount: string;
  percentage: string;
}
export interface Room {
  type: string;
  typeEstimated: TypeEstimated;
  description: Description;
}
export interface TypeEstimated {
  category: string;
  beds: number;
  bedType: string;
}

export interface Description {
  text: string;
  lang: string;
}
export interface Guests {
  adults: number;
}
export interface Price {
  currency: string;
  total: string;
  taxes: TaxesEntity[];
  variations: Variations;
}
export interface TaxesEntity {
  code: string;
  pricingFrequency: string;
  pricingMode: string;
  amount: string;
  currency: string;
  included: boolean;
}
export interface Variations {
  average: Average;
  changes: ChangesEntity[];
}
export interface Average {
  base: string;
}
export interface ChangesEntity {
  startDate: string;
  endDate: string;
  base: string;
  total: string;
}
export interface Policies {
  holdTime: HoldTime;
  guarantee: Guarantee;
  paymentType: string;
}
export interface HoldTime {
  deadline: string;
}
export interface Guarantee {
  acceptedPayments: AcceptedPayments;
}
export interface AcceptedPayments {
  creditCards: string[];
  methods: string[];
}
