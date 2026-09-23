import IconifyIcon from '@/components/IconifyIcon';
import Link from 'next/link';
import PostContent from './components/PostContent';
import PostTitle from './components/PostTitle';
import NavbarPage from "@/components/navbar/Navbar-page";
import Subscribe from "@/components/common/subscribe";
import Footer from "@/components/common/Footer";

export const metadata = {
    metadataBase: new URL("https://www.mcwinitech.com.au/"),

    title: "Web Development Company Brisbane: What to Check | McWIN iTECH",

    description:
        "Choosing a web development company in Brisbane? Learn what to check before hiring — portfolio, pricing, SEO, support, and ownership terms explained.",

    keywords: [
        "web development company Brisbane",
        "web development Brisbane",
        "Brisbane web developers",
        "website development cost Brisbane",
        "custom web development Brisbane",
        "Brisbane web design agency",
        "hire web developer Brisbane",
    ],

    alternates: {
        canonical: "https://www.mcwinitech.com.au/blog/web-development-company-brisbane",
    },

    openGraph: {
        type: "article",
        locale: "en_AU",
        url: "https://www.mcwinitech.com.au/blog/web-development-company-brisbane",
        siteName: "McWIN iTECH",
        title: "Web Development Company in Brisbane — What to Check Before Hiring",
        description: "Hiring a web development company in Brisbane? Discover the key checks for portfolio, pricing, SEO, support, and ownership before you sign.",
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
        title: "Web Development Company in Brisbane — What to Check Before Hiring",
        description: "Hiring a Brisbane web development company? Here are the essential checks for portfolio, SEO, pricing, support, and ownership.",
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
                            Web Development Company in Brisbane — What to Check Before Hiring
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