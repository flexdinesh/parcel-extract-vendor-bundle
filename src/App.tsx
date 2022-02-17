/** @jsxImportSource @emotion/react */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./components/global-styles";
import { PageLayout } from "./components/page-layout";

const LazyLoadedHomePage = React.lazy(() => import("./pages/home"));
const LazyLoadedAboutPage = React.lazy(() => import("./pages/about"));

export const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <BrowserRouter>
        <PageLayout>
          <Routes>
            <Route
              path="/"
              element={
                <React.Suspense fallback={<div>Loading home page</div>}>
                  <LazyLoadedHomePage />
                </React.Suspense>
              }
            />
            <Route
              path="about"
              element={
                <React.Suspense fallback={<div>Loading about page</div>}>
                  <LazyLoadedAboutPage />
                </React.Suspense>
              }
            />
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </React.Fragment>
  );
};
