import 'reflect-metadata';

import FakeHotelsRepository from '@modules/hotels/repositories/fakes/FakeHotelsRepository';
import FindHotelServiceById from '@modules/hotels/services/FindHotelServiceById';
import AppError from '@shared/errors/AppError';

import { hotelsMock } from '@modules/hotels/repositories/fakes/mocks/hotels';

let fakeHotelsRepository: FakeHotelsRepository;
let findHotelServiceById: FindHotelServiceById;

describe('FindHotelServiceById', () => {
  beforeEach(() => {
    fakeHotelsRepository = new FakeHotelsRepository();
    findHotelServiceById = new FindHotelServiceById(fakeHotelsRepository);
  });

  it('should be able to find hotel', async () => {
    const holtelMock = hotelsMock[0];
    const hotels = await findHotelServiceById.execute(String(holtelMock.id));

    expect(hotels).toEqual(holtelMock);
  });

  it('should not be able to find hotel if they do not exist', async () => {
    expect(findHotelServiceById.execute('some incorrect id')).rejects.toEqual(
      new AppError('Hotel does not exist', 404),
    );
  });
});
