import IconifyIcon from '@/components/IconifyIcon';
import Link from 'next/link';
import PostContent from './components/PostContent';
import PostTitle from './components/PostTitle';
import NavbarPage from "@/components/navbar/Navbar-page";
import Subscribe from "@/components/common/subscribe";
import Footer from "@/components/common/Footer";

export const metadata = {
    metadataBase: new URL("https://www.mcwinitech.com.au/"),

    title: "How Much Should a Small Business in Perth Spend on Google Ads Per Month? | McWIN iTECH"
,
    description:
        "Wondering how much to budget for Google Ads in Perth? Get realistic cost breakdowns, industry benchmarks, and tips to maximise ROI for your small business.",
    keywords: [
          "Google Ads budget Perth",
    "how much to spend on Google Ads Perth",
    "Google Ads cost Perth",
    "small business Google Ads Perth",
    "Perth Google Ads management",
    "cost per click Perth",
    "Google Ads ROI Perth",
    ],

    alternates: {
        canonical: "https://www.mcwinitech.com.au/blog/how-much-should-small-business-perth-spend-google-ads-per-month",
    },

    openGraph: {
        type: "website",
        locale: "en_AU",
        url: "https://www.mcwinitech.com.au/blog/how-much-should-small-business-perth-spend-google-ads-per-month",
        siteName: "McWIN iTECH",
        title: "Wondering how much to budget for Google Ads in Perth? Get realistic cost breakdowns, industry benchmarks, and tips to maximise ROI for your small business.",
        description: "Scale your business with McWIN iTECH's top Perth WA growth services. Expert strategies, faster results & measurable success for business growth in 2026.",
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
        title: "How Much Should a Small Business in Perth Spend on Google Ads Per Month? | McWIN iTECH",
        description: "Wondering how much to budget for Google Ads in Perth? Get realistic cost breakdowns, industry benchmarks, and tips to maximise ROI for your small business.",
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
                            How Much Should a Small Business in Perth Spend on Google Ads Per Month?
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
