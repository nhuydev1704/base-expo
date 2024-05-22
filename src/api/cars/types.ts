export interface ICar {
  detail: Detail;
  brand_id: string;
  model: string;
  id: string;
}

export interface Detail {
  id: number;
  targetHref: string;
  targetText: string;
  priceInfo: PriceInfo;
  imgInfo: ImgInfo;
  seoLinkInfo: any;
  saleState: number;
  hotState: number;
  vrState: number;
  upcomingType: number;
  upcomingTime: any;
  upcomingSubmitTime: any;
  addVariantTime: string;
  addModelTime: any;
  variantInnerLinkInfoList: any;
  lang: string;
  btnTargetHref: string;
  variantCount: number;
  state: string;
  variantInfo: VariantInfo;
  extraInfo: ExtraInfo;
}

export interface PriceInfo {
  minPrice: number;
  maxPrice: number;
  priceUnit: string;
}

export interface ImgInfo {
  src: string;
}

export interface VariantInfo {
  id: number;
  brandId: number;
  brandCode: string;
  brandName: string;
  modelId: number;
  modelCode: string;
  modelName: string;
  variantCode: string;
  variantName: string;
  price: number;
  priceUnit: string;
  listImage: string;
}

export interface ExtraInfo {
  bodyType: string;
  segment: string;
}
