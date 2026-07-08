export class NumberDto {
  number: string;
}

export class getCatalogDto {
  number?: string;
  limit?: number;
  cursor?: string;
}

export class getCollectionsDto {
  number?: string;
  limit?: number;
}

export class CreateProductDto {
  name: string;
  price: number;
  currency: string;
  description: string;
  retailerId?: string;
  url?: string;
  isHidden?: boolean;
  // Image URLs for the product (at least one is required by WhatsApp).
  images: string[];
}

export class UpdateProductDto {
  productId: string;
  name: string;
  price: number;
  currency: string;
  description: string;
  retailerId?: string;
  url?: string;
  isHidden?: boolean;
  images: string[];
}

export class DeleteProductDto {
  productIds: string[];
}

export class BusinessProfileDto {
  number?: string;
}
