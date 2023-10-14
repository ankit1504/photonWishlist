/* eslint-disable import/prefer-default-export */

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { round, toNumber } from "lodash";

import { UserPermissions } from "../constants/Permissions";
import {
  CurrencyConvert,
  RequestListStatus,
} from "../constants/Strings";
import { IPermissionApiStructure, Permission } from "../feature/auth/models/UserProfile";

export const onKeyPress = (e: React.KeyboardEvent<any>) => {
  if (!e.key.match(/^[0-9]$/)) {
    e.preventDefault();
  }
};

export const onNameKeyPress = (e: React.KeyboardEvent<any>) => {
  if (!e.key.match(/^[0-9a-zA-Z ]$/)) {
    e.preventDefault();
  }
};

export const formatEpochTime = (epochTimeInSec?: number, format = 'DD MMM YYYY', isUtcTime?: boolean) => {
  if (!epochTimeInSec) return '-';
  if (isUtcTime) {
    dayjs.extend(utc);
    return dayjs.utc(epochTimeInSec * 1000).local().format(format);
  }
  return dayjs(epochTimeInSec * 1000).format(format);
};

/**
 * Currency Formatter
 * @param amount - Actual Value
 * @param digits - digits
 * @param locale - Locale
 * @param format - Currency conversion type
 */
export const indianCurrencyCommaSeparator = (amountString: string) => {
  const [baseString] = amountString.split(".");

  if (baseString.length <= 3) return amountString;

  return (
    amountString
      .substring(0, baseString.length - 3)
      .replace(/\B(?=(\d{2})+(?!\d))/g, ",") +
    "," +
    amountString.substring(baseString.length - 3)
  );
};
export const currencyFormatter = (
  amount: number,
  format = false,
  digits = 2,
  locale = "IN"
) => {
  let convertedValue = "";
  if (amount < 0) {
    return (convertedValue = "-".concat(convertedValue));
  }

  const originalNumber = Math.abs(Number(amount));
  let convertIn = CurrencyConvert.Original;

  if (format) {
    if (originalNumber <= 999) {
      convertIn = CurrencyConvert.Original;
    } else if (originalNumber <= 99999) {
      convertIn = CurrencyConvert.Thousands;
    } else if (originalNumber <= 9999999) {
      convertIn = CurrencyConvert.Lakhs;
    } else {
      convertIn = CurrencyConvert.Crore;
    }
  }

  switch (convertIn) {
    case CurrencyConvert.Original:
      return indianCurrencyCommaSeparator(
        roundOffToTwoDecimals(originalNumber).toString()
      );
    case CurrencyConvert.Lakhs:
      return convertInLakhs(originalNumber).toString().concat(" Lakhs");
    case CurrencyConvert.Thousands:
      return convertInThousand(originalNumber).toString().concat(" Thousands");
    case CurrencyConvert.Crore:
      return convertInCr(originalNumber).toString().concat(" Crores");
  }
};

const convertInCr = (num: number) => {
  return indianCurrencyCommaSeparator(
    roundOffToTwoDecimals(num / 10000000)
      .toFixed(2)
      .toString()
  );
};

const convertInLakhs = (num: number) => {
  return indianCurrencyCommaSeparator(
    roundOffToTwoDecimals(num / 100000)
      .toFixed(2)
      .toString()
  );
};

const convertInThousand = (num: number) => {
  return indianCurrencyCommaSeparator(
    roundOffToTwoDecimals(num / 1000)
      .toFixed(2)
      .toString()
  );
};

export const roundOffToTwoDecimals = (amount: number) => {
  const [base, decimal] = amount.toString().split(".");
  if (!decimal) return amount;
  return toNumber(Number(amount).toFixed(2));
};

export const autoRoundRupees = (amount: number) => {
  let autoRound = 0;
  let finalAmount = roundOffToTwoDecimals(amount);
  const fractionPart = round(finalAmount % 1, 2);
  if (fractionPart) {
    autoRound = round((fractionPart > 0.5 ? 1 : 0.5) - fractionPart, 2);
    finalAmount += autoRound;
  }
  return { autoRound, finalAmount };
};

export const getLocalStorageValue = (key: string) => localStorage.getItem(key);

export const setLocalStorageValue = (key: string, value: any) => {
  if (typeof value === "string") return localStorage.setItem(key, value);
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getStatusLabel = (status: string, permission: Record<string, Record<string, Permission>>) => {

  const hasPermission = (reqModulePermission?: string[]) => {
    if (Object.keys(permission).length === 0) return false;
    if (!reqModulePermission) return true;
    return Object.keys(permission?.module ?? {}).some((item) =>
      reqModulePermission?.includes(item)
    );
  };

  if (hasPermission([UserPermissions.CLUSTER_MANAGER]) && status === RequestListStatus.SENT_TO_CM) {
    return RequestListStatus.PENDING;
  }
  if (status === RequestListStatus.PENDING) {
    return RequestListStatus.PROCESSING;
  }
  return status;
};

export const constructPermission = (permissions?: IPermissionApiStructure[]) => {
  const formattedPermission: Record<string, any> = {};
  permissions?.forEach((permission) => {
    if (Object.keys(formattedPermission).includes(permission.level)) {
      formattedPermission[permission.level][permission.name] = {
        parentPermissionId: permission.parentPermissionId,
        hasPermission: true,
      };
    } else {
      formattedPermission[permission.level] = {
        [permission.name]: {
          parentPermissionId: permission.parentPermissionId,
          hasPermission: true,
        },
      };
    }
  });
  return formattedPermission;
};
