import {Category} from "./category";
import {ProductImage} from "./productImage";

export class Product{
  productId: number;
  productName: string;
  productPrice: number;
  productDescription: string;
  mainPictureString: string;
  category: Category;
  productImages: ProductImage[];
}
