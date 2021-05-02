import Hotel from '@modules/hotels/infra/typeorm/schemas/Hotel';
import { ISearchOptions } from '../dtos/ISearchOptionsDTO';

export default interface IHotelsRepository {
  index(data?: ISearchOptions): Promise<Hotel[]>;
  find(hotel_id: string): Promise<Hotel | undefined>;
}
