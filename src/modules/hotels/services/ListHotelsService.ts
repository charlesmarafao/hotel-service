import IHotelsRepository from '@modules/hotels/repositories/IHotelsRepository';

import Hotel from '@modules/hotels/infra/typeorm/schemas/Hotel';

import AppError from '@shared/errors/AppError';

import { injectable, inject } from 'tsyringe';
import { ISearchOptions } from '../dtos/ISearchOptionsDTO';

@injectable()
class ListHotelsService {
  private hotelsRepository: IHotelsRepository;

  constructor(
    @inject('HotelsRepository')
    hotelsRepository: IHotelsRepository,
  ) {
    this.hotelsRepository = hotelsRepository;
  }

  public async execute(data: ISearchOptions = {}): Promise<Hotel[]> {
    const hotels = await this.hotelsRepository.index(data);

    if (!hotels.length) {
      throw new AppError('Hotels do not exists', 404);
    }

    return hotels;
  }
}

export default ListHotelsService;
