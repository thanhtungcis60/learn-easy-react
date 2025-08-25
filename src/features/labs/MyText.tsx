import * as React from 'react';

export interface IMyTextProps {
  children?: React.ReactNode;
}

export function MyText({ children }: IMyTextProps) {
  return <div>{children}</div>;
}
