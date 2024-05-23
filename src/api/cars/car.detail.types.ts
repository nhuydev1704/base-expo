export interface ICarDetail {
  picture: Picture[];
  detail: Detail;
  car_id: string;
  id: string;
}

export interface Picture {
  categoryName: string;
  imageCount: number;
  imageList: ImageList[];
}

export interface ImageList {
  name: string;
  url: string;
  description: string;
  modelName: string;
  variantName: string;
  carModelName: string;
  carName: string;
  index: string;
  type: string;
  number: number;
}

export interface Detail {
  id: number;
  aliasName: string;
  brandIcon: string;
  carModelPicDtoUrl: CarModelPicDtoUrl[];
  carImgCount: number;
  brandCode: string;
  brandName: string;
  carModelName: string;
  carModelCodeName: string;
  carModelCode: string;
  modelName: string;
  modelCode: string;
  minPrice: number;
  maxPrice: number;
  priceUnit: string;
  bodyType: string;
  segment: string;
  description: string;
  listImage: string;
  latestUpdate: string;
  latestUpdateNews: any[];
  highlights: any[];
  modelSummaryCarInfoList: ModelSummaryCarInfoList[];
  allVariantList: any[];
  carModelNewsList: CarModelNewsList[];
  faqs: Faq[];
  pros: string;
  cons: string;
  reviews: Review[];
  specs: Spec[];
  totalScore: number;
  userReviewCount: number;
  surfacePlotUrl: string;
  colourList: ColourList[];
  seoContent: SeoContent;
  upcomingType: number;
  upcomingTime: any;
  addVariantTime: string;
  upcomingSubmitTime: any;
  saleState: number;
  addModelTime: any;
  recommendCarModel: RecommendCarModel[];
  bodyTypeModelList: any[];
  fuelTypeModelList: any[];
  randomMoneySavingOrBestSellingModelList: any[];
  carImgPreviewList: CarImgPreviewList[];
  ratingData: RatingData;
  userReviewList: any[];
  relatedPosts: any[];
  modelFuelConsumptions: any[];
  variantFuelConsumptions: VariantFuelConsumption[];
  ownershipCostList: OwnershipCostList[];
}

export interface CarModelPicDtoUrl {
  name: string;
  url: string;
  description: string;
  width: any;
  height: any;
}

export interface ModelSummaryCarInfoList {
  id: number;
  countryCode: string;
  languageCode: string;
  carType: number;
  brandId: any;
  brandCode: string;
  brandName: string;
  modelId: any;
  modelCode: string;
  modelName: string;
  variantCode: string;
  variantName: string;
  listImage: string;
  seats: any;
  year: string;
  onSales: string;
  aspiratedForm: string;
  capacity: number;
  capacityFormat: number;
  capacityUnit: string;
  price: number;
  priceUnit: string;
  monthlyPayment: number;
  transmission: string;
  imageCount: number;
  fuelConsumption: any;
  fuelType: any;
  bodyType: any;
  type: any;
  carModelName: string;
  carModelCode: string;
  carName: string;
  carCode: string;
  monthlySupplyPriceUnit: string;
  monthlySupplyPrice: number;
}

export interface CarModelNewsList {
  id: number;
  countryCode: string;
  languageCode: string;
  secondLang: string;
  carType: number;
  title: string;
  englishTitle: string;
  summary: string;
  imageType: number;
  images: Image[];
  cateNames: string[];
  authorId: number;
  authorName: string;
  authorAvatar: string;
  releaseTime: number;
  updateTime: number;
  relModelIdList: string[];
  likes: number;
  carModelName: string;
  carModelCode: string;
  author: string;
}

export interface Image {
  name: string;
  url: string;
  description: any;
  width: any;
  height: any;
}

export interface Faq {
  id: number;
  uid: number;
  type: any;
  content: string;
  brandCode: any;
  modelCode: any;
  modelId: any;
  createTime: string;
  answers: Answer[];
}

export interface Answer {
  id: number;
  nickName: string;
  avatar: string;
  content: string;
  createTime: string;
  avatarUrl: string;
}

export interface Review {
  category: string;
  content: string;
}

export interface Spec {
  code: string;
  name: string;
  value: string;
  unit: string;
}

export interface ColourList {
  code: string;
  name: string;
  image: Image2;
}

export interface Image2 {
  name: string;
  url: string;
  description?: string;
  width?: number;
  height?: number;
}

export interface SeoContent {
  modelName: string;
  modelNameWithoutBrand: string;
  variantCount: number;
  minPrice: string;
  maxPrice: string;
  minPriceVariant: string;
  maxPriceVariant: string;
  imageCount: number;
  interiorImageCount: number;
  exteriorImageCount: number;
  colourImageCount: number;
  othersImageCount: number;
  colorCount: number;
  colors: string;
  minFuelConsumption: string;
  maxFuelConsumption: string;
  variantFuelConsumptions: any[];
}

export interface RecommendCarModel {
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
  brandIcon: any;
  imageCount: number;
  totalScore: number;
  hotState: any;
  vrState: any;
  userReviewCount: number;
  monthlyPayment: any;
  specs: any;
  variants: any;
  minFuelConsumption: number;
  fuelConsumptionUnit: string;
  seats: string;
  carsomeUsedCarInfo: any;
  review: string;
  upcomingType: number;
  upcomingTime: any;
  upcomingSubmitTime: any;
  addVariantTime: string;
  addModelTime: any;
  carModelName: string;
  carModelCode: string;
  surfacePlotUrl: string;
  picturlUrl: string;
  position?: number;
}

export interface GalleryImage {
  name: string;
  url: string;
  description?: string;
  width: any;
  height: any;
}

export interface CarImgPreviewList {
  name: string;
  url: string;
  description: any;
  width: any;
  height: any;
}

export interface RatingData {
  specList: any[];
  valueList: any[];
}

export interface VariantFuelConsumption {
  variantName: string;
  officialData: string;
  wapcarData: string;
  ownerData: string;
}

export interface OwnershipCostList {
  id: number;
  variantCode: string;
  roadTaxPayment: number;
  insurancePayment: number;
  fuelPricePayment: any;
  monthlyPayment: number;
  priceUnit: any;
  fuelConsumption: string;
}
