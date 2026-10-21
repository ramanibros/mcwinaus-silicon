import IconifyIcon from '@/components/IconifyIcon';
import Link from 'next/link';
import PostContent from './components/PostContent';
import PostTitle from './components/PostTitle';
import NavbarPage from "@/components/navbar/Navbar-page";
import Subscribe from "@/components/common/subscribe";
import Footer from "@/components/common/Footer";

export const metadata = {
    metadataBase: new URL("https://www.mcwinitech.com.au/"),
    title: "Website Redesign Perth — When to Rebuild vs Improve | McWIN iTECH",
    description: "Not sure if your Perth website needs a rebuild or just improvements? Learn the signs, costs, and decision framework.",
    keywords: [
        "website redesign Perth",
        "website rebuild Perth",
        "website refresh Perth",
        "redesign vs rebuild",
        "website upgrade Perth",
        "new website Perth",
        "website modernisation Perth",
    ],
    alternates: {
        canonical: "https://www.mcwinitech.com.au/blog/website-redesign-perth-when-to-rebuild-vs-improve",
    },
    openGraph: {
        type: "article",
        locale: "en_AU",
        url: "https://www.mcwinitech.com.au/blog/website-redesign-perth-when-to-rebuild-vs-improve",
        siteName: "McWIN iTECH",
        title: "Website Redesign Perth — When to Rebuild vs Improve",
        description: "Not sure if your Perth website needs a rebuild or just improvements? Learn the signs, costs, and decision framework.",
        images: [
            {
                url: "https://www.mcwinitech.com.au/images/McWIN_iTECH.png",
                width: 1200,
                height: 630,
                alt: "McWIN iTECH - Digital Growth Services Perth WA",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@mcwinitech",
        creator: "@mcwinitech",
        title: "Website Redesign Perth — When to Rebuild vs Improve",
        description: "Not sure if your Perth website needs a rebuild or just improvements? Learn the signs, costs, and decision framework.",
        images: ["https://www.mcwinitech.com.au/images/McWIN_iTECH.png"],
    },
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
                            Website Redesign Perth — When to Rebuild vs Improve
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