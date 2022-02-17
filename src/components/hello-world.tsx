import React from 'react';

type Props = {
  name?: string;
};

export const HelloWorld: React.FC<Props> = ({
  name = 'Jane',
}) => {
  return <div>Hello, {name}!</div>;
};
