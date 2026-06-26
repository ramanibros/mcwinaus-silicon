import IconifyIcon from '@/components/IconifyIcon';
import Link from 'next/link';
import PostContent from './components/PostContent';
import PostTitle from './components/PostTitle';
import NavbarPage from "@/components/navbar/Navbar-page";
import Subscribe from "@/components/common/subscribe";
import Footer from "@/components/common/Footer";

export const metadata = {
    metadataBase: new URL("https://www.mcwinitech.com.au/"),

    title: "Website Downtime Perth: Prevention Guide for Business Owners | McWIN iTECH"
,
    description:
        "Learn how to prevent website downtime for your Perth business. Discover common causes, emergency response steps, and proactive maintenance strategies to stay online.",
    keywords: [
        "Software Development Services",
        "Custom Software Development",
        "Web Application Development",
        "Mobile App Development",
        "Full-Stack Development",
    ],

    alternates: {
        canonical: "https://www.mcwinitech.com.au/blog/website-downtime-perth-prevention-guide-business-owners",
    },

    openGraph: {
        type: "website",
        locale: "en_AU",
        url: "https://www.mcwinitech.com.au/blog/website-downtime-perth-prevention-guide-business-owners",
        siteName: "McWIN iTECH",
        title: "Shopify vs WordPress Perth: Best Platform for eCommerce? | McWIN iTECH",
        description: " Shopify vs WordPress for Perth eCommerce: Compare costs, SEO, flexibility, and scalability. Find the best platform for your online store in 2026.",
        images: [
            {
                url: "https://www.mcwinitech.com.au/images/McWIN_iTECH.png",
                width: 1200,
                height: 630,
                alt: "McWIN iTECH - Digital Growth Services Perth WA",
            },
        ],
    },

    // Twitter Card Tags
    twitter: {
        card: "summary_large_image",
        site: "@mcwinitech",
        creator: "@mcwinitech",
        title: "Shopify vs WordPress Perth: Best Platform for eCommerce? | McWIN iTECH",
        description: "Shopify vs WordPress for Perth eCommerce: Compare costs, SEO, flexibility, and scalability. Find the best platform for your online store in 2026.",
        images: ["https://www.mcwinitech.com.au/images/McWIN_iTECH.png"],
    },

    // Additional Meta Tags
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

};

const Page = () => {
    return (
        <>
            <NavbarPage
                Headerclass="header navbar navbar-expand-lg bg-light navbar-sticky"
                headerSticky="navbar-stuck"
            />
            <nav className="container pt-4 mt-lg-3" aria-label="breadcrumb">
                <nav className="container pt-4 mt-lg-3" aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                            <Link href="/">
                                <IconifyIcon icon="bx:home-alt" className="fs-lg me-1"/>
                                Home
                            </Link>
                        </li>
                        <span className="d-flex align-items-center mx-2">
              <IconifyIcon icon="bx:chevrons-right"/>
            </span>
                        <li className="breadcrumb-item">
                            <Link href="/blog">Blog</Link>
                        </li>
                        <span className="d-flex align-items-center mx-2">
              <IconifyIcon icon="bx:chevrons-right"/>
            </span>
                        <li className="breadcrumb-item active" aria-current="page">
Website Downtime Perth: Prevention Guide for Business Owners | McWIN iTECH
                        </li>
                    </ol>
                </nav>
            </nav>
            <PostTitle/>
            <PostContent/>
            <Subscribe/>
            <Footer/>
        </>
    );
};

export default Page;
