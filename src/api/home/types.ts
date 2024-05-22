export interface IHome {
  recommend_category_cars: RecommendCategoryCar[];
  id: string;
}

export interface RecommendCategoryCar {
  category: string;
  carModels: CarModel[];
}

export interface CarModel {
  id: number;
  countryCode: string;
  languageCode: string;
  brandId: number;
  brandCode: string;
  brandName: string;
  modelCode: string;
  modelName: string;
  carType: number;
  listImage: string;
  galleryImages: GalleryImage[];
  saleState: number;
  bodyType: string;
  segment: string;
  type: string;
  minPrice: number;
  maxPrice: number;
  priceUnit: string;
  state: number;
  brandIcon?: string;
  imageCount: number;
  totalScore: number;
  hotState?: number;
  vrState?: number;
  userReviewCount: number;
  monthlyPayment: any;
  specs: any;
  variants: any;
  minFuelConsumption: number;
  fuelConsumptionUnit: string;
  seats: string;
  carsomeUsedCarInfo: any;
  review: any;
  upcomingType: number;
  upcomingTime?: string;
  upcomingSubmitTime?: string;
  addVariantTime: string;
  addModelTime?: string;
  carModelName: string;
  carModelCode: string;
  surfacePlotUrl: string;
}

export interface GalleryImage {
  name: string;
  url: string;
  description?: string;
  width: any;
  height: any;
}
