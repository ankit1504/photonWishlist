export interface IAddress {
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2: string;
  state: string;
  zip: string | number;
  city: string;
  landmark?: string;
  district?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
}
