import IconifyIcon from '@/components/IconifyIcon';
import Link from 'next/link';
import PostContent from './components/PostContent';
import PostTitle from './components/PostTitle';
import NavbarPage from "@/components/navbar/Navbar-page";
import Subscribe from "@/components/common/subscribe";
import Footer from "@/components/common/Footer";

export const metadata = {
    metadataBase: new URL("https://www.mcwinitech.com.au/"),

    title: "Web Development Company in Gold Coast — What to Check Before Hiring | McWIN iTECH",
    description:
        "Hiring a web development company on the Gold Coast? Learn what to check for portfolio, SEO, ownership, and support before signing a contract.",
    keywords: [
        "web development company Gold Coast",
        "web design Gold Coast",
        "website development Gold Coast",
        "Gold Coast web developer",
        "eCommerce development Gold Coast",
        "website cost Gold Coast",
        "Gold Coast web design agency",
    ],

    alternates: {
        canonical: "https://www.mcwinitech.com.au/blog/web-development-company-gold-coast-what-to-check-before-hiring",
    },
    openGraph: {
        type: "article",
        locale: "en_AU",
        url: "https://www.mcwinitech.com.au/blog/web-development-company-gold-coast-what-to-check-before-hiring",
        siteName: "McWIN iTECH",
        title: "Web Development Company in Gold Coast — What to Check Before Hiring",
        description: "Hiring a web development company on the Gold Coast? Learn what to check for portfolio, SEO, ownership, and support before signing a contract.",
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
        title: "Web Development Company in Gold Coast — What to Check Before Hiring",
        description: "Hiring a web development company on the Gold Coast? Learn what to check for portfolio, SEO, ownership, and support before signing a contract.",
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
                            Web Development Company in Gold Coast — What to Check Before Hiring
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