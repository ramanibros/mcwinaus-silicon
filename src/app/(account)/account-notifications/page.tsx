import React from 'react';
import Sidebar from '../sidebar-footer/Sidebar';
import { Row } from 'react-bootstrap';
import Notification from './components/Notification';
import Navbar from '@/components/navbar/Navbar';
import Footer from '../sidebar-footer/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Silicon |Account Notification ' };

const Page = () => {
  return (
    <>
      <Navbar Headerclass="header navbar navbar-expand-lg bg-light border-bottom border-light shadow-sm fixed-top" />
      <section className="container pt-5">
        <Row>
          <Sidebar />
          <Notification />
        </Row>
      </section>
      <Footer />
    </>
  );
};

export default Page;
