export interface ClockInDto {
  name: string;
  idCard: string;
  phone: number;
  address: string;
  isContactPneumoniaInfected: 1 | 2 | 3;
  symptom: number;
  bodyTemperature: number;
}
