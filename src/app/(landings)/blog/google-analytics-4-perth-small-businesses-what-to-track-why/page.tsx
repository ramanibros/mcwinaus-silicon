import IconifyIcon from '@/components/IconifyIcon';
import Link from 'next/link';
import PostContent from './components/PostContent';
import PostTitle from './components/PostTitle';
import NavbarPage from "@/components/navbar/Navbar-page";
import Subscribe from "@/components/common/subscribe";
import Footer from "@/components/common/Footer";

export const metadata = {
    metadataBase: new URL("https://www.mcwinitech.com.au/"),

    title: "Google Analytics 4 for Perth Small Businesses — What to Track and Why | McWIN iTECH",
    description:
        "Learn what to track in Google Analytics 4 for your Perth business. Focus on key events, engaged sessions, and traffic sources that actually drive revenue.",
    keywords: [
        "Google Analytics 4 Perth",
        "GA4 setup Perth",
        "GA4 tracking Perth",
        "Google Analytics Perth",
        "GA4 key events",
        "website analytics Perth",
        "GA4 small business",
    ],

    alternates: {
        canonical: "https://www.mcwinitech.com.au/blog/google-analytics-4-perth-small-businesses-what-to-track-why",
    },
    openGraph: {
        type: "article",
        locale: "en_AU",
        url: "https://www.mcwinitech.com.au/blog/google-analytics-4-perth-small-businesses-what-to-track-why",
        siteName: "McWIN iTECH",
        title: "Google Analytics 4 for Perth Small Businesses — What to Track and Why",
        description: "Learn what to track in Google Analytics 4 for your Perth business. Focus on key events, engaged sessions, and traffic sources that actually drive revenue.",
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
        title: "Google Analytics 4 for Perth Small Businesses — What to Track and Why",
        description: "Learn what to track in Google Analytics 4 for your Perth business. Focus on key events, engaged sessions, and traffic sources that actually drive revenue.",
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
                            Google Analytics 4 for Perth Small Businesses — What to Track and Why
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