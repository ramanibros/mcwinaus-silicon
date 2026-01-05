import React from 'react';
import Sidebar from '../sidebar-footer/Sidebar';
import { Row } from 'react-bootstrap';
import Footer from './components/Footer';
import Detail from './components/Detail';
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Silicon | Account Details' };

const page = () => {
  return (
    <>
      <Navbar Headerclass="header navbar navbar-expand-lg bg-light border-bottom border-light shadow-sm fixed-top" />
      <section className="container pt-5">
        <Row>
          <Sidebar />
          <Detail />
        </Row>
      </section>
      <Footer />
    </>
  );
};

export default page;
