import 'reflect-metadata';

import FakeHotelOffersRepository from '@modules/hotels/repositories/fakes/FakeHotelOffersRepository';
import ListOffersByHotelService from '@modules/hotels/services/ListOffersByHotelService';

import { hotelOffersMock } from '@modules/hotels/repositories/fakes/mocks/hotel-offers';
import AppError from '@shared/errors/AppError';

let fakeHotelsRepository: FakeHotelOffersRepository;
let listOffersByHotelService: ListOffersByHotelService;

describe('ListOffersByHotelService', () => {
  beforeEach(() => {
    fakeHotelsRepository = new FakeHotelOffersRepository();
    listOffersByHotelService = new ListOffersByHotelService(
      fakeHotelsRepository,
    );
  });

  it('should be able to list hotel offers by hotel', async () => {
    const hotelOfferMock = hotelOffersMock[0];
    const hotelOffer = await listOffersByHotelService.execute(
      String(hotelOfferMock.hotelId),
    );
    expect(hotelOffer).toEqual(hotelOffersMock);
  });

  it('should not be able to list hotel offers by hotel if they do not exist', async () => {
    expect(
      listOffersByHotelService.execute('some incorrect id'),
    ).rejects.toEqual(new AppError('Hotel offers do not exists', 404));
  });
});
