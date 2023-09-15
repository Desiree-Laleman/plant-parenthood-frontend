export default interface Plant {
  _id?: string;
  perenualId: number;
  googleId: string;
  nickName: string;
  commonName: string;
  scientificName: string[];
  otherName: string[];
  watering: number | null;
  pic?: string;
}
