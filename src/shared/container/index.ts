import { container } from 'tsyringe';

import IHotelsRepository from '@modules/hotels/repositories/IHotelsRepository';
import HotelsRepository from '@modules/hotels/infra/typeorm/repositories/HotelsRepository';

import IHotelOffersRepository from '@modules/hotels/repositories/IHotelOffersRepository';
import HotelOffersRepository from '@modules/hotels/infra/typeorm/repositories/HotelOffersRepository';

container.registerSingleton<IHotelsRepository>(
  'HotelsRepository',
  HotelsRepository,
);

container.registerSingleton<IHotelOffersRepository>(
  'HotelOffersRepository',
  HotelOffersRepository,
);
