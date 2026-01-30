import IconifyIcon from '@/components/IconifyIcon';
import Link from 'next/link';
import PageTitle from './components/PageTitle';
import TextSession from './components/TextSession';
import Work from './components/Work';
import NavbarPage from "@/components/navbar/Navbar-page";
import Subscribe from "@/components/common/subscribe";
import Footer from "@/components/common/Footer";
import Description from "./components/Description";
import Faqs from "./components/Faqs";
import Portfolio from "@/components/common/Portfolio";

export const metadata = {
    metadataBase: new URL("https://www.mcwinitech.com.au/"),

    title: "Accelerate business growth in Perth | Expert IT Development & Digital Marketing Services",
    description:
        "Drive your business to success in Perth with our expert IT development and digital marketing services. We create customized strategies to optimize your online presence, engage your target audience, and drive significant and sustainable business growth. Partner with us today to unleash your full potential and achieve remarkable success in Perth.",
    keywords: [
        "Software Development Services",
        "Custom Software Development",
        "Web Application Development",
        "Mobile App Development",
        "Full-Stack Development",
    ],

    alternates: {
        canonical: "https://www.mcwinitech.com.au/brand/brand-strategy-and-positioning/",
    }
};
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
                        Brand Strategy & Positioning
                    </li>
                </ol>
            </nav>
            <PageTitle/>
            <Work/>
            <Description/>
            <Portfolio/>
            <TextSession/>
            <Faqs/>
            {/* <Package/>*/}
            <Subscribe/>
            <Footer/>
        </>
    );
};

export default Page;
