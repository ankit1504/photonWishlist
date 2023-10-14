// import { IPermissionApiStructure } from "../feature/auth/models/UserProfile";

export enum LoginMode {
  password = "password",
  otp = "otp",
  login = "login",
}

export enum LoginType {
  phoneno = "phoneno",
  email = "email",
}

export enum LocalStorageType {
  wishListData = "wishListData",
}

export const defaultPageSize = 10;
export const defaultCursorValue = 0;
export const defaultCurrentPage = 1;

export type CountryCodes = 'IN' | 'US';

export enum CurrencyCodes {
  IN = '\u20B9',
  US = '\u0024',
}

export const formatCurrency = (amount?: number | string, country?: CountryCodes) => {
  if (!amount) return country ? `${CurrencyCodes[country]} 0` : '0';
  const amountString: string = typeof amount === 'number' ? amount.toString() : amount;
  const [numeric, decimal] = amountString.split('.');
  return (country ? `${CurrencyCodes[country]} ` : '')
    .concat(numeric.replace(/(\d)(?=(\d\d)+\d$)/g, '$1,'))
    .concat(decimal ? `.${decimal}` : '');
};
