import React from 'react';
import appStoreLight from '@/assets/img/market/appstore-light.svg';
import appStoreDark from '@/assets/img/market/appstore-dark.svg';
import googlplayDark from '@/assets/img/market/googleplay-dark.svg';
import googlplayLight from '@/assets/img/market/googleplay-light.svg';
import logo from '@/assets/img/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import IconifyIcon from '@/components/IconifyIcon';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer bg-dark pt-5 pb-4 pb-lg-5" data-bs-theme="dark">
      <Container className="text-center pt-lg-3">
        <div className="navbar-brand justify-content-center text-dark mb-2 mb-lg-4">
          <Image src={logo} className="me-2" width="60" alt="Silicon" />
          <span className="fs-4">Silicon</span>
        </div>
        <ul className="nav justify-content-center pt-3 pb-4 pb-lg-5">
          <li className="nav-item">
            <Link href="#" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-link">
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-link">
              Overview
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-link">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-link">
              Contacts
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#" className="nav-link">
              Account
            </Link>
          </li>
        </ul>
        <div className="d-flex flex-column flex-sm-row justify-content-center">
          <Link href="#" className="btn btn-dark btn-lg px-3 py-2 me-sm-4 mb-3">
            <Image src={appStoreLight} className="light-mode-img" width="124" alt="App Store" />
            <Image src={appStoreDark} className="dark-mode-img" width="124" alt="App Store" />
          </Link>
          <Link href="#" className="btn btn-dark btn-lg px-3 py-2 mb-3">
            <Image src={googlplayLight} className="light-mode-img" width="139" alt="Google Play" />
            <Image src={googlplayDark} className="dark-mode-img" width="139" alt="Google Play" />
          </Link>
        </div>
        <div className="d-flex justify-content-center pt-4 mt-lg-3">
          <Link
            href="#"
            className="btn btn-icon btn-secondary btn-facebook mx-2"
            aria-label="Facebook"
          >
            <IconifyIcon icon="bxl:facebook" fontSize={20} />
          </Link>
          <Link
            href="#"
            className="btn btn-icon btn-secondary btn-instagram mx-2"
            aria-label="Instagram"
          >
            <IconifyIcon icon="bxl:instagram" fontSize={20} />
          </Link>
          <Link
            href="#"
            className="btn btn-icon btn-secondary btn-twitter mx-2"
            aria-label="Twitter"
          >
            <IconifyIcon icon="bxl:twitter" fontSize={20} />
          </Link>
          <Link
            href="#"
            className="btn btn-icon btn-secondary btn-youtube mx-2"
            aria-label="YouTube"
          >
            <IconifyIcon icon="bxl:youtube" fontSize={20} />
          </Link>
        </div>
        <p className="nav d-block fs-sm text-center pt-5 mt-lg-4 mb-0">
          <span className="text-light opacity-60">&copy; All rights reserved. Made by </span>
          <Link
            className="nav-link d-inline-block p-0"
            href="https://coderthemes.com/"
            target="_blank"
            rel="noopener"
          >
            Coderthemes
          </Link>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
