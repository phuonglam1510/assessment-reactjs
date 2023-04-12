import { stringify } from "querystring";
import { ProductModel } from "../models/Product.model";
import { BaseService } from "./base.service";

export interface ProductFilterParams {
  tag?: string;
  collection?: string;
  category?: string;
}

export class ProductService extends BaseService {
  getProducts(filter: ProductFilterParams): Promise<ProductModel[]> {
    return this.get<ProductModel[]>(`items?${stringify(filter as any)}`);
  }
}
