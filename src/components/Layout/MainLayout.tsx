import * as React from 'react';
import { Footer, Header } from '../common';

export interface IMainLayoutProps {
  children?: React.ReactNode;
}

export function MainLayout({ children }: IMainLayoutProps) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
