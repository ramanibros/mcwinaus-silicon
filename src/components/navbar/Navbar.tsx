'use client';
import Logo from '@/assets/img/mcwinItechLogoLight.png';
import Image, {StaticImageData} from 'next/image';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import {Button, Collapse, Offcanvas, OffcanvasBody, OffcanvasHeader} from 'react-bootstrap';
import IconifyIcon from '../IconifyIcon';
import ThemeToggle from '../ThemeToggle';
import {usePathname} from 'next/navigation';

import brandIcon from '@/assets/img/services/brand.png';
import growIcon from '@/assets/img/services/grow.png';
import buildIcon from '@/assets/img/services/build.png';
import scaleIcon from '@/assets/img/services/scale.png';

type DropdownItem = {
    label: string;
    href: string;
    badge?: string;
};

type DropdownLink = {
    label: string;
    href: string;
};

type DropdownSection = {
    title: string;
    icon: StaticImageData;
    url: string
    links: DropdownLink[];
};

type AccountLink = {
    label: string;
    href: string;
};

type DropdownColumn1 = DropdownItem[];
type DropdownColumn2 = DropdownSection[];

type NavClass = {
    Headerclass?: string;
    headerSticky?: string;
    isNavDark?: boolean;
};

const isParentActive = (links: { href: string }[], pathname: string) => {
    return links.some(link => pathname === link.href || pathname.startsWith(link.href + '/'));
};

