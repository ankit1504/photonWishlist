import React, { FunctionComponent } from "react";
import { SvgIcon } from "@mui/material";

const GreenDot: FunctionComponent = () => (
  <SvgIcon
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/SvgIcon"
  >
    <circle cx="8" cy="8" r="8" fill="url(#paint0_linear_4_7350)" />
    <circle cx="8" cy="8" r="4" fill="url(#paint1_linear_4_7350)" />
    <defs>
      <linearGradient
        id="paint0_linear_4_7350"
        x1="8"
        y1="0"
        x2="8"
        y2="16"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#EDF7ED" />
        <stop offset="1" stop-color="#BBE3BB" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_4_7350"
        x1="4.5"
        y1="4"
        x2="11.125"
        y2="13.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#4CAF50" />
        <stop offset="1" stop-color="#367139" />
      </linearGradient>
    </defs>
  </SvgIcon>
);

export default GreenDot;
