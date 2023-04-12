import { BaseService } from "./base.service";

export class TagService extends BaseService {
  getAllTags(): Promise<string[]> {
    return this.get<string[]>("tags");
  }
}
