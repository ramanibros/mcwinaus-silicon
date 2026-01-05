import IconifyIcon from '@/components/IconifyIcon';
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';
import Link from 'next/link';
import Blog from './components/Blog';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Hero from './components/Hero';
import PostComment from './components/PostComment';
import PostContent from './components/PostContent';
import PostTitle from './components/PostTitle';

export const metadata: Metadata = { title: 'Silicon | Blog Single post' };

const Page = () => {
  return (
    <>
      <Navbar
        Headerclass="header navbar navbar-expand-lg bg-light navbar-sticky"
        headerSticky="navbar-stuck"
      />
      <nav className="container pt-4 mt-lg-3" aria-label="breadcrumb">
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
              <Link href="/blog-list-with-sidebar">Blog</Link>
            </li>
            <span className="d-flex align-items-center mx-2">
              <IconifyIcon icon="bx:chevrons-right" />
            </span>
            <li className="breadcrumb-item active" aria-current="page">
              Single Post
            </li>
          </ol>
        </nav>
      </nav>
      <PostTitle />
      <Hero />
      <PostContent />
      <PostComment />
      <Cta />
      <Blog />
      <Footer />
    </>
  );
};

export default Page;
