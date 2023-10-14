/* eslint-disable import/no-unresolved */
import React, { FunctionComponent, Suspense } from "react";
import { Route } from "react-router-dom";

import IMNoPermission from "../components/IMNoPermission";
import { SentryRoutes } from "../config/sentry";
import ProductDetailsPage from "../feature/productDetails";
import Scanner from "../feature/scanner";
import WishListPage from "../feature/wishListPage";
import SaapHomePage from "../home/pages";
import ViewWishListPage from "../feature/viewWishList";

const AllRoutes: FunctionComponent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SentryRoutes>
        <Route path="" element={<SaapHomePage />} />
        <Route path="/wishList" element={<WishListPage />} />
        <Route path="/scanner" element={<Scanner />} />
        <Route path="/productDetails" element={<ProductDetailsPage />}/>
        <Route path="/viewWishlist" element={<ViewWishListPage />}/>
      </SentryRoutes>
    </Suspense>
  );
};

export default AllRoutes;
