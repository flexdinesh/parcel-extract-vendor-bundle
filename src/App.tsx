/** @jsxImportSource @emotion/react */
import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./components/global-styles";
import { PageLayout } from "./components/page-layout";
import { HomePage } from "./pages/home";
import { AboutPage } from "./pages/about";

export const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <BrowserRouter>
        <PageLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </Fragment>
  );
};
