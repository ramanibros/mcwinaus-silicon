import React, { ReactNode } from 'react';
import Loader from './Loader';
import BackToTop from './BackToTop';

const AppWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="page-wrapper">
        <Loader />
        {children}
        <BackToTop />
      </div>
    </>
  );
};

export default AppWrapper;
