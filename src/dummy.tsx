import ReactDOM from "react-dom";
import { Global } from "@emotion/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 * Dummy React root component.
 * Not used anywhere. 
 * We import and write useless code just to make parcel extract a 
 * separate bundle for the packages imported in this file.
 * https://parceljs.org/features/code-splitting/#shared-bundles
 */
const Dummy = () => {
  return (
    <BrowserRouter>
      <Global />
      <Routes>
        <Route path="/" element={<div>hello</div>} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<Dummy />, document.getElementById("app"));
