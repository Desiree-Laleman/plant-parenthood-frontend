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
  // poisonous_to_pets: number;
  default_image: null | DefaultImage;
  maintenance: string;
  invasive: boolean;
  family: string;
  growth_rate: string;
  flowers: boolean;
  flowering_season: string | null;
}
