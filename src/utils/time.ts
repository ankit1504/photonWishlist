export const getDate = (
  locale?: Intl.LocalesArgument,
  options?: Intl.DateTimeFormatOptions
) => new Date().toLocaleDateString(locale, options);
