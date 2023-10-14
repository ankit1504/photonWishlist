export interface IGeoCodeAddress {
  pincode: string;
  city: string;
  state: string;
}

export class GeoCodeAddress {
  geoCodeAddress = {} as IGeoCodeAddress;
  constructor(geoCodeAddress: IGeoCodeAddress) {
    this.geoCodeAddress = geoCodeAddress;
  }
}
