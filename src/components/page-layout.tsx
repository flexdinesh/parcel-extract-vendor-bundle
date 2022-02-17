/** @jsxImportSource @emotion/react */
import React from "react";
import { Link } from "react-router-dom";

export const PageLayout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <nav
        css={{
          height: 72,
          display: "flex",
          gap: 8,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <main css={{ padding: 8 }}>{children}</main>
    </React.Fragment>
  );
};
