import IconifyIcon from '@/components/IconifyIcon';
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';
import Link from 'next/link';
import Blog from './components/Blog';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Podcast from './components/Podcast';
import PostComment from './components/PostComment';
import PostContent from './components/PostContent';

export const metadata: Metadata = { title: 'Silicon | Blog single  Podcast' };

const Page = () => {
  return (
    <>
      <Navbar
        Headerclass="header navbar navbar-expand-lg bg-light navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <nav className="container pt-4 mt-lg-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link href="/index">
              <IconifyIcon icon="bx:home-alt" className="fs-lg me-1" />
              Home
            </Link>
          </li>
          <span className="d-flex align-items-center mx-2">
            <IconifyIcon icon="bx:chevrons-right" />
          </span>
          <li className="breadcrumb-item">
            <Link href="/blog-grid-with-sidebar">Blog</Link>
          </li>
          <span className="d-flex align-items-center mx-2">
            <IconifyIcon icon="bx:chevrons-right" />
          </span>
          <li className="breadcrumb-item active" aria-current="page">
            Podcast
          </li>
        </ol>
      </nav>

      <Podcast />
      <PostContent />
      <PostComment />
      <Cta />
      <Blog />
      <Footer />
    </>
  );
};

export default Page;
