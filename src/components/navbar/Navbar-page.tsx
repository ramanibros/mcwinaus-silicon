'use client';
import Logo from '@/assets/img/mcwinItechLogo.png';
import LogoLight from '@/assets/img/mcwinItechLogoLight.png';
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
    url: string;
    links: DropdownLink[];
};

type AccountLink = {
    label: string;
    href: string;
};

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
    const [activeTab, setActiveTab] = useState<string>('Brand');
    const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
    const [expandedAccordions, setExpandedAccordions] = useState<{[key: string]: boolean}>({
        'Brand': false,
        'Build': false,
        'Grow': false,
        'Scale': false
    });

    const pathname = usePathname();

    useEffect(() => {
        if (!headerSticky) return;
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [headerSticky]);

    // Determine active tab based on current path
    useEffect(() => {
        const currentSection = pagesMenu.find(section =>
            pathname === section.url || pathname.startsWith(section.url + '/')
        );
        if (currentSection) {
            setActiveTab(currentSection.title);
        }
    }, [pathname]);

    const toggleMobileDropdown = (menu: string) => {
        setOpenMobileDropdown(openMobileDropdown === menu ? null : menu);
    };

    const toggleAccordion = (sectionTitle: string) => {
        setExpandedAccordions(prev => ({
            ...prev,
            [sectionTitle]: !prev[sectionTitle]
        }));
    };

    const pagesMenu: DropdownSection[] = [
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
        {
            title: 'Grow',
            icon: growIcon,
            url: '/grow',
            links: [
                {label: 'Search Engine Optimisation (SEO)', href: '/grow/search-engine-optimisation'},
                {label: 'Social Media Marketing (SMM)', href: '/grow/social-media-marketing'},
                {label: 'Search Engine Marketing (SEM)', href: '/grow/search-engine-marketing'},
                {label: 'Paid Marketing', href: '/grow/paid-marketing'},
            ],
        },
        {
            title: 'Scale',
            icon: scaleIcon,
            url: '/scale',
            links: [
                {label: 'Integrations', href: '#'},
                {label: 'Optimisation', href: '#'},
                {label: '24/7 Support', href: '#'},
                {label: 'Advanced Scale Services', href: '#'},
            ],
        },
    ];

    const allPagesLinks = pagesMenu.flatMap(section => section.links);
    const isPagesActive = isParentActive(allPagesLinks, pathname);

    return (
        <>
            <style jsx global>{`
                /* Hide Bootstrap dropdown arrow */
                .dropdown-toggle::after {
                    display: none !important;
                }
                
                /* Vertical Tabs Mega Menu Styles */
                .mega-dropdown-menu {
                    width: 625px;
                    max-width: 90vw;
                    padding: 0 !important;
                    margin-top: 0.5rem !important;
                    border: none;
                    border-radius: 12px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                    left: 50% !important;
                    transform: translateX(-50%) !important;
                }
                
                @media (min-width: 992px) {
                    .dropdown-mega:hover .mega-dropdown-menu {
                        display: block !important;
                    }
                }
                
                .vertical-tabs-wrapper {
                    display: flex;
                    
                }
                
                .vertical-tabs-nav {
                    width: 250px;
                    padding: 1.5rem;
                    background: #f8f9fa;
                    border-right: 1px solid #eee;
                }
                
                .vertical-tab-btn {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    padding: 12px 16px;
                    margin-bottom: 8px;
                    border: none;
                    background: transparent;
                    border-radius: 8px;
                    text-align: left;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }
                
                .vertical-tab-btn:hover {
                    background: rgba(0, 0, 0, 0.05);
                }
                
                .vertical-tab-btn.active {
                    background: #0d6efd;
                    color: white;
                    box-shadow: 0 2px 8px rgba(13, 110, 253, 0.3);
                }
                
                .vertical-tab-btn.active .tab-icon img {
                    filter: brightness(0) invert(1);
                }
                
                .tab-icon {
                    width: 32px;
                    height: 32px;
                    margin-right: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .vertical-tabs-content {
                    flex: 1;
                    padding: 1.5rem;
                }
                
                .tab-pane {
                    animation: fadeIn 0.3s ease;
                }
                
                .tab-pane.active {
                    display: block;
                }
                
                .tab-pane:not(.active) {
                    display: none;
                }
                
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .hr-indicator {
                    height: 3px;
                    width: 50px;
                    background: linear-gradient(90deg, #0d6efd, transparent);
                    border-radius: 2px;
                    margin: 1rem 0;
                }
                
                .service-link-item {
                    padding: 8px 12px;
                    margin-bottom: 4px;
                    border-radius: 6px;
                    transition: all 0.2s ease;
                    display: block;
                    text-decoration: none;
                }
                
                .service-link-item:hover {
                    background: #f8f9fa;
                }
                
                .service-link-item.active {
                    background: #e7f1ff;
                    color: #0d6efd;
                }
                
                /* Mobile Accordion Styles */
                .accordion-mobile {
                    display: none;
                }
                
                .accordion-item {
                    border: 1px solid rgba(0,0,0,.125);
                    border-radius: 8px;
                    margin-bottom: 10px;
                    overflow: hidden;
                }
                
                .accordion-header {
                    margin: 0;
                }
                
                .accordion-button {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    padding: 1rem 1.25rem;
                    font-size: 1rem;
                    color: #212529;
                    text-align: left;
                    background-color: #f8f9fa;
                    border: 0;
                    border-radius: 0;
                    overflow-anchor: none;
                    transition: all 0.3s ease;
                }
                
                .accordion-button:not(.collapsed) {
                    color: #0d6efd;
                    background-color: #e7f1ff;
                    box-shadow: inset 0 -1px 0 rgba(0,0,0,.125);
                }
                
                .accordion-button::after {
                    flex-shrink: 0;
                    width: 1.25rem;
                    height: 1.25rem;
                    margin-left: auto;
                    content: "";
                    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
                    background-repeat: no-repeat;
                    background-size: 1.25rem;
                    transition: transform .2s ease-in-out;
                }
                
                .accordion-button:not(.collapsed)::after {
                    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230d6efd'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
                    transform: rotate(-180deg);
                }
                
                .accordion-body {
                    padding: 1rem 1.25rem;
                    background: white;
                }
                
                .accordion-link {
                    display: block;
                    padding: 0.5rem 1rem;
                    color: #495057;
                    text-decoration: none;
                    border-radius: 4px;
                    transition: all 0.2s ease;
                }
                
                .accordion-link:hover {
                    background: #f8f9fa;
                    color: #0d6efd;
                }
                
                .accordion-link.active {
                    background: #e7f1ff;
                    color: #0d6efd;
                    font-weight: 500;
                }
                
                /* Mobile Styles */
                @media (max-width: 991.98px) {
                    .mega-dropdown-menu {
                        display: none !important;
                    }
                    
                    .accordion-mobile {
                        display: block;
                        width: 100%;
                    }
                    
                    .vertical-tabs-wrapper {
                        display: none;
                    }
                }
                
                /* Desktop Styles */
                @media (min-width: 992px) {
                    .accordion-mobile {
                        display: none !important;
                    }
                }
                
                /* Dark Mode */
                [data-bs-theme="dark"] {
                    .mega-dropdown-menu {
                        background: #2d3748;
                        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
                    }
                    
                    .vertical-tabs-nav {
                        background: #1a202c;
                        border-right-color: #4a5568;
                    }
                    
                    .vertical-tab-btn:hover:not(.active) {
                        background: rgba(255, 255, 255, 0.05);
                    }
                    
                    .service-link-item:hover {
                        background: #2d3748;
                    }
                    
                    .service-link-item.active {
                        background: #2d4369;
                    }
                    
                    .accordion-item {
                        border-color: #4a5568;
                    }
                    
                    .accordion-button {
                        background-color: #2d3748;
                        color: #e2e8f0;
                    }
                    
                    .accordion-button:not(.collapsed) {
                        color: #63b3ed;
                        background-color: #2d4369;
                    }
                    
                    .accordion-body {
                        background: #2d3748;
                    }
                    
                    .accordion-link {
                        color: #cbd5e0;
                    }
                    
                    .accordion-link:hover {
                        background: #4a5568;
                        color: #63b3ed;
                    }
                    
                    .accordion-link.active {
                        background: #2d4369;
                        color: #63b3ed;
                    }
                }
            `}</style>

            <header className={`${Headerclass} ${isSticky && headerSticky ? headerSticky : ''}`}>
                <div className="container px-3">
                    <Link href="/home" className="navbar-brand pe-3 d-dark-mode-none d-block">
                        <Image src={Logo} width={200} alt="Silicon"/>
                    </Link>

                    <Link href="/home" className="navbar-brand pe-3 d-dark-mode-block d-none">
                        <Image src={LogoLight} width={200} alt="Silicon"/>
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
                            // Reset all accordions when closing mobile menu
                            setExpandedAccordions({
                                'Brand': false,
                                'Build': false,
                                'Grow': false,
                                'Scale': false
                            });
                        }}
                    >
                        <OffcanvasHeader closeButton className="border-bottom">
                            <h5 className="offcanvas-title">Menu</h5>
                        </OffcanvasHeader>
                        <OffcanvasBody className="offcanvas-body">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className={`nav-item ${pathname === '/' ? 'active' : ""}`}>
                                    <Link href="/" className="nav-link">Home</Link>
                                </li>

                                {/* Services Mega Menu */}
                                <li className={`nav-item dropdown dropdown-mega position-relative ${isPagesActive ? 'active' : ''}`}
                                    onMouseEnter={() => setActiveDropdown('Services')}
                                    onMouseLeave={() => setActiveDropdown(null)}>
                                    <button
                                        type="button"
                                        className="nav-link dropdown-toggle"
                                        onClick={() => toggleMobileDropdown('Services')}
                                        aria-expanded={openMobileDropdown === 'Services'}
                                    >
                                        <span className="d-flex gap-1 align-items-center">
                                            Services
                                            <IconifyIcon icon="bx:chevron-down" fontSize={18}/>
                                        </span>
                                    </button>

                                    {/* Desktop Mega Menu - Dropdown with Vertical Tabs */}
                                    <div className={`dropdown-menu mega-dropdown-menu border-0 ${activeDropdown === 'Services' ? 'show' : ''}`}
                                         style={{display: activeDropdown === 'Services' ? 'block' : 'none'}}>
                                        <div className="vertical-tabs-wrapper">
                                            <div className="vertical-tabs-nav">
                                                {pagesMenu.map((section) => (
                                                    <button
                                                        key={section.title}
                                                        className={`vertical-tab-btn ${activeTab === section.title ? 'active' : ''}`}
                                                        onClick={() => setActiveTab(section.title)}
                                                    >
                                                        <div className="tab-icon">
                                                            <Image
                                                                src={section.icon}
                                                                alt={section.title}
                                                                width={24}
                                                                height={24}
                                                                style={{objectFit: 'contain'}}
                                                            />
                                                        </div>
                                                        <span className="fw-semibold">{section.title}</span>
                                                    </button>
                                                ))}
                                            </div>

                                            <div className="vertical-tabs-content">
                                                {pagesMenu.map((section) => (
                                                    <div
                                                        key={section.title}
                                                        className={`tab-pane ${activeTab === section.title ? 'active' : ''}`}
                                                    >
                                                        <div className="d-flex align-items-center mb-3">
                                                            <div className="me-3">
                                                                <Image
                                                                    src={section.icon}
                                                                    alt={section.title}
                                                                    width={40}
                                                                    height={40}
                                                                    style={{objectFit: 'contain'}}
                                                                />
                                                            </div>
                                                            <div>

                                                                <Link
                                                                    href={section.url}
                                                                    className="text-primary text-decoration-none small"
                                                                    onClick={() => setShowMenu(false)}
                                                                >
                                                                    <h4 className="mb-1">{section.title}</h4>
                                                                </Link>
                                                            </div>
                                                        </div>

                                                        <div className="hr-indicator"></div>

                                                        <div className="service-links">
                                                            {section.links.map((link, index) => (
                                                                <Link
                                                                    key={index}
                                                                    href={link.href}
                                                                    className={`service-link-item ${pathname === link.href ? 'active text-primary' : 'text-dark'}`}
                                                                    onClick={() => setShowMenu(false)}
                                                                >
                                                                    <div className="d-flex align-items-center">
                                                                        <IconifyIcon
                                                                            icon="bx:chevron-right"
                                                                            fontSize={16}
                                                                            className="me-2"
                                                                        />
                                                                        <span>{link.label}</span>
                                                                    </div>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mobile Accordion - For Offcanvas */}
                                    <div className="accordion-mobile">
                                        <Collapse in={openMobileDropdown === 'Services'}>
                                            <div className="mt-2">
                                                <div className="accordion" id="servicesAccordion">
                                                    {pagesMenu.map((section, index) => (
                                                        <div key={section.title} className="accordion-item">
                                                            <h3 className="accordion-header">
                                                                <button
                                                                    className={`accordion-button ${expandedAccordions[section.title] ? '' : 'collapsed'}`}
                                                                    type="button"
                                                                    onClick={() => toggleAccordion(section.title)}
                                                                >
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="me-3">
                                                                            <Image
                                                                                src={section.icon}
                                                                                alt={section.title}
                                                                                width={24}
                                                                                height={24}
                                                                                style={{objectFit: 'contain'}}
                                                                            />
                                                                        </div>
                                                                        <span className="fw-semibold">{section.title}</span>
                                                                    </div>
                                                                </button>
                                                            </h3>
                                                            <Collapse in={expandedAccordions[section.title]}>
                                                                <div className="accordion-body">
                                                                    <div className="mb-3">
                                                                        <Link
                                                                            href={section.url}
                                                                            className="text-primary text-decoration-none small d-block mb-2"
                                                                            onClick={() => setShowMenu(false)}
                                                                        >
                                                                            View all {section.title} services →
                                                                        </Link>
                                                                    </div>
                                                                    <div className="accordion-links">
                                                                        {section.links.map((link, linkIndex) => (
                                                                            <Link
                                                                                key={linkIndex}
                                                                                href={link.href}
                                                                                className={`accordion-link ${pathname === link.href ? 'active' : ''}`}
                                                                                onClick={() => setShowMenu(false)}
                                                                            >
                                                                                <div className="d-flex align-items-center">
                                                                                    <IconifyIcon
                                                                                        icon="bx:chevron-right"
                                                                                        fontSize={14}
                                                                                        className="me-2"
                                                                                    />
                                                                                    {link.label}
                                                                                </div>
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </Collapse>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </Collapse>
                                    </div>
                                </li>

                                <li className={`nav-item ${pathname === '/blog' ? 'active' : ""}`}>
                                    <Link href="/blog" className="nav-link">Blog</Link>
                                </li>
                                <li className={`nav-item ${pathname === '/about' ? 'active' : ""}`}>
                                    <Link href="/about" className="nav-link">About Us</Link>
                                </li>
                                <li className={`nav-item ${pathname === '/contact' ? 'active' : ""}`}>
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

                    {/*<ThemeToggle themeToggle={isNavDark ?? false}/>
                    <button
                        type="button"
                        className="navbar-toggler"
                        aria-label="Toggle navigation"
                        onClick={() => setShowMenu(true)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>*/}
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
        </>
    );
};

export default Navbar;