import React from "react";
import { useTranslation } from "react-i18next";

import PageNotFound404 from "../../assets/svg/PageNotFound404";
import IMOpsResponse from "../IMOpsResponse";

const IMPageNotFound: React.FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <IMOpsResponse image={PageNotFound404} title={t("pageNotFound") ?? ""} />
  );
};

export default IMPageNotFound;
