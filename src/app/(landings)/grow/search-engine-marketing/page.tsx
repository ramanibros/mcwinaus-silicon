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

        title: "Search Engine Marketing Perth WA – #1 SEM & PPC (2026) | McWIN iTECH ",
        description:
            "Search engine marketing in Perth WA by McWIN iTECH. Expert SEM & PPC services to boost visibility, traffic & leads with trusted strategies for growth in 2026.",
        keywords: [
                "Software Development Services",
                "Custom Software Development",
                "Web Application Development",
                "Mobile App Development",
                "Full-Stack Development",
        ],

    alternates: {
        canonical: "https://www.mcwinitech.com.au/grow/search-engine-marketing/",
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
                        <Link href="/grow">Grow</Link>
                    </li>
                    <span className="d-flex align-items-center mx-2">
            <IconifyIcon icon="bx:chevrons-right"/>
          </span>
                    <li className="breadcrumb-item active" aria-current="page">
                        Search Engine Marketing
                    </li>
                </ol>
            </nav>
            <PageTitle/>
            <Work/>
            <Description/>
            <Portfolio/>
            <TextSession/>
            <Faqs/>
            {/*<Package/>*/}
            <Subscribe/>
            <Footer/>
        </>
    );
};

export default Page;
