interface DefaultImage {
  thumbnail: string;
}

export default interface PerenualPlant {
  id: number;
  common_name: string;
  scientific_name: string[];
  other_name: string[];
  cycle: string;
  watering: string;
  sunlight: string[];
  default_image: null | DefaultImage;
}