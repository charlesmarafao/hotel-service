import 'reflect-metadata';

import FakeHotelsRepository from '@modules/hotels/repositories/fakes/FakeHotelsRepository';
import ListHotelsService from '@modules/hotels/services/ListHotelsService';

import { hotelsMock } from '@modules/hotels/repositories/fakes/mocks/hotels';
import AppError from '@shared/errors/AppError';

let fakeHotelsRepository: FakeHotelsRepository;
let listHotelsService: ListHotelsService;

describe('ListHotelsService', () => {
  it('should be able to list hotels', async () => {
    fakeHotelsRepository = new FakeHotelsRepository();
    listHotelsService = new ListHotelsService(fakeHotelsRepository);

    const hotels = await listHotelsService.execute();
    expect(hotels).toEqual(hotelsMock);
  });

  it('should be able to search for hotels by name', async () => {
    fakeHotelsRepository = new FakeHotelsRepository();
    listHotelsService = new ListHotelsService(fakeHotelsRepository);

    const hotels = await listHotelsService.execute({
      text: hotelsMock[0].name,
    });

    expect(hotels).toEqual([hotelsMock[0]]);
  });

  it('should be able to search for hotels by city code', async () => {
    fakeHotelsRepository = new FakeHotelsRepository();
    listHotelsService = new ListHotelsService(fakeHotelsRepository);

    const hotels = await listHotelsService.execute({
      text: hotelsMock[0].address.cityName,
    });

    expect(hotels).toEqual([hotelsMock[0]]);
  });

  it('should be able to search for hotels by country code', async () => {
    fakeHotelsRepository = new FakeHotelsRepository();
    listHotelsService = new ListHotelsService(fakeHotelsRepository);

    const hotels = await listHotelsService.execute({
      text: hotelsMock[0].address.countryCode,
    });

    expect(hotels).toEqual(hotelsMock);
  });

  it('should not be able to find hotel if they do not exist', async () => {
    fakeHotelsRepository = new FakeHotelsRepository([]); // empty
    listHotelsService = new ListHotelsService(fakeHotelsRepository);

    expect(listHotelsService.execute()).rejects.toEqual(
      new AppError('Hotels do not exists', 404),
    );
  });
});
