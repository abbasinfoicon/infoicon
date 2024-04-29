'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'


const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [openSubDropdown, setOpenSubDropdown] = useState(null);

    const handleDropdownToggle = (index) => {
        if (openDropdown === index) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(index);
            setOpenSubDropdown(null);
            document.querySelectorAll('.dropdown').forEach((el, i) => {
                if (i !== index) {
                    el.classList.remove('active');
                }
            });
        }
    };

    const handleSubDropdownToggle = (index) => {
        setOpenSubDropdown(openSubDropdown === index ? null : index);
    };

    const handleMenuItemHover = (event) => event.currentTarget.querySelector('.submenuBox').style.display = 'block';
    const handleMenuItemLeave = (event) => event.currentTarget.querySelector('.submenuBox').style.display = 'none';
    const handleMenuHover = () => document.querySelector('header')?.classList.add('open');
    const handleMenuLeave = () => document.querySelector('header')?.classList.remove('open');

    const handleClick = () => {
        document.querySelector('.quotePopup').classList.add('show');
        const modalBackdrop = document.createElement('div');
        modalBackdrop.classList.add('modal-backdrop');
        document.body.appendChild(modalBackdrop);
        document.body.classList.add('modal-open');
    };

    const handleClickMenu = (e) => {
        e.preventDefault();
        setIsMenuActive(!isMenuActive);
        document.body.classList.toggle("active");
    };

    useEffect(() => {
        const handleScroll = () => setIsScrolled(typeof window !== 'undefined' && window.scrollY >= 100);
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <header className={isScrolled ? "active" : ""}>
            <div className="home-container">
                <h1 className="logo">
                    <Link href="/">
                        <img src="/assets/img/logo-white.png" className="top" alt="Infoicon Technologies" width="235" />
                        <img className="after" src="/assets/img/logo-gray.png" alt="Infoicon Technologies" width="235" />
                    </Link>
                </h1>
                <div className="headRgt">
                    <nav className="menu" onMouseEnter={handleMenuHover} onMouseLeave={handleMenuLeave}>
                        <ul>
                            <li className="ddMenu" onMouseEnter={handleMenuItemHover} onMouseLeave={handleMenuItemLeave}><Link href="#">About us</Link>
                                <div className="submenuBox">
                                    <div className="home-container menuOuter">
                                        <div className="menuTopInner abot">
                                            <ul className="subMenu">
                                                <li>
                                                    <Link href="#"><strong>Corporate Info</strong></Link>
                                                    <ul>
                                                        <li><Link href="#">About Company</Link></li>
                                                        <li><Link href="#">Mission and Vision</Link></li>
                                                        <li><Link href="#">Our Values</Link></li>
                                                        <li><Link href="#">Contact Us</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link href="#"><strong>Quick Contact Info</strong></Link>
                                                    <ul>
                                                        <li><Link href="#">IN +91-120-495-7436</Link></li>
                                                        <li><Link href="#">USA +1 31 5688 7243</Link></li>
                                                        <li><Link href="#">UK +44 20 3289 2658</Link></li>
                                                        <li><Link href="#">Fax: +91-0120-426-5539</Link></li>
                                                        <li><a href="#">info@infoicontechnologies.com</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <div className="flexBox menuBoxSep">
                                                <div className="menuBoxLink">
                                                    <span>Certifications</span>
                                                    <ul className="parrNewlink partners-logo">
                                                        <li>
                                                            <div className="inner">
                                                                <Link href="#" target="_blank">
                                                                    <img src="/assets/img/certificates/nasscom-logo.png" alt="Nasscom Logo" width="100" />
                                                                </Link>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="inner">
                                                                <Link href="#" target="_blank">
                                                                    <img src="/assets/img/certificates/iso-certified-logo.png" alt="ISO Certified Logo" width="80" />
                                                                </Link>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="inner">
                                                                <Link href="#" target="_blank">
                                                                    <img src="/assets/img/certificates/microsoft-badge.png" alt="Menu Microsoft" width="80" />
                                                                </Link>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="inner">
                                                                <Link href="#" target="_blank">
                                                                    <img src="/assets/img/certificates/magento-certified-logo.png" alt="Magento Certified Logo" width="60" />
                                                                </Link>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="inner">
                                                                <Link href="#" target="_blank">
                                                                    <img src="/assets/img/certificates/google-partner-logo.png" alt="Google Partner Logo" width="125" />
                                                                </Link>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="inner">
                                                                <Link href="#">
                                                                    <img src="/assets/img/certificates/google-adword-logo.png" alt="Google Adword Logo" width="125" />
                                                                </Link>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="inner">
                                                                <Link href="#">
                                                                    <img src="/assets/img/certificates/amazon-web-services-logo.png" alt="Amazon Web Services Logo" width="150" />
                                                                </Link>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="inner">
                                                                <Link href="#" target="_blank">
                                                                    <img src="/assets/img/certificates/microsoft-marketing-partner-logo.png" alt="Microsoft Marketing Partner Logo" width="150" />
                                                                </Link>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="inner">
                                                                <Link href="#" target="_blank">
                                                                    <img src="/assets/img/certificates/dmca-logo.png" alt="DCMA Logo" width="100" />
                                                                </Link>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="ddMenu" onMouseEnter={handleMenuItemHover} onMouseLeave={handleMenuItemLeave}>
                                <Link href="#">Services</Link>
                                <div className="submenuBox">
                                    <div className="home-container menuOuter">
                                        <div className="menuTopInner">
                                            <ul className="subMenu services">
                                                <li>
                                                    <Link href="#"><strong>Mobility Solution</strong></Link>
                                                    <ul>
                                                        <li><Link href="#">Mobile Apps Development</Link></li>
                                                        <li><Link href="#">Custom Toolbar Development</Link></li>
                                                        <li><Link href="#">Augmented Reality App Development</Link></li>
                                                        <li><Link href="#">Virtual Reality</Link></li>
                                                        <li><Link href="#">AWS Migration</Link></li>
                                                        <li><Link href="#">React Native</Link></li>
                                                        <li><Link href="#">Flutter App Development</Link></li>
                                                        <li><Link href="#">Progressive Web App</Link></li>
                                                        <li><Link href="#">On Demand</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link href="#"><strong>Tech Expertise</strong></Link>
                                                    <ul>
                                                        <li><Link href="#">PHP Development</Link></li>
                                                        <li><Link href="#">Open Source Customization</Link></li>
                                                        <li><Link href="#">Web Development</Link></li>
                                                        <li><Link href="#">Shopify Development</Link></li>
                                                        <li><Link href="#">Digital Marketing</Link></li>
                                                        <li><Link href="#">Software Development</Link></li>
                                                        <li><Link href="#">.Net Framework</Link></li>
                                                        <li><Link href="#">X-Cart Development</Link></li>
                                                        <li><Link href="#">Web API Framework</Link></li>
                                                        <li><Link href="#">Application Maintenance Services</Link></li>
                                                        <li><Link href="#">Hire Dedicated Team</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link href="#"><strong>Solution Design</strong></Link>
                                                    <ul>
                                                        <li><Link href="#">GIS Development</Link></li>
                                                        <li><Link href="#">Artificial Intelligence</Link></li>
                                                        <li><Link href="#">Java/j2EE Development</Link></li>
                                                        <li><Link href="#">Microsoft SharePoint Framework</Link></li>
                                                        <li><Link href="#">Microsoft Azure Stack</Link></li>
                                                        <li><Link href="#">Microsoft Azure</Link></li>
                                                        <li><Link href="#">Software Testing</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <div className="flexBox menuBoxSep">
                                                <div className="menuBoxLink client-video">
                                                    <span>Success Stories</span>
                                                    <iframe width="250" height="127" allowFullScreen="" src="https://www.youtube.com/embed/q5sURR9fvvk?showinfo=0=0?rel=0&amp;autoplay" title="" data-toggle="tooltip" data-original-title=""></iframe>
                                                </div>
                                                <div className="menuBoxLink client-video">
                                                    <span>&nbsp;</span>
                                                    <iframe width="250" height="127" allowFullScreen="" src="https://www.youtube.com/embed/xw5ONF_nIMY?showinfo=0=0?rel=0&amp;autoplay" title="" data-toggle="tooltip" data-original-title=""></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="ddMenu" onMouseEnter={handleMenuItemHover} onMouseLeave={handleMenuItemLeave}>
                                <Link href="#">Expertise</Link>
                                <div className="submenuBox">
                                    <div className="home-container menuOuter">
                                        <div className="menuTopInner sol">
                                            <ul className="subMenu">
                                                <li>
                                                    <Link href="#"><strong>CMS Development</strong></Link>
                                                    <ul>
                                                        <li><Link href="#">Woocommerce Development</Link></li>
                                                        <li><Link href="#">Magento Development</Link></li>
                                                        <li><Link href="#">Codeigniter Development</Link></li>
                                                        <li><Link href="#">Wordpress Development</Link></li>
                                                        <li><Link href="#">Joomla Development</Link></li>
                                                        <li><Link href="#">Typo3 Development</Link></li>
                                                        <li><Link href="#">Drupal Development</Link></li>
                                                        <li><Link href="#">Frog CMS Development</Link></li>
                                                        <li><Link href="#">Silver Stripe Development</Link></li>
                                                        <li><Link href="#">Impress CMS Development</Link></li>
                                                        <li><Link href="#">Exponent CMS Development</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link href="#"><strong>PHP Expertise</strong></Link>
                                                    <ul>
                                                        <li><Link href="#">Cakephp Development</Link></li>
                                                        <li><Link href="#">OpenCart Development</Link></li>
                                                        <li><Link href="#">YII Development</Link></li>
                                                        <li><Link href="#">Moodle Development</Link></li>
                                                        <li><Link href="#">OsCommerce Development</Link></li>
                                                        <li><Link href="#">Symfony Development</Link></li>
                                                        <li><Link href="#">Django Development</Link></li>
                                                        <li><Link href="#">Shopware Development</Link></li>
                                                        <li><Link href="#">Prado Development</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link href="#"><strong>Sforce Development</strong></Link>
                                                    <ul>
                                                        <li><Link href="#">Python Development</Link></li>
                                                        <li><Link href="#">MongoDB Development</Link></li>
                                                        <li><Link href="#">Laravel Development</Link></li>
                                                        <li><Link href="#">PHP-MVC Development</Link></li>
                                                        <li><Link href="#">Zend Framework</Link></li>
                                                        <li><Link href="#">Phalcon Development</Link></li>
                                                        <li><Link href="#">FuelPHP Development</Link></li>
                                                        <li><Link href="#">Fat-Free Development</Link></li>
                                                        <li><Link href="#">Zoop Development</Link></li>
                                                        <li><Link href="#">Simple PHP Development</Link></li>
                                                        <li><Link href="#">Akelos Development</Link></li>
                                                        <li><Link href="#">Ruby on Rails Development</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link href="#"><strong>js Libraries & Frameworks</strong></Link>
                                                    <ul>
                                                        <li><Link href="#">Angular.js Development</Link></li>
                                                        <li><Link href="#">React.js Development</Link></li>
                                                        <li><Link href="#">Vue.js Development</Link></li>
                                                        <li><Link href="#">Node.js Development</Link></li>
                                                        <li><Link href="#">Ember.js Development</Link></li>
                                                        <li><Link href="#">Express.js Development</Link></li>
                                                        <li><Link href="#">Win js Development</Link></li>
                                                        <li><Link href="#">Polymer Framework</Link></li>
                                                        <li><Link href="#">Symfony Framework</Link></li>
                                                        <li><Link href="#">PureMVC Framework</Link></li>
                                                        <li><Link href="#">Ionic Framework</Link></li>
                                                        <li><Link href="#">Bootstrap</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="ddMenu" onMouseEnter={handleMenuItemHover} onMouseLeave={handleMenuItemLeave}>
                                <Link href="#">Infra Services</Link>
                                <div className="submenuBox">
                                    <div className="home-container menuOuter">
                                        <div className="menuTopInner sol">
                                            <ul className="subMenu">
                                                <li>
                                                    <Link href="#"><strong>Backend Support</strong></Link>
                                                    <ul>
                                                        <li><Link href="#">Network Support</Link></li>
                                                        <li><Link href="#">Database Support</Link></li>
                                                        <li><Link href="#">Database Admin Support</Link></li>
                                                        <li><Link href="#">Application Support</Link></li>
                                                        <li><Link href="#">System Administration And Virtualization</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link href="#"><strong>Cloud Services</strong></Link>
                                                    <ul>
                                                        <li><Link href="#">Amazon Cloud Migration</Link></li>
                                                        <li><Link href="#">Google APPS Migration</Link></li>
                                                        <li><Link href="#">VPN</Link></li>
                                                        <li><Link href="#">Dedicated Hosting</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link href="#"><strong>Sforce Development</strong></Link>
                                                    <ul>
                                                        <li><Link href="#">Application Security</Link></li>
                                                        <li><Link href="#">Cloud Amazon</Link></li>
                                                        <li><Link href="#">Google Cloud</Link></li>
                                                        <li><Link href="#">OWASP</Link></li>
                                                        <li><Link href="#">BPM</Link></li>
                                                        <li><Link href="#">Salesforce Consulting</Link></li>
                                                        <li><Link href="#">Salesforce Development</Link></li>
                                                        <li><Link href="#">Salesforce Integration</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link href="#"><strong>Sharepoint development</strong></Link>
                                                    <ul>
                                                        <li><Link href="#">Hire A Salesforce Developer</Link></li>
                                                        <li><Link href="#">Salesforce Mobile App Development</Link></li>
                                                        <li><Link href="#">Salesforce For Partners</Link></li>
                                                        <li><Link href="#">Sharepoint Enterprise Search</Link></li>
                                                        <li><Link href="#">Sharepoint-(BI)</Link></li>
                                                        <li><Link href="#">Sharepoint-(BPM)</Link></li>
                                                        <li><Link href="#">Sharepoint Custom Application Development</Link></li>
                                                        <li><Link href="#">Sharepoint Extranet Development</Link></li>
                                                        <li><Link href="#">Sharepoint Data Migration</Link></li>
                                                        <li><Link href="#">Sharepoint Enterprise Content Management</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="ddMenu" onMouseEnter={handleMenuItemHover} onMouseLeave={handleMenuItemLeave}>
                                <Link href="#">Industries</Link>
                                <div className="submenuBox">
                                    <div className="home-container menuOuter">
                                        <div className="menuTopInner part">
                                            <ul className="subMenu">
                                                <li>
                                                    <ul>
                                                        <li><Link href="#">Health Care</Link></li>
                                                        <li><Link href="#">Marketing</Link></li>
                                                        <li><Link href="#">Retail</Link></li>
                                                        <li><Link href="#">Shopping</Link></li>
                                                        <li><Link href="#">Medical</Link></li>
                                                        <li><Link href="#">Manufacturing Industry</Link></li>
                                                        <li><Link href="#">Agriculture</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul>
                                                        <li><Link href="#">Automobiles</Link></li>
                                                        <li><Link href="#">Banking</Link></li>
                                                        <li><Link href="#">Biotechnology</Link></li>
                                                        <li><Link href="#">Information Technologies</Link></li>
                                                        <li><Link href="#">Consumer Markets</Link></li>
                                                        <li><Link href="#">Education And Training</Link></li>
                                                        <li><Link href="#">Engineering</Link></li>
                                                    </ul>
                                                </li>

                                                <li>
                                                    <ul>
                                                        <li><Link href="#">Financial Services</Link></li>
                                                        <li><Link href="#">Food Industry</Link></li>
                                                        <li><Link href="#">Gems And Jewellery</Link></li>
                                                        <li><Link href="#">Insurance</Link></li>
                                                        <li><Link href="#">Media And Entertainment</Link></li>
                                                        <li><Link href="#">Oil And Gas</Link></li>
                                                        <li><Link href="#">Pharmaceuticals</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul>
                                                        <li><Link href="#">Real Estate</Link></li>
                                                        <li><Link href="#">Research And Development</Link></li>
                                                        <li><Link href="#">Science And Technology</Link></li>
                                                        <li><Link href="#">Spa &amp; Wellness</Link></li>
                                                        <li><Link href="#">Telecommunications</Link></li>
                                                        <li><Link href="#">Tourism And Hospitality</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>

                                </div>
                            </li>
                            <li className="ddMenu" onMouseEnter={handleMenuItemHover} onMouseLeave={handleMenuItemLeave}>
                                <Link href="#">Custom Solutions</Link>
                                <div className="submenuBox">
                                    <div className="home-container menuOuter">
                                        <div className="menuTopInner custom-solutions">
                                            <ul className="subMenu">
                                                <li>
                                                    <ul>
                                                        <li><Link href="#">Custom Software Development</Link></li>
                                                        <li><Link href="#">Internet Software Development</Link></li>
                                                        <li><Link href="#">Microsoft Development</Link></li>
                                                        <li><Link href="#">DNN Development Services</Link></li>
                                                        <li><Link href="#">SugarCRM Development</Link></li>
                                                        <li><Link href="#">Offshore Development Center</Link></li>
                                                        <li><Link href="#">Quality Control Services</Link></li>
                                                        <li><Link href="#">SAP</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul>
                                                        <li><Link href="#">IT Consulting</Link></li>
                                                        <li><Link href="#">Knowledge Management</Link></li>
                                                        <li><Link href="#">Application Migration</Link></li>
                                                        <li><Link href="#">Trading Services</Link></li>
                                                        <li><Link href="#">Product Authentication Solution</Link></li>
                                                        <li><Link href="#">Education Software Products</Link></li>
                                                        <li><Link href="#">Financial Accounting</Link></li>
                                                        <li><Link href="#">Artificial Intelligence</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul>
                                                        <li><Link href="#">Salesforce Consulting</Link></li>
                                                        <li><Link href="#">SugarCRM Consulting</Link></li>
                                                        <li><Link href="#">Database Programming</Link></li>
                                                        <li><Link href="#">Python Development</Link></li>
                                                        <li><Link href="#">Ruby On Rails Development</Link></li>
                                                        <li><Link href="#">Microsoft Dynamics</Link></li>
                                                        <li><Link href="#">Volusion Development</Link></li>
                                                        <li><Link href="#">OpenSource Technologies</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul>
                                                        <li><Link href="#">DotNetNuke Development</Link></li>
                                                        <li><Link href="#">Social Networking Applications</Link></li>
                                                        <li><Link href="#">Content Management System</Link></li>
                                                        <li><Link href="#">HRMS And Payroll System Design</Link></li>
                                                        <li><Link href="#">HTML5 Development</Link></li>
                                                        <li><Link href="#">Internet of Things</Link></li>
                                                        <li><Link href="#">React JS</Link></li>
                                                        <li><Link href="#">Digital Transformation</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><button className="readMoreBtn" onClick={handleClick}><span>Request Quote</span></button></li>
                        </ul>
                    </nav>

                    <div className={`mobMenuCover ${isMenuActive ? 'active' : ''}`}>
                        <span className="circle"></span>
                        <Link href="#" className="mobMenu" onClick={handleClickMenu}><em></em><em></em><em></em></Link>
                        <div className="quickMenuCon">
                            <div className="popupMenuBox">
                                <div className="popupLogo"><Link href="/"><img src="/assets/img/logo-gray.png" alt="Logo" /></Link>
                                </div>

                                <div className="mobMenuCover">
                                    <div className="quickMenuCon">
                                        <div className="popupMenuBox">
                                            <div className="popupLogo"><Link href="/"><img src="/assets/img/logo-gray.png" alt="Logo" /></Link>
                                            </div>
                                            <div className="hamburger-menu">
                                                <ul id="sidebar-menu" className="popupMenu">
                                                    <li className={`dropdown des_hide ${openDropdown === 0 ? 'active' : ''}`} onClick={() => handleDropdownToggle(0)}>
                                                        <Link href="#">About us</Link>
                                                        <ul className={openDropdown === 0 ? 'open' : ''}>
                                                            <li><Link href="#">About Company</Link></li>
                                                            <li><Link href="#">Mission and Vision</Link></li>
                                                            <li><Link href="#">Our Values</Link></li>
                                                            <li><Link href="#">Contact Us</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className={`dropdown des_hide ${openDropdown === 1 ? 'active' : ''}`} onClick={() => handleDropdownToggle(1)}>
                                                        <Link href="#">Services</Link>
                                                        <ul className={openDropdown === 1 ? 'open' : ''}>
                                                            <li className={`dropdown ${openSubDropdown === 101 ? 'active' : ''}`} onClick={() => handleSubDropdownToggle(101)}>
                                                                <Link href="#"><strong>Mobility Solution</strong></Link>
                                                                <ul className={openSubDropdown === 101 ? 'open' : ''}>
                                                                    <li><Link href="#">Mobile Apps Development</Link></li>
                                                                    <li><Link href="#">Custom Toolbar Development</Link></li>
                                                                    <li><Link href="#">Augmented Reality</Link></li>
                                                                    <li><Link href="#">Virtual Reality</Link></li>
                                                                    <li><Link href="#">AWS Migration</Link></li>
                                                                    <li><Link href="#">React Native</Link></li>
                                                                    <li><Link href="#">Flutter App Development</Link></li>
                                                                    <li><Link href="#">Progressive web app</Link></li>
                                                                    <li><Link href="#">On Demand</Link></li>
                                                                </ul>
                                                            </li>
                                                            <li className={`dropdown ${openSubDropdown === 102 ? 'active' : ''}`} onClick={() => handleSubDropdownToggle(102)}>
                                                                <Link href="#"><strong>Tech Expertise</strong></Link>
                                                                <ul className={openSubDropdown === 102 ? 'open' : ''}>
                                                                    <li><Link href="#">PHP Development</Link></li>
                                                                    <li><Link href="#">Open Source Customization</Link></li>
                                                                    <li><Link href="#">Web Development</Link></li>
                                                                    <li><Link href="#">Shopify Development</Link></li>
                                                                    <li><Link href="#">AgoraCart Development</Link></li>
                                                                    <li><Link href="#">Digital Marketing</Link></li>
                                                                    <li><Link href="#">Software Development</Link></li>
                                                                    <li><Link href="#">.Net Framework</Link></li>
                                                                    <li><Link href="#">X-Cart Development</Link></li>
                                                                    <li><Link href="#">Prestashop Development</Link></li>
                                                                    <li><Link href="#">Web API Framework</Link></li>
                                                                    <li><Link href="#">Application Maintenance Services</Link></li>
                                                                    <li><Link href="#">Hire Dedicated Team</Link></li>
                                                                </ul>
                                                            </li>
                                                            <li className={`dropdown ${openSubDropdown === 103 ? 'active' : ''}`} onClick={() => handleSubDropdownToggle(103)}>
                                                                <Link href="#"><strong>Solution Design</strong></Link>
                                                                <ul className={openSubDropdown === 103 ? 'open' : ''}>
                                                                    <li><Link href="#">GIS Development</Link></li>
                                                                    <li><Link href="#">Artificial Intelligence</Link></li>
                                                                    <li><Link href="#">Java/j2EE Development</Link></li>
                                                                    <li><Link href="#">Microsoft SharePoint Framework</Link></li>
                                                                    <li><Link href="#">Microsoft Azure Stack</Link></li>
                                                                    <li><Link href="#">Microsoft Azure</Link></li>
                                                                    <li><Link href="#">Software Testing</Link></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className={`dropdown des_hide ${openDropdown === 2 ? 'active' : ''}`} onClick={() => handleDropdownToggle(2)}>
                                                        <Link href="#">Expertise</Link>
                                                        <ul className={openDropdown === 2 ? 'open' : ''}>
                                                            <li className='dropdown'>
                                                                <Link href="#"><strong>CMS Development</strong></Link>
                                                                <ul>
                                                                    <li><Link href="#">Woocommerce Development</Link></li>
                                                                    <li><Link href="#">Magento Development</Link></li>
                                                                    <li><Link href="#">Codeigniter Development</Link></li>
                                                                    <li><Link href="#">Wordpress Development</Link></li>
                                                                    <li><Link href="#">Joomla Development</Link></li>
                                                                    <li><Link href="#">Typo3 Development</Link></li>
                                                                    <li><Link href="#">Drupal Development</Link></li>
                                                                    <li><Link href="#">Frog CMS Development</Link></li>
                                                                    <li><Link href="#">Silver Stripe Development</Link></li>
                                                                    <li><Link href="#">Impress CMS Development</Link></li>
                                                                    <li><Link href="#">Exponent CMS Development</Link></li>
                                                                </ul>
                                                            </li>
                                                            <li className='dropdown'>
                                                                <Link href="#"><strong>PHP Expertise</strong></Link>
                                                                <ul>
                                                                    <li><Link href="#">Cakephp Development</Link></li>
                                                                    <li><Link href="#">OpenCart Development</Link></li>
                                                                    <li><Link href="#">YII Development</Link></li>
                                                                    <li><Link href="#">Moodle Development</Link></li>
                                                                    <li><Link href="#">OsCommerce Development</Link></li>
                                                                    <li><Link href="#">Symfony Development</Link></li>
                                                                    <li><Link href="#">Django Development</Link></li>
                                                                    <li><Link href="#">Shopware Development</Link></li>
                                                                    <li><Link href="#">Prado Development</Link></li>
                                                                </ul>
                                                            </li>
                                                            <li className='dropdown'>
                                                                <Link href="#"><strong>Sforce Development</strong></Link>
                                                                <ul>
                                                                    <li><Link href="#">Python Development</Link></li>
                                                                    <li><Link href="#">MongoDB Development</Link></li>
                                                                    <li><Link href="#">Laravel Development</Link></li>
                                                                    <li><Link href="#">PHP-MVC Development</Link></li>
                                                                    <li><Link href="#">Zend Framework</Link></li>
                                                                    <li><Link href="#">Phalcon Development</Link></li>
                                                                    <li><Link href="#">FuelPHP Development</Link></li>
                                                                    <li><Link href="#">Fat-Free Development</Link></li>
                                                                    <li><Link href="#">Zoop Development</Link></li>
                                                                    <li><Link href="#">Simple PHP Development</Link></li>
                                                                    <li><Link href="#">Akelos Development</Link></li>
                                                                    <li><Link href="#">Ruby on Rails Development</Link></li>
                                                                </ul>
                                                            </li>
                                                            <li className='dropdown'>
                                                                <Link href="#"><strong>js Libraries & Frameworks</strong></Link>
                                                                <ul>
                                                                    <li><Link href="#">Angular.js Development</Link></li>
                                                                    <li><Link href="#">React.js Development</Link></li>
                                                                    <li><Link href="#">Vue.js Development</Link></li>
                                                                    <li><Link href="#">Node.js Development</Link></li>
                                                                    <li><Link href="#">Ember.js Development</Link></li>
                                                                    <li><Link href="#">Express.js Development</Link></li>
                                                                    <li><Link href="#">Win js Development</Link></li>
                                                                    <li><Link href="#">Polymer Framework</Link></li>
                                                                    <li><Link href="#">Symfony Framework</Link></li>
                                                                    <li><Link href="#">PureMVC Framework</Link></li>
                                                                    <li><Link href="#">Ionic Framework</Link></li>
                                                                    <li><Link href="#">Bootstrap</Link></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className={`dropdown des_hide ${openDropdown === 3 ? 'active' : ''}`} onClick={() => handleDropdownToggle(3)}>
                                                        <Link href="#">Infra Services</Link>
                                                        <ul className={openDropdown === 3 ? 'open' : ''}>
                                                            <li className='dropdown'>
                                                                <Link href="#"><strong>Backend Support</strong></Link>
                                                                <ul>
                                                                    <li><Link href="#">Network Support</Link></li>
                                                                    <li><Link href="#">Database Support</Link></li>
                                                                    <li><Link href="#">Database Admin Support</Link></li>
                                                                    <li><Link href="#">Application Support</Link></li>
                                                                    <li><Link href="#">System Administration And Virtualization</Link></li>
                                                                </ul>
                                                            </li>
                                                            <li className='dropdown'>
                                                                <Link href="#"><strong>Cloud Services</strong></Link>
                                                                <ul>
                                                                    <li><Link href="#">Amazon Cloud Migration</Link></li>
                                                                    <li><Link href="#">Google APPS Migration</Link></li>
                                                                    <li><Link href="#">VPN</Link></li>
                                                                    <li><Link href="#">Dedicated Hosting</Link></li>
                                                                </ul>
                                                            </li>

                                                            <li className='dropdown'>
                                                                <Link href="#"><strong>Sforce Development</strong></Link>
                                                                <ul>
                                                                    <li><Link href="#">Application Security</Link></li>
                                                                    <li><Link href="#">Cloud Amazon</Link></li>
                                                                    <li><Link href="#">Google Cloud</Link></li>
                                                                    <li><Link href="#">OWASP</Link></li>
                                                                    <li><Link href="#">BPM</Link></li>
                                                                    <li><Link href="#">Salesforce Consulting</Link></li>
                                                                    <li><Link href="#">Salesforce Development</Link></li>
                                                                    <li><Link href="#">Salesforce Integration</Link></li>
                                                                </ul>
                                                            </li>
                                                            <li className='dropdown'>
                                                                <Link href="#"><strong>Sharepoint development</strong></Link>
                                                                <ul>
                                                                    <li><Link href="#">Hire A Salesforce Developer</Link></li>
                                                                    <li><Link href="#">Salesforce Mobile App Development</Link></li>
                                                                    <li><Link href="#">Salesforce For Partners</Link></li>
                                                                    <li><Link href="#">Sharepoint Enterprise Search</Link></li>
                                                                    <li><Link href="#">Sharepoint-(BI)</Link></li>
                                                                    <li><Link href="#">Sharepoint-(BPM)</Link></li>
                                                                    <li><Link href="#">Sharepoint Custom Application Development</Link></li>
                                                                    <li><Link href="#">Sharepoint Extranet Development</Link></li>
                                                                    <li><Link href="#">Sharepoint Data Migration</Link></li>
                                                                    <li><Link href="#">Sharepoint Enterprise Content Management</Link></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className={`dropdown des_hide ${openDropdown === 4 ? 'active' : ''}`} onClick={() => handleDropdownToggle(4)}>
                                                        <Link href="#">Industries</Link>
                                                        <ul className={openDropdown === 4 ? 'open' : ''}>
                                                            <li><Link href="#">Health Care</Link></li>
                                                            <li><Link href="#">Marketing</Link></li>
                                                            <li><Link href="#">Retail</Link></li>
                                                            <li><Link href="#">Shopping</Link></li>
                                                            <li><Link href="#">Medical</Link></li>
                                                            <li><Link href="#">Manufacturing Industry</Link></li>
                                                            <li><Link href="#">Agriculture</Link></li>
                                                            <li><Link href="#">Automobiles</Link></li>
                                                            <li><Link href="#">Banking</Link></li>
                                                            <li><Link href="#">Biotechnology</Link></li>
                                                            <li><Link href="#">Information Technologies</Link></li>
                                                            <li><Link href="#">Consumer Markets</Link></li>
                                                            <li><Link href="#">Education And Training</Link></li>
                                                            <li><Link href="#">Engineering</Link></li>
                                                            <li><Link href="#">Financial Services</Link></li>
                                                            <li><Link href="#">Food Industry</Link></li>
                                                            <li><Link href="#">Gems And Jewellery</Link></li>
                                                            <li><Link href="#">Insurance</Link></li>
                                                            <li><Link href="#">Media And Entertainment</Link></li>
                                                            <li><Link href="#">Oil And Gas</Link></li>
                                                            <li><Link href="#">Pharmaceuticals</Link></li>
                                                            <li><Link href="#">Real Estate</Link></li>
                                                            <li><Link href="#">Research And Development</Link></li>
                                                            <li><Link href="#">Science And Technology</Link></li>
                                                            <li><Link href="#">Spa &amp; Wellness</Link></li>
                                                            <li><Link href="#">Telecommunications</Link></li>
                                                            <li><Link href="#">Tourism And Hospitality</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className={`dropdown des_hide ${openDropdown === 5 ? 'active' : ''}`} onClick={() => handleDropdownToggle(5)}>
                                                        <Link href="#">Custom Solutions</Link>
                                                        <ul className={openDropdown === 5 ? 'open' : ''}>
                                                            <li><Link href="#">Custom Software Development</Link></li>
                                                            <li><Link href="#">Internet Software Development</Link></li>
                                                            <li><Link href="#">Microsoft Development</Link></li>
                                                            <li><Link href="#">DNN Development Services</Link></li>
                                                            <li><Link href="#">SugarCRM Development</Link></li>
                                                            <li><Link href="#">Offshore Development Center</Link></li>
                                                            <li><Link href="#">Quality Control Services</Link></li>
                                                            <li><Link href="#">SAP</Link></li>
                                                            <li><Link href="#">IT Consulting</Link></li>
                                                            <li><Link href="#">Knowledge Management</Link></li>
                                                            <li><Link href="#">Application Migration</Link></li>
                                                            <li><Link href="#">Trading Services</Link></li>
                                                            <li><Link href="#">Product Authentication Solution</Link></li>
                                                            <li><Link href="#">Education Software Products</Link></li>
                                                            <li><Link href="#">Financial Accounting</Link></li>
                                                            <li><Link href="#">Artificial Intelligence</Link></li>
                                                            <li><Link href="#">Salesforce Consulting</Link></li>
                                                            <li><Link href="#">SugarCRM Consulting</Link></li>
                                                            <li><Link href="#">Database Programming</Link></li>
                                                            <li><Link href="#">Python Development</Link></li>
                                                            <li><Link href="#">Ruby On Rails Development</Link></li>
                                                            <li><Link href="#">Microsoft Dynamics</Link></li>
                                                            <li><Link href="#">Volusion Development</Link></li>
                                                            <li><Link href="#">OpenSource Technologies</Link></li>
                                                            <li><Link href="#">DotNetNuke Development</Link></li>
                                                            <li><Link href="#">Social Networking Applications</Link></li>
                                                            <li><Link href="#">Content Management System</Link></li>
                                                            <li><Link href="#">HRMS And Payroll System Design</Link></li>
                                                            <li><Link href="#">HTML5 Development</Link></li>
                                                            <li><Link href="#">Internet of Things</Link></li>
                                                            <li><Link href="#">React JS</Link></li>
                                                            <li><Link href="#">Digital Transformation</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className={`dropdown ${openDropdown === 6 ? 'active' : ''}`} onClick={() => handleDropdownToggle(6)}>
                                                        <Link href="#">Products</Link>
                                                        <ul className={openDropdown === 6 ? 'open' : ''}>
                                                            <li><Link href="#">Document Management Systems</Link></li>
                                                            <li><Link href="#">Task Management Systems</Link></li>
                                                            <li><Link href="#">HRM</Link></li>
                                                            <li><Link href="#">CRM</Link></li>
                                                            <li><Link href="#">ERP</Link></li>
                                                            <li><Link href="#">Online TAXI Booking Apps</Link></li>
                                                            <li><Link href="#">Shopping Mall management and Affiliate program</Link></li>
                                                            <li><Link href="#">Mall Parking Management System</Link></li>
                                                            <li><Link href="#">School Bus & Vehicle Tracking system</Link></li>
                                                            <li><Link href="#">Multiple Language Learning System</Link></li>
                                                            <li><Link href="#">Restaurant Management system</Link></li>
                                                            <li><Link href="#">Shopping Cart Management Apps</Link></li>
                                                            <li><Link href="#">Online Education APPS</Link></li>
                                                            <li><Link href="#">Cinema Booking System</Link></li>
                                                            <li><Link href="#">Employees Tracking System</Link></li>
                                                            <li><Link href="#">Service Management System</Link></li>
                                                            <li><Link href="#">Doctor Appointment Booking System</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className={`dropdown ${openDropdown === 7 ? 'active' : ''}`} onClick={() => handleDropdownToggle(7)}>
                                                        <Link href="#">Big Data Analytics Solution</Link>
                                                        <ul className={openDropdown === 7 ? 'open' : ''}>
                                                            <li><Link href="#">Big Data Consulting</Link></li>
                                                            <li><Link href="#">Big Data Solutions</Link></li>
                                                            <li><Link href="#">Big Data Implementation</Link></li>
                                                            <li><Link href="#">Data Science</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className={`dropdown ${openDropdown === 8 ? 'active' : ''}`} onClick={() => handleDropdownToggle(8)}>
                                                        <Link href="#">Software Testing</Link>
                                                        <ul className={openDropdown === 8 ? 'open' : ''}>
                                                            <li><Link href="#">Outsourced Software Testing Services</Link></li>
                                                            <li><Link href="#">Why Our Testing Services</Link></li>
                                                            <li><Link href="#">Our Working Process</Link></li>
                                                            <li><Link href="#">Component & Unit Testing</Link></li>
                                                            <li><Link href="#">Mobile App Testing</Link></li>
                                                            <li><Link href="#">Web Application Testing</Link></li>
                                                            <li><Link href="#">Functional Testing</Link></li>
                                                            <li><Link href="#">Automation Testing</Link></li>
                                                            <li><Link href="#">Usability & Content Testing</Link></li>
                                                            <li><Link href="#">Localization Testing</Link></li>
                                                            <li><Link href="#">Integration Testing</Link></li>
                                                            <li><Link href="#">Security Testing</Link></li>
                                                            <li><Link href="#">Performance Testing</Link></li>
                                                            <li><Link href="#">System Testing</Link></li>
                                                            <li><Link href="#">Database & Platform Testing</Link></li>
                                                            <li><Link href="#">Cloud Testing</Link></li>
                                                            <li><Link href="#">E-Commerce & Auction</Link></li>
                                                            <li><Link href="#">BFSI Testing Services</Link></li>
                                                            <li><Link href="#">E Learning</Link></li>
                                                            <li><Link href="#">Cross Industry Testing</Link></li>
                                                            <li><Link href="#">SAAS/ Cloud Testing</Link></li>
                                                            <li><Link href="#">Mobile Testing</Link></li>
                                                            <li><Link href="#">Media & Publishing Testing</Link></li>
                                                            <li><Link href="#">Retail Testing</Link></li>
                                                            <li><Link href="#">Gaming Testing</Link></li>
                                                            <li><Link href="#">Social Media Testing</Link></li>
                                                            <li><Link href="#">Healthcare Testing</Link></li>
                                                            <li><Link href="#">Manufacturing</Link></li>
                                                            <li><Link href="#">Telecom</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className={`dropdown ${openDropdown === 9 ? 'active' : ''}`} onClick={() => handleDropdownToggle(9)}>
                                                        <Link href="#">Digital Marketing</Link>
                                                        <ul className={openDropdown === 9 ? 'open' : ''}>
                                                            <li><Link href="#">Digital Marketing Store</Link></li>
                                                            <li><Link href="#">SEO Services</Link></li>
                                                            <li><Link href="#">Reputation &amp; Brand Management</Link></li>
                                                            <li><Link href="#">Social Marketing</Link></li>
                                                            <li><Link href="#">SMO Likers</Link></li>
                                                            <li><Link href="#">Pay Per Click Services</Link></li>
                                                            <li><Link href="#">App Store Optimization</Link></li>
                                                            <li><Link href="#">PPC Plans</Link></li>
                                                            <li><Link href="#">Unnatural Or Toxic Link Removal</Link></li>
                                                            <li><Link href="#">YouTube Channel Promotion</Link></li>
                                                            <li><Link href="#">SMO Plans</Link></li>
                                                            <li><Link href="#">E commerce SEO Plans</Link></li>
                                                            <li><Link href="#">Facebook Paid Advertising</Link></li>
                                                            <li><Link href="#">E-book Writing Services</Link></li>
                                                            <li><Link href="#">Wikipedia Writing Services</Link></li>
                                                            <li><Link href="#">Web Content Writing</Link></li>
                                                            <li><Link href="#">SEO Case Study</Link></li>
                                                            <li><Link href="#">PPT</Link></li>
                                                            <li><Link href="#">Seo Results</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className={`dropdown ${openDropdown === 10 ? 'active' : ''}`} onClick={() => handleDropdownToggle(10)}>
                                                        <Link href="#">Cloud Computing</Link>
                                                        <ul className={openDropdown === 10 ? 'open' : ''}>
                                                            <li><Link href="#">Enterprise Cloud Consulting</Link></li>
                                                            <li><Link href="#">Cloud Management Services</Link></li>
                                                            <li><Link href="#">Cloud Product Development</Link></li>
                                                            <li><Link href="#">Cloud Application Development</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className={`dropdown ${openDropdown === 11 ? 'active' : ''}`} onClick={() => handleDropdownToggle(11)}>
                                                        <Link href="#">AWS-Migration</Link>
                                                        <ul className={openDropdown === 11 ? 'open' : ''}>
                                                            <li><Link href="#">AWS Cloud Migration</Link></li>
                                                            <li><Link href="#">AWS Consulting Services</Link></li>
                                                            <li><Link href="#">Google APPS Migration</Link></li>
                                                            <li><Link href="#">Microsoft Azure Web Services</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li><Link href="#">Testimonials</Link></li>
                                                    <li><Link href="#">Contact Us</Link></li>
                                                </ul>
                                                <ul className="popupMenu smll">
                                                    <li>
                                                        <Link href="http://www.infoicon.co.in/pms/" target="_blank" className="zone-btn">Clients Login</Link>
                                                        <Link href="http://www.infoicon.co.in/employee-login/" target="_blank" className="zone-btn">Employees Login</Link>
                                                    </li>
                                                </ul>
                                                <div className="popupBot">
                                                    <ul className="conInfo">
                                                        <li><img src="/assets/img/icons/india-flag.png" alt="" />+91-120-495-7436</li>
                                                        <li><img src="/assets/img/icons/usa-flag.png" alt="" />+1 31 5688 7243</li>
                                                        <li><img src="/assets/img/icons/uk-flag.png" alt="" />+44 20 3289 2658</li>
                                                        <li>
                                                            <Link href="mailto:sales@infoicontechnologies.com"> <i className="far fa-envelope"></i>
                                                                sales@infoicontechnologies.com
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <ul className="topSocialLink flexBox">
                                                        <li><Link href="https://www.facebook.com/InfoiconTech/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                                                        <li><Link href="https://twitter.com/infoicontech" target="_blank"><i className="fab fa-twitter"></i></Link></li>
                                                        <li><Link href="https://www.instagram.com/infoicon_technologies" target="_blank"><i className="fab fa-instagram"></i></Link></li>
                                                        <li><Link href="https://www.linkedin.com/company/infoicon-technologies" target="_blank"><i className="fab fa-linkedin-in"></i></Link></li>
                                                        <li><Link href="/"><i className="fas fa-rss"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header