import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

import { IMButton } from "@infra-market/im-web-components";
import { Box, Typography } from "@mui/material";
import useStyles from "./styles";
import IconInfolist from "../../feature/IconInfolist";

import ClearLocalStorageOnTabClose from "../../components/clearLocalStorage";
import { LocalStorageType } from "../../constants/Common";
import { getLocalStorageValue, setLocalStorageValue } from "../../utils/common";


