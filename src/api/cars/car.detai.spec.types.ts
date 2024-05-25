export interface ICarDetailSpec {
  car_id: string;
  detail: Detail;
  id: string;
}

export interface Detail {
  catalog: Catalog[];
  specs: Spec[][];
  modelVariants: ModelVariant[];
}

export interface Catalog {
  id: number;
  categoryKey: string;
  categoryName: string;
  attributeList: AttributeList[];
}

export interface AttributeList {
  id: number;
  attributeKey: string;
  attributeName: string;
  attributeType: number;
  dictGroup: string;
}

export interface Spec {
  categoryKey: string;
  categoryName: string;
  carPropertiesContrastMap: CarPropertiesContrastMap;
}

export interface CarPropertiesContrastMap {
  price?: string;
  insurance?: string;
  monthly_payment?: string;
  brand_name?: string;
  model_name?: string;
  variant_name?: string;
  body_type?: string;
  segment?: string;
  fuel_type?: string;
  year?: string;
  horsepower?: string;
  torque?: string;
  combustion_engine_power?: string;
  motor_output?: string;
  'Length x Width x Height'?: string;
  'Fuel tank capacity (litre)'?: string;
  fuel_consumption?: string;
  on_sale?: string;
  gearbox?: string;
  Engine?: string;
  loading_system?: string;
  capacity_format?: string;
  horsepower_kw?: string;
  capacity?: string;
  combined_engine_torque?: string;
  motor_type?: string;
  motor_output_kw?: string;
  motor_torque?: string;
  front_motor_output?: string;
  front_motor_torque?: string;
  rear_motor_output?: string;
  rear_motor_torque?: string;
  combined_system_output?: string;
  combined_system_output_kw?: string;
  combined_system_torque?: string;
  number_of_motors?: string;
  motor_arrangement?: string;
  battery_type?: string;
  ev_range?: string;
  battery_capacity?: string;
  power_consumption_per_100km?: string;
  battery_warranty?: string;
  quick_charge_time?: string;
  slow_charge_time?: string;
  length?: string;
  height?: string;
  width?: string;
  wheelbase?: string;
  weight?: string;
  ground_clearance?: string;
  'Minimum turning radius'?: string;
  Doors?: string;
  seat?: string;
  'Storage compartment capacity (liters)'?: string;
  transmission?: string;
  front_tire?: string;
  rear_tire?: string;
  'Wheel Size'?: string;
  'Front suspension'?: string;
  'Rear suspension'?: string;
  'Power steering'?: string;
  'Front light cluster'?: string;
  'Rear light cluster'?: string;
  'Fog lights'?: string;
  'Electric folding mirrors'?: string;
  'Anti-glare rearview mirror'?: string;
  'Interior material'?: string;
  "Adjusting the driver's seat"?: string;
  'Electronic handbrake'?: string;
  'Air conditioning system'?: string;
  'Rear air conditioner'?: string;
  'LCD screen'?: string;
  'Apple Carplay and Android Auto'?: string;
  'Speaker System'?: string;
  'Sound system'?: string;
  'Air bag'?: string;
  'Select running mode'?: string;
  'Cruise Control'?: string;
  ABS?: string;
  BA?: string;
  ESP?: string;
  EBD?: string;
  EPS?: string;
  'Reverse camera'?: string;
  'Rear parking assist sensor'?: string;
  'Blind spot warning'?: string;
}

export interface ModelVariant {
  id: number;
  countryCode: any;
  languageCode: any;
  carType: number;
  brandId: number;
  brandCode: string;
  brandName: string;
  modelId: number;
  modelCode: string;
  modelName: string;
  variantCode: string;
  variantName: string;
  listImage: string;
  seats: number;
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
  imageCount: any;
  fuelConsumption: string;
  fuelType: string;
  bodyType: string;
  type: string;
  carModelName: string;
  carModelCode: string;
  carName: string;
  carCode: string;
  variantKey: string;
}
