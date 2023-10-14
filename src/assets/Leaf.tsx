import React, { FunctionComponent } from "react";
import { SvgIcon } from "@mui/material";

interface ILeafSvgProps {
    width?: number;
    height?: number;
    className?: string;
  }

const LeafSvg: FunctionComponent<ILeafSvgProps> = (props) => (

<SvgIcon width={props.width || 50} height={props.height || 50} viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/SvgIcon">
<circle cx="18.5" cy="19" r="18.5" fill="#F4F7FB"/>
<mask id="mask0_4_7389"  maskUnits="userSpaceOnUse" x="6" y="8" width="25" height="22">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.72729 8.95908H30.189V29.2218H6.72729V8.95908Z" fill="white"/>
</mask>
<g mask="url(#mask0_4_7389)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.1489 9.28865C30.0665 9.08924 29.8719 8.95911 29.6562 8.95906C8.96681 8.95906 6.72729 17.5356 6.72729 21.2233C6.72729 26.0075 10.3703 29.2218 15.7922 29.2218C22.6399 29.2218 24.0743 22.7058 24.8443 19.2045C25.5928 15.6406 27.4013 12.3863 30.0326 9.86874C30.185 9.71661 30.2309 9.48771 30.1489 9.28865Z" fill="#32AEB6"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.26079 32.4212C6.96624 32.4212 6.72754 32.1825 6.72754 31.8879C6.72754 28.7173 12.2251 18.5443 20.8923 14.3447C21.1573 14.2163 21.4762 14.3271 21.6047 14.5921C21.733 14.8571 21.6223 15.176 21.3572 15.3045C12.6048 19.5458 7.79398 29.3957 7.79398 31.888C7.79398 32.1825 7.55528 32.4212 7.26079 32.4212Z" fill="#F2F2F2"/>
<path d="M7.26079 32.4212C6.96624 32.4212 6.72754 32.1825 6.72754 31.8879C6.72754 28.7173 12.2251 18.5443 20.8923 14.3447C21.1573 14.2163 21.4762 14.3271 21.6047 14.5921C21.733 14.8571 21.6223 15.176 21.3572 15.3045C12.6048 19.5458 7.79398 29.3957 7.79398 31.888C7.79398 32.1825 7.55528 32.4212 7.26079 32.4212" stroke="#1BB388" stroke-width="0.5"/>
</SvgIcon>
)

export default LeafSvg;

