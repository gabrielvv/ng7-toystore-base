import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as data from '../api/db.json'

export class InMemHeroService implements InMemoryDbService {
  createDb() {
    return data;
  }
}