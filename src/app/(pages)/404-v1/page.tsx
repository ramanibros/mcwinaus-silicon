import { Metadata } from 'next';
import React from 'react';
import Error from './components/Error';

export const metadata: Metadata = { title: 'Silicon | 404 Not Found v1' };

const Page = () => {
  return <Error />;
};

export default Page;
