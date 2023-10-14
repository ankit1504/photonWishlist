import { IAddress } from "./Address";

interface ICustomerAddressList extends IAddress {
  addressType: string;
  createdAt: string;
  createdBy: number;
  customerId: number;
  deletedAt: string;
  id: number;
  info: string;
  isActive: boolean;
  modifiedBy: number;
  updatedAt: string;
  label?: string;
  isShippingBillingAddressSame: boolean;
}

export class CustomerAddressList {
  addressList: Array<ICustomerAddressList> = [];
  constructor(addressList: ICustomerAddressList[]) {
    this.addressList = addressList;
  }
}
