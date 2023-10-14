import React from "react";
import { useTranslation } from "react-i18next";

import AccessDenied from "../../assets/svg/AccessDenied";
import IMOpsResponse from "../IMOpsResponse";

const IMNoPermission: React.FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <IMOpsResponse
      image={AccessDenied}
      title={t("noPermissions") ?? ""}
      subTitle={t("accessDenied") ?? ""}
    />
  );
};

export default IMNoPermission;
