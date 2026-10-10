import IconifyIcon from '@/components/IconifyIcon';
import Link from 'next/link';
import PostContent from './components/PostContent';
import PostTitle from './components/PostTitle';
import NavbarPage from "@/components/navbar/Navbar-page";
import Subscribe from "@/components/common/subscribe";
import Footer from "@/components/common/Footer";

export const metadata = {
    metadataBase: new URL("https://www.mcwinitech.com.au/"),

    title: "Google Business Profile Optimisation Perth — Complete Guide | McWIN iTECH",
    description:
        "Learn how to optimise your Google Business Profile for Perth searches. Step-by-step guide to rankings, reviews, and local visibility.",
    keywords: [
        "Google Business Profile Perth",
        "Google My Business Perth",
        "GBP optimisation Perth",
        "local business listing Perth",
        "Google Maps ranking Perth",
        "local SEO Perth",
        "business profile optimisation Perth",
    ],

    alternates: {
        canonical: "https://www.mcwinitech.com.au/blog/google-business-profile-optimisation-perth-complete-guide",
    },

    openGraph: {
        type: "article",
        locale: "en_AU",
        url: "https://www.mcwinitech.com.au/blog/google-business-profile-optimisation-perth-complete-guide",
        siteName: "McWIN iTECH",
        title: "Google Business Profile Optimisation Perth — Complete Guide",
        description: "Learn how to optimise your Google Business Profile for Perth searches. Step-by-step guide to rankings, reviews, and local visibility.",
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
        title: "Google Business Profile Optimisation Perth — Complete Guide",
        description: "Learn how to optimise your Google Business Profile for Perth searches. Step-by-step guide to rankings, reviews, and local visibility.",
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
                            Google Business Profile Optimisation Perth — Complete Guide
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