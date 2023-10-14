import common_en from "./en/common";
import createRequest_en from "./en/createRequest";
import home_en from "./en/home";
import requestDetail_en from "./en/requestDetails";
import requestList_en from "./en/requestList";
import storeList_en from "./en/storeList";

const langSetupOptions = {
  resources: {
    en: {
      common: common_en,
      home: home_en,
      requestList: requestList_en,
      createRequest: createRequest_en,
      requestDetails: requestDetail_en,
      storeList: storeList_en,
    },
  },
  ns: ["common", "home", "requestList", "createRequest", "storeList", "requestDetails"],
  defaultNS: "common",
};
export default langSetupOptions;
