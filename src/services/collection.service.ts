import { BaseService } from "./base.service";

export class CollectionService extends BaseService {
  getAllCollections(): Promise<string[]> {
    return this.get<string[]>("collections");
  }
}
