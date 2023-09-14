export default interface Plant {
  _id?: string;
  googleId: string;
  nickName: string;
  commonName: string;
  scientificName: string;
  otherName: string;
  watering: number;
  pic?: string;
}
