// components/Layout.js
import React, { ReactNode } from 'react';
import Link from 'next/link';
import { AnyARecord } from 'dns';
import Header from './header';
import Footer from './footer';


export default function PageTemplate({ children }: any) {
  return (
      <>
      <Header />
      {children}
      <Footer />
      </>
  );
};

