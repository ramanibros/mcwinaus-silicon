'use client';
import Link from 'next/link';
import React from 'react';
import { Breadcrumb, BreadcrumbItem, Nav } from 'react-bootstrap';
import IconifyIcon from './IconifyIcon';

type title = {
  subTitle: string;
};

const BreadcrumbTitle = ({ subTitle }: title) => {
  return (
    <Nav className="container mt-lg-4 pt-5" aria-label="breadcrumb">
      <Breadcrumb className="mb-0 pt-5">
        <BreadcrumbItem>
          <Link href="/index">
            <IconifyIcon icon="bx:home-alt" className="fs-lg me-1" />
            Home
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem className="active" aria-current="page">
          {subTitle}
        </BreadcrumbItem>
      </Breadcrumb>
    </Nav>
  );
};

export default BreadcrumbTitle;
