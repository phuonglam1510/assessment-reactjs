import { BaseService } from "./base.service";

export class CategoryService extends BaseService {
  getAllCategories(): Promise<string[]> {
    return this.get<string[]>("categories");
  }
}
