import IconifyIcon from '@/components/IconifyIcon';
import {Metadata} from 'next';
import Link from 'next/link';
import PageTitle from './components/PageTitle';
import TextSession from './components/TextSession';
import Work from './components/Work';
import NavbarPage from "@/components/navbar/Navbar-page";
import Subscribe from "@/components/common/subscribe";
import Footer from "@/components/common/Footer";
import Description from "./components/Description";
import Portfolio from "./components/Portfolio";
import Faqs from "./components/Faqs";
import Package from "./components/package"

export const metadata: Metadata = {title: 'Digital Product UI/UX Design | McWIN iTECH'};

const Page = () => {
    return (
        <>
            <NavbarPage
                Headerclass="header navbar navbar-expand-lg bg-light navbar-sticky"
                headerSticky="navbar-stuck"
            />
            <nav className="container py-4 mb-md-2 mb-lg-5 mt-lg-3" aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                        <Link href="/index">
                            <IconifyIcon icon="bx:home-alt" className="fs-lg me-1"/>
                            Home
                        </Link>
                    </li>
                    <span className="d-flex align-items-center mx-2">
            <IconifyIcon icon="bx:chevrons-right"/>
          </span>
                    <li className="breadcrumb-item">
                        <Link href="/brand">Brand</Link>
                    </li>
                    <span className="d-flex align-items-center mx-2">
            <IconifyIcon icon="bx:chevrons-right"/>
          </span>
                    <li className="breadcrumb-item active" aria-current="page">
                        Digital Product UI/UX Design
                    </li>
                </ol>
            </nav>
            <PageTitle/>
            <Work/>
            <Description/>
            <Portfolio/>
            <TextSession/>
            <Faqs/>
            <Package/>
            <Subscribe/>
            <Footer/>
        </>
    );
};

export default Page;
