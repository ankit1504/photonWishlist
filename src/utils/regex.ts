export const emailValidation =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const checkForSpecialCharacters = /[^\w\s]/g;
export const pannumberValidation =
  /^[A-Z]{3}[ABCFGHLJPT]{1}[A-Z]{1}[0-9]{4}[A-Z]{1}$/;
export const phoneNumberValidation = /^[6-9]{1}[0-9]{9}$/;
export const nameValidation = /[^A-Za-z]/;
export const accountNumberValidation = /[^0-9]/;
export const pincodeValidation = /^[0-9]{6}$/;
export const patternTwoDigitsAfterComma = /^\d+(\.\d{0,2})?$/;
