export interface IBrand {
  src: string;
  alt: string;
  description: string;
  id: string;
  faq: Faq;
  info: Info;
  compare: Compare;
  models: string[];
}

export interface Faq {
  faqContent: string;
  title: string;
  quesIconIdx: number;
  target_type: string;
}

export interface Info {
  brandName: string;
  img: Img;
  description: string;
  brandAliasName: string;
  modelPriceList: ModelPriceList[];
  brandBodyTypeList: BrandBodyTypeList[];
  brandEvCarModelData: BrandEvCarModelData;
  brandSevenSeaterCarModelData: BrandSevenSeaterCarModelData;
  withEvVariant: boolean;
}

export interface Img {
  src: string;
}

export interface ModelPriceList {
  modelCode: string;
  priceInfo: PriceInfo;
  targetHref: string;
}

export interface PriceInfo {
  minPrice: number;
  maxPrice: number;
  priceUnit: string;
}

export interface BrandBodyTypeList {
  tagName: string;
  carModelInfoList: CarModelInfoList[];
  targetHref: string;
}

export interface CarModelInfoList {
  modelName: string;
  targetHref: string;
}

export interface BrandEvCarModelData {
  tagName: any;
  carModelInfoList: any;
  targetHref: any;
}

export interface BrandSevenSeaterCarModelData {
  tagName: string;
  carModelInfoList: CarModelInfoList2[];
  targetHref: string;
}

export interface CarModelInfoList2 {
  modelName: string;
  targetHref: string;
}

export interface Compare {
  comparisionList: ComparisionList[];
  title: string;
  target_type: string;
}

export interface ComparisionList {
  model: Model;
  compareModel: CompareModel;
}

export interface Model {
  id: number;
  countryCode: string;
  languageCode: string;
  carType: number;
  brandId: number;
  brandCode: string;
  brandName: string;
  modelCode: string;
  modelName: string;
  minPrice: number;
  maxPrice: number;
  priceUnit: string;
  listImage: string;
  seats: any;
}

export interface CompareModel {
  id: number;
  countryCode: string;
  languageCode: string;
  carType: number;
  brandId: number;
  brandCode: string;
  brandName: string;
  modelCode: string;
  modelName: string;
  minPrice: number;
  maxPrice: number;
  priceUnit: string;
  listImage: string;
  seats: any;
}
