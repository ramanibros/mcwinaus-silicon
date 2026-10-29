import IconifyIcon from '@/components/IconifyIcon';
import Link from 'next/link';
import PostContent from './components/PostContent';
import PostTitle from './components/PostTitle';
import NavbarPage from "@/components/navbar/Navbar-page";
import Subscribe from "@/components/common/subscribe";
import Footer from "@/components/common/Footer";

export const metadata = {
    metadataBase: new URL("https://www.mcwinitech.com.au/"),

    title: "How to Get High-Quality Backlinks in Perth (Without Getting Penalised) | McWIN iTECH",
    description:
        "Learn ethical link building strategies for Perth businesses. Discover tactics that work in 2026 and how to avoid Google penalties.",
    keywords: [
        "link building Perth",
        "backlinks Perth",
        "high quality backlinks",
        "ethical link building",
        "local SEO Perth",
        "digital PR Perth",
        "Google penalties",
    ],

    alternates: {
        canonical: "https://www.mcwinitech.com.au/blog/how-to-get-high-quality-backlinks-perth-without-penalties",
    },
    openGraph: {
        type: "article",
        locale: "en_AU",
        url: "https://www.mcwinitech.com.au/blog/how-to-get-high-quality-backlinks-perth-without-penalties",
        siteName: "McWIN iTECH",
        title: "How to Get High-Quality Backlinks in Perth (Without Getting Penalised)",
        description: "Learn ethical link building strategies for Perth businesses. Discover tactics that work in 2026 and how to avoid Google penalties.",
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
        title: "How to Get High-Quality Backlinks in Perth (Without Getting Penalised)",
        description: "Learn ethical link building strategies for Perth businesses. Discover tactics that work in 2026 and how to avoid Google penalties.",
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
                            How to Get High-Quality Backlinks in Perth (Without Getting Penalised)
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