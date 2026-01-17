import IconifyIcon from '@/components/IconifyIcon';
import {Metadata} from 'next';
import Link from 'next/link';
import PageTitle from './components/PageTitle';
import TextSession from './components/TextSession';
import Work from './components/Work';
import NavbarPage from "@/components/navbar/Navbar-page";
import Portfolio from "@/app/(landings)/service-detail/components/Portfolio";
import Pricing from "@/components/common/Pricing";
import Footer from "@/components/common/Footer";
import Faqs from "@/app/(landings)/service-detail/components/Faqs";
import Description from "@/app/(landings)/service-detail/components/Description";
import Package from "@/app/(landings)/service-detail/components/package";

export const metadata: Metadata = {title: 'Custom Software | McWIN iTECH'};

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
                        <Link href="/build">Build</Link>
                    </li>
                    <span className="d-flex align-items-center mx-2">
            <IconifyIcon icon="bx:chevrons-right"/>
          </span>
                    <li className="breadcrumb-item active" aria-current="page">
                        Custom Software
                    </li>
                </ol>
            </nav>
            <PageTitle/>
            <Work/>
            {/*<Offer/>*/}
            <Description/>
            <Portfolio/>
            {/*<HowWeWork/>*/}
            <TextSession/>
            <Faqs/>
            <Package/>
            <Pricing/>
            <Footer/>
        </>
    );
};

export default Page;
