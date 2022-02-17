/** @jsxImportSource @emotion/react */
import React from "react";
import { Global } from "@emotion/react";

export const GlobalStyles: React.FC = () => {
  return (
    <Global
      styles={`
          body {
            margin: 0px;
            padding: 0px;
            font-family: -apple-system, BlinkMacSystemFont, 'Open Sans', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;

            font-size: 1.25rem;
            letter-spacing: -1px;
          }
          
          a {
            color: inherit; /* blue colors for links too */
            text-decoration: inherit; /* no underline */
          }

          a {
            color: #343139;
            text-decoration: none;
            border-bottom: .125em solid #b4e7f8;
            transition: box-shadow 270ms cubic-bezier(0.77, 0, 0.175, 1), color 270ms cubic-bezier(0.77, 0, 0.175, 1);
          }

          a:hover {
            box-shadow: inset 0 -1.125em 0 #b4e7f8;
            color: #000;
          }
      `}
    />
  );
};
