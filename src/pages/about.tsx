import React from "react";
import { HelloWorld } from "../components/hello-world";

type Props = {};

export const AboutPage: React.FC<Props> = ({}) => {
  return (
    <div
      css={{
        fontSize: "3rem",
        fontWeight: 800,
        background: "linear-gradient(70deg, #ff6464 40%, #5ac8fa 40%)",
        borderRadius: 8,
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        height: "calc(100vh - 88px)",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div>About page</div>
      <HelloWorld name="John" />
    </div>
  );
};

export default AboutPage;
