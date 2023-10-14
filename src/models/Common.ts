export interface IIdLabelPair {
  id: string;
  label?: string;
}

export type IApiAutoCompleteOptionItem = {
  id: string | number;
  title: string;
  subTitle?: string;
  imageSrc?: string;
};

export type ISearchSelectItem = {
  id: string;
  label: string;
};

export type IApiActionParams = {
  [key: string]: string;
};
