import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function Container({ children }: Props) {
  return <div className="Container">{children}</div>;
}
