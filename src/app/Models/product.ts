import {ProductImage} from './productImage';

export class Product {
  productId: number;
  productName: string;
  productPrice: number;
  productDescription: string;
  mainPictureString: string;
  images: ProductImage[];
}
