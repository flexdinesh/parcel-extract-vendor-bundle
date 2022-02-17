import React from "react";

type Props = {};

export const HomePage: React.FC<Props> = ({}) => {
  return (
    <div
      css={{
        fontSize: '3rem',
        fontWeight: 800,
        background: "linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%)",
        borderRadius: 8,
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        height: "calc(100vh - 88px)",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Home page
    </div>
  );
};