const Navbar = ({
                    Headerclass = 'header navbar navbar-expand-lg bg-light shadow-sm',
                    headerSticky,
                    isNavDark,
                }: NavClass) => {
    const [isSticky, setIsSticky] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

    const pathname = usePathname();

    useEffect(() => {
        if (!headerSticky) return;
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [headerSticky]);

    const toggleMobileDropdown = (menu: string) => {
        setOpenMobileDropdown(openMobileDropdown === menu ? null : menu);
    };

    const pagesMenu: DropdownColumn2[] = [
        [
            {
                title: 'Brand',
                icon: brandIcon,
                url: '/brand',
                links: [
                    {label: 'Brand Strategy & Positioning', href: '/brand/brand-strategy-and-positioning'},
                    {label: 'Visual Identity & Logo Design', href: '/brand/visual-identity-logo-design'},
                    {label: 'Digital Product UI/UX Design', href: '/brand/digital-product-ui-ux-design'},
                    {label: 'Brand Implementation', href: '/brand/brand-implementation'},
                ],
            },
        ],
        [
            {
                title: 'Build',
                icon: buildIcon,
                url: '/build',
                links: [
                    {label: 'Websites', href: '/build/websites'},
                    {label: 'eCommerce', href: '/build/ecommerce'},
                    {label: 'Mobile Apps', href: '/build/mobile-apps'},
                    {label: 'Custom Software', href: '/build/custom-software'},
                ],
            },
        ],
        [
            {
                title: 'Grow',
                icon: growIcon,
                url: '/grow',
                links: [
                    {label: 'Search Engine Optimisation (SEO)', href: '/service-detail'},
                    {label: 'Social Media Marketing (SMM)', href: '/service-detail'},
                    {label: 'Search Engine Marketing (SEM)', href: '/service-detail'},
                    {label: 'Paid Marketing', href: '#'},
                ],
            },
        ],
        [
            {
                title: 'Scale',
                icon: scaleIcon,
                url: '/scale',
                links: [
                    {label: 'Integrations', href: '/service-detail'},
                    {label: 'Optimisation', href: '/service-detail'},
                    {label: '24/7 Support', href: '/service-detail'},
                    {label: 'Advanced Scale Services', href: '/service-detail'},
                ],
            },
        ],
    ];


    const allPagesLinks = pagesMenu.flat().flatMap(section => section.links);
    const isPagesActive = isParentActive(allPagesLinks, pathname);

    return (
        <header className={`${Headerclass} ${isSticky && headerSticky ? headerSticky : ''}`}>
            <div className="container px-3">
                <Link href="/home" className="navbar-brand pe-3">
                    <Image src={Logo} width={200} alt="Silicon"/>
                </Link>

                <Offcanvas
                    id="navbarNav"
                    placement="end"
                    responsive="xl"
                    show={showMenu}
                    onHide={() => {
                        setShowMenu(false);
                        setActiveDropdown(null);
                        setOpenMobileDropdown(null);
                    }}
                >
                    <OffcanvasHeader closeButton className="border-bottom">
                        <h5 className="offcanvas-title">Menu</h5>
                    </OffcanvasHeader>
                    <OffcanvasBody className="offcanvas-body">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className={`nav-item dropdown ${pathname === '/home' ? 'active' : ""}`}>
                                <Link href="/" className="nav-link">Home</Link>
                            </li>
                            <li className={`nav-item dropdown ${isPagesActive ? 'active' : ''}`}>
                                <button
                                    type="button"
                                    className="nav-link"
                                    onClick={() => toggleMobileDropdown('Services')}
                                    aria-expanded={openMobileDropdown === 'Services'}
                                >
                                  <span className="d-flex gap-1 align-items-center">
                                    Services
                                    <IconifyIcon icon="bx:chevron-down" fontSize={18}/>
                                  </span>
                                </button>
                                <Collapse in={openMobileDropdown === 'pages'}>
                                    <div className="dropdown-menu">
                                        <div className="d-lg-flex pt-lg-3">
                                            {pagesMenu.map((column, colIndex) => (
                                                <div key={colIndex} className="mega-dropdown-column">
                                                    {column.map((section, secIndex) => (
                                                        <div key={secIndex}>
                                                            {/*<div className="d-flex align-items-center"
                                                                 style={{paddingLeft: "12px"}}>
                                                                <Image
                                                                    style={{
                                                                        paddingRight: "5px",
                                                                        maxWidth: "100px",
                                                                        marginTop: "-2px"
                                                                    }}
                                                                    src={section.icon}
                                                                    alt={section.title}
                                                                    width={35}
                                                                    height={35}
                                                                    priority
                                                                />
                                                                <Link href={section.url} style={{ textDecoration: 'none' }}>
                                                                    <h4 className="mb-2">{section.title}</h4>
                                                                </Link>
                                                            </div>*/}
                                                            <Link href={section.url} style={{ textDecoration: 'none' }}>
                                                                <h4 className="mb-2" style={{paddingLeft: "12px"}}>{section.title}</h4>
                                                            </Link>
                                                            <div className="hr-indicator mb-2" style={{paddingLeft: "14px" }}/>
                                                            <ul className="list-unstyled mb-3">
                                                                {section.links.map((link, linkIndex) => (
                                                                    <li key={linkIndex}>
                                                                        <Link
                                                                            href={link.href}
                                                                            className={`dropdown-item py-1 ${pathname === link.href ? 'active' : ''
                                                                            }`}
                                                                            onClick={() => setShowMenu(false)}
                                                                        >
                                                                            {link.label}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Collapse>
                            </li>

                            <li className={`nav-item dropdown ${pathname === '/blog' ? 'active' : ""}`}>
                                <Link href="/blog" className="nav-link">Blog</Link>
                            </li>
                            <li className={`nav-item dropdown ${pathname === '/about' ? 'active' : ""}`}>
                                <Link href="/about" className="nav-link">About Us</Link>
                            </li>
                            <li className={`nav-item dropdown ${pathname === '/contact' ? 'active' : ""}`}>
                                <Link href="/contact" className="nav-link">Contact Us</Link>
                            </li>
                        </ul>
                    </OffcanvasBody>
                    <div className="offcanvas-header border-top">
                        <a
                            href="/contact"
                            className="btn btn-primary w-100"
                            rel="noopener"
                        >
                            <IconifyIcon icon="bx:cart" className="fs-4 lh-1 me-1"/>
                            &nbsp;Contact Now
                        </a>
                    </div>
                </Offcanvas>

                <ThemeToggle themeToggle={isNavDark ?? false}/>
                <button
                    type="button"
                    className="navbar-toggler"
                    aria-label="Toggle navigation"
                    onClick={() => setShowMenu(true)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Button
                    as="a"
                    href="/contact"
                    className="btn btn-primary btn-sm fs-sm rounded d-none d-lg-inline-flex"
                    rel="noopener"
                >
                    <IconifyIcon icon="bx:phone" className="fs-5 lh-1 me-1"/>
                    &nbsp;Contact Now
                </Button>
            </div>
        </header>
    );
};

export default Navbar;
