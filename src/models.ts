interface ImageModel {
  desktop: string;
  mobile: string;
  tablet: string;
}

export interface ProductModel {
  category: string;
  categoryImage: ImageModel;
  description: string;
  features: string;
  gallery: { first: ImageModel; second: ImageModel; third: ImageModel };
  id: number;
  image: ImageModel;
  includes: { quantity: number; item: string }[];
  name: string;
  new: boolean;
  others: {
    image: { mobile: string; tablet: string; desktop: string };
    name: string;
    slug: string;
  }[];
  price: number;
  slug: string;
}

export interface ProductCartModel {
  name: string;
  price?: number;
  quantity: number;
  image: string;
}
