import React from "react";
import { Link, useLocation } from "react-router-dom";

import CircleIcon from "@mui/icons-material/Circle";
import { Breadcrumbs } from "@mui/material";
import Typography from "@mui/material/Typography";
import clsx from "clsx";

import useStyles from "./styles";

export interface IBreadcrumbsProps {
  id: string;
  homeTextName: string;
  breadcrumbRoutesMap: {
    path: string;
    name: string;
    component: JSX.Element;
  }[];

  breadcrumbAliasNameMap: {
    routeName: string;
    name: string;
  }[];
  pathnames?: string;
}

const IMBreadcrumbs: React.FC<IBreadcrumbsProps> = (
  props: IBreadcrumbsProps
) => {
  const classes = useStyles();
  const location = useLocation().pathname;
  const url = props.pathnames ?? location;
  const pathnames = url.split("/").filter((x) => x);

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      className={clsx(classes.breadcrumbsStyle)}
      separator={<CircleIcon className={clsx(classes.circleIconStyle)} />}
    >
      <Typography
        className={clsx(classes.breadcrumbsLinkStyle)}
        component={Link}
        color="inherit"
        to="/"
        id={`${props.id}-home-link`}
      >
        {props.homeTextName}
      </Typography>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography
            className={clsx(classes.breadcrumbsLastLinkStyle)}
            key={to}
            id={`${props.id}-breadcrumb-last-link`}
          >
            {props.breadcrumbRoutesMap.find((item) => item.path === to)?.name ??
              props.breadcrumbAliasNameMap.find((i) => {
                const match = value.match(i.routeName);
                return match !== null && match[0] === i.routeName;
              })?.name}
          </Typography>
        ) : (
          <Typography
            className={clsx(classes.breadcrumbsLinkStyle)}
            component={Link}
            color="inherit"
            to={to}
            key={to}
            id={`${props.id}-breadcrumb-${index}-link`}
          >
            {props.breadcrumbRoutesMap.find((item) => item.path === to)?.name ??
              props.breadcrumbAliasNameMap.find((i) => {
                const match = value.match(i.routeName);
                return match !== null && match[0] === i.routeName;
              })?.name}
          </Typography>
        );
      })}
    </Breadcrumbs>
  );
};

export default IMBreadcrumbs;
