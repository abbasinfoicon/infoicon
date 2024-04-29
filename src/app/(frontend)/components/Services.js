'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const Services = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleClick = (tabNumber, e) => {
        e.preventDefault();
        setActiveTab(tabNumber);
    };
    
    const getTopPosition = (tabNumber) => {
        switch (tabNumber) {
            case 1:
                return "0";
            case 2:
                return "25%";
            case 3:
                return "50%";
            case 4:
                return "75%";
            default:
                return "0";
        }
    };

    return (
        <section className="midCon pt50 service-wrap" style={{ backgroundImage: 'url(/assets/img/bg3.jpg)' }}>
            <div className="home-container">
                <div className="section-head text-center text-white">
                    <h5><i className="fas fa-cogs"></i> OUR SERVICES</h5>

                </div>
                <h5 className="mainHd tac">What We Provide</h5>
                <div className="hdText tac mb20">Scale with the leader in next-generation digital services and IT consulting that
                    brings innovative software products and digital solutions for businesses to uncover growth opportunities.
                </div>
            </div>

            <div className="ServiceCon pt50 pb50">
                <div className="home-container">
                    <div className="flexBox">
                        <div className="serviceForMob">
                            <ul className="serviceList active flexBox">
                                <li>
                                    <Link href="#"><h3 className="hd">Enterprises Mobility</h3></Link>
                                    <ul className="flexBox serviceMobLink">
                                        <li><Link href="#">Mobile Apps Development</Link></li>
                                        <li><Link href="#">Android Apps Development</Link></li>
                                        <li><Link href="#">iOS/iPhone Apps Development</Link></li>
                                        <li><Link href="#">Mobile Games Development</Link></li>
                                        <li><Link href="#">Hire Mobile Apps Dedicated Team</Link></li>
                                        <li><Link href="#">iPad Apps Development</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="#"><h3 className="hd">Digital Transformation</h3></Link>
                                    <ul className="flexBox serviceMobLink">
                                        <li><Link href="#">Artificial Intelligence</Link></li>
                                        <li><Link href="#">Hybrid Games Development</Link></li>
                                        <li><Link href="#">Augmented Reality Apps Development</Link></li>
                                        <li><Link href="#">Virtual Reality Apps Development</Link></li>
                                        <li><Link href="#">AWS Cloud Management</Link></li>
                                        <li><Link href="#">Hire Mobile App Developer</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="#"><h3 className="hd">Software Testing</h3></Link>
                                    <ul className="flexBox serviceMobLink">
                                        <li><Link href="#">Component &amp; Unit Testing</Link></li>
                                        <li><Link href="#">Mobile App Testing</Link></li>
                                        <li><Link href="#">Web Application Testing</Link></li>
                                        <li><Link href="#">Automation Testing</Link></li>
                                        <li><Link href="#">SAAS/ Cloud Testing</Link></li>
                                        <li><Link href="#">Gaming Testing</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="#"><h3 className="hd">Consulting</h3></Link>
                                    <ul className="flexBox serviceMobLink">
                                        <li><Link href="#">Sforce Development</Link></li>
                                        <li><Link href="#">Cloud Product Development</Link></li>
                                        <li><Link href="#">Sharepoint Development</Link></li>
                                        <li><Link href="#">Hire A Salesforce Developer</Link></li>
                                        <li><Link href="#">Salesforce Integration</Link></li>
                                        <li><Link href="#">Sharepoint Data Migration</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div className="serviceLink">
                            <em className="active" style={{ top: getTopPosition(activeTab) }}></em>
                            <Link href="#" className={activeTab === 1 ? "showtab1 current" : "showtab1"} onClick={(e) => handleClick(1, e)}><h3>Enterprises Mobility</h3></Link>
                            <Link href="#" className={activeTab === 2 ? "showtab2 current" : "showtab2"} onClick={(e) => handleClick(2, e)}><h3>Digital Transformation</h3></Link>
                            <Link href="#" className={activeTab === 3 ? "showtab3 current" : "showtab3"} onClick={(e) => handleClick(3, e)}><h3>Software Testing</h3></Link>
                            <Link href="#" className={activeTab === 4 ? "showtab4 current" : "showtab4"} onClick={(e) => handleClick(4, e)}><h3>Consulting</h3></Link>
                        </div>

                        <div className="serviceMid">
                            <ul className={`serviceList flexBox ${activeTab === 1 ? "active" : ""}`} id="tab1">
                                <li>
                                    <Link href="#">
                                        <figure className="service-icon">
                                            <img src="/assets/img/services/mobile-app.png" alt="Mobile apps" className="front" />
                                            <img src="/assets/img/services/mobile-app-white.png" alt="Mobile apps" className="ro" />
                                        </figure>
                                        <h4 className="hd">Mobile Apps Development</h4>
                                        <div className="text"><p>Mobile app development helps the individual business or a group to build up new contacts and later on use them for different marketing campaigns.</p></div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <figure className="service-icon">
                                            <img src="/assets/img/services/android-icon.png" alt="Mobile apps" className="front" />
                                            <img src="/assets/img/services/android-white-icon.png" alt="Mobile apps" className="ro" />
                                        </figure>
                                        <h4 className="hd">Android Apps Development</h4>
                                        <div className="text"><p>The Android Application is considered highly useful with its user-friendly features and serves for the most varied purposes.</p></div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <figure className="service-icon">
                                            <img src="/assets/img/services/ios-icon.png" alt="Mobile apps" className="front" />
                                            <img src="/assets/img/services/ios-white-icon.png" alt="Mobile apps" className="ro" />
                                        </figure>
                                        <h4 className="hd">iOS/iPhone Apps Development</h4>
                                        <div className="text"><p>When we are talking about the mobile technologies, the one and only most playful and convenient technology that comes in our mind is the most advanced and latest iPhone technology.</p></div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <figure className="service-icon">
                                            <img src="/assets/img/services/mobile-game-icon.png" alt="Mobile apps" className="front" />
                                            <img src="/assets/img/services/mobile-game-white-icon.png" alt="Mobile apps" className="ro" />
                                        </figure>
                                        <h4 className="hd">Mobile Games Development</h4>
                                        <div className="text">			<p>We all used to get rid from all worries and distresses of our lives by doing various leisure activities. Playing game is one of them</p>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <figure className="service-icon">
                                            <img src="/assets/img/services/mobile-team-icon.png" alt="Mobile apps" className="front" />
                                            <img src="/assets/img/services/mobile-team-white-icon.png" alt="Mobile apps" className="ro" />
                                        </figure>
                                        <h4 className="hd">Hire Mobile Apps Dedicated Team</h4>
                                        <div className="text"><p>Each business requires a mobile application developer to ensure its presence in the play stores that millions of users are accessing nowadays.</p></div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <figure className="service-icon">
                                            <img src="/assets/img/services/ipad-app-icon.png" alt="Mobile apps" className="front" />
                                            <img src="/assets/img/services/ipad-app-white-icon.png" alt="Mobile apps" className="ro" />
                                        </figure>
                                        <h4 className="hd">iPad Apps Development</h4>
                                        <div className="text"><p>iPad is the most assisting and entertaining source in today&rsquo;s generation. It brings all such interactive applications to make the tasks easier for the users.</p></div>
                                    </Link>
                                </li>
                            </ul>
                            <ul className={`serviceList flexBox ${activeTab === 2 ? "active" : ""}`} id="tab2">
                                <li>
                                    <Link href="#">
                                        <figure className="service-icon">
                                            <img src="/assets/img/services/artificial-intelligence-icon.png" alt="Artificial Intelligence" className="front" />
                                            <img src="/assets/img/services/artificial-intelligence-white-icon.png" alt="Artificial Intelligence" className="ro" />
                                        </figure>
                                        <h4 className="hd">Artificial Intelligence</h4>
                                        <div className="text"><p>Artificial Intelligence is a rapidly growing technology which enables the machine to imitate the human behavior so to offer the same experience to the users.</p></div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <figure className="service-icon">
                                            <img src="/assets/img/services/live-game-icon.png" alt="Artificial Intelligence" className="front" />
                                            <img src="/assets/img/services/live-game-white-icon.png" alt="Artificial Intelligence" className="ro" />
                                        </figure>
                                        <h4 className="hd">Hybrid Games Development</h4>
                                        <div className="text">			<p>We, as a leading mobile app development company, always strive to fulfill our client’s needs by providing them with the effective services.</p>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <figure className="service-icon">
                                            <img src="/assets/img/services/augmented-reality-icon.png" alt="Artificial Intelligence" className="front" />
                                            <img src="/assets/img/services/augmented-reality-white-icon.png" alt="Artificial Intelligence" className="ro" />
                                        </figure>
                                        <h4 className="hd">Augmented Reality Apps Development</h4>
                                        <div className="text"><p>Mobile technology is one of those things that has truly evolved to become a popular buzz in the modern digital world.</p></div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <figure className="service-icon">
                                            <img src="/assets/img/services/virtual-reality-icon.png" alt="Artificial Intelligence" className="front" />
                                            <img src="/assets/img/services/virtual-reality-white-icon.png" alt="Artificial Intelligence" className="ro" />
                                        </figure>
                                        <h4 className="hd">Virtual Reality Apps Development</h4>
                                        <div className="text"><p>The fact that technology is now capable of creating things/objects that have never existed in real life in undeniably true.</p></div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <figure className="service-icon">
                                            <img src="/assets/img/services/aws-cloud-icon.png" alt="Artificial Intelligence" className="front" />
                                            <img src="/assets/img/services/aws-cloud-white-icon.png" alt="Artificial Intelligence" className="ro" />
                                        </figure>
                                        <h4 className="hd">AWS Cloud Management</h4>
                                        <div className="text">			<p>Cloud management involves methods and processes that help administrators control and streamline their cloud-based services.</p>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <figure className="service-icon">
                                            <img src="/assets/img/services/mobile-hire-app.png" alt="Artificial Intelligence" className="front" />
                                            <img src="/assets/img/services/mobile-hire-hover.png" alt="Artificial Intelligence" className="ro" />
                                        </figure>
                                        <h4 className="hd">Hire Mobile App Developer</h4>
                                        <div className="text"><p>Each business requires a mobile application developer to ensure its presence in the play stores that millions of users are accessing nowadays.</p></div>
                                    </Link>
                                </li>

                            </ul>
                            <ul className={`serviceList flexBox ${activeTab === 3 ? "active" : ""}`} id="tab3">
                                <li>
                                    <Link href="#">
                                        <figure className="service-icon">
                                            <img src="/assets/img/services/unit-testing-icon.png" alt="Unit Testing" className="front" />
                                            <img src="/assets/img/services/unit-testing-white-icon.png" alt="Unit Testing" className="ro" />
                                        </figure>
                                        <h4 className="hd">Component &amp; Unit Testing</h4>
                                        <div className="text"><p>Component &amp; Unit Testing services are a fundamental part of Infoicon Technologies Pvt. Ltd. to replenish our customer&rsquo;s unique requirements.</p></div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <figure className="service-icon">
                                            <img src="/assets/img/services/mobile-app-testing-icon.png" alt="Unit Testing" className="front" />
                                            <img src="/assets/img/services/mobile-app-testing-white-icon.png" alt="Unit Testing" className="ro" />
                                        </figure>
                                        <h4 className="hd">Mobile App Testing</h4>
                                        <div className="text"><p>The migration of user&rsquo;s interest from computers to various hand held mobile devices has boosted the usage of mobile applications.</p></div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <figure className="service-icon">
                                            <img src="/assets/img/services/web-app-testing-icon.png" alt="Unit Testing" className="front" />
                                            <img src="/assets/img/services/web-app-testing-white-icon.png" alt="Unit Testing" className="ro" />
                                        </figure>
                                        <h4 className="hd">Web Application Testing</h4>
                                        <div className="text"><p>Websites have a primary role in a company&rsquo;s success, and it is supposed to be first-rated in terms of quality and functionality.</p></div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <figure className="service-icon">
                                            <img src="/assets/img/services/automation-testing-icon.png" alt="Unit Testing" className="front" />
                                            <img src="/assets/img/services/automation-testing-white-icon.png" alt="Unit Testing" className="ro" />
                                        </figure>
                                        <h4 className="hd">Automation Testing</h4>
                                        <div className="text"><p>The development team tests the software application before delivering it to their respective clients.</p></div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <figure className="service-icon">
                                            <img src="/assets/img/services/cloud-testing-icon.png" alt="Unit Testing" className="front" />
                                            <img src="/assets/img/services/cloud-testing-white-icon.png" alt="Unit Testing" className="ro" />
                                        </figure>
                                        <h4 className="hd">SAAS/ Cloud Testing</h4>
                                        <div className="text"><p><strong id="isPasted">SaaS Cloud Testing</strong> refers to the approach used to ensure the functionality of an application built with the software as a service (SaaS) development model.</p></div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <figure className="service-icon">
                                            <img src="/assets/img/services/gaming-testing-icon.png" alt="Unit Testing" className="front" />
                                            <img src="/assets/img/services/gaming-testing-white-icon.png" alt="Unit Testing" className="ro" />
                                        </figure>
                                        <h4 className="hd">Gaming Testing</h4>
                                        <div className="text"><p>If you are an adult or a kid, each of us loves to play games on our mobiles or peripherals. Games for different age groups are in great use globally across the world.</p></div>
                                    </Link>
                                </li>
                            </ul>
                            <ul className={`serviceList flexBox ${activeTab === 4 ? "active" : ""}`} id="tab4">
                                <li>
                                    <Link href="#">
                                        <figure className="service-icon">
                                            <img src="/assets/img/services/sforce-development-icon.png" alt="Sforce Development" className="front" />
                                            <img src="/assets/img/services/sforce-development-white-icon.png" alt="Sforce Development" className="ro" />
                                        </figure>
                                        <h4 className="hd">Sforce Development</h4>
                                        <div className="text"><p>In this era of Information Technology, each day, new technology is arising into the market.</p></div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <figure className="service-icon">
                                            <img src="/assets/img/services/cloud-development-icon.png" alt="Sforce Development" className="front" />
                                            <img src="/assets/img/services/cloud-development-white-icon.png" alt="Sforce Development" className="ro" />
                                        </figure>
                                        <h4 className="hd">Cloud Product Development</h4>
                                        <div className="text"><p>These facilities will help you to communicate with your branch office employees more easily and share the needed info with ease for further work.</p></div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <figure className="service-icon">
                                            <img src="/assets/img/services/sharepoint-icon.png" alt="Sforce Development" className="front" />
                                            <img src="/assets/img/services/sharepoint-white-icon.png" alt="Sforce Development" className="ro" />
                                        </figure>
                                        <h4 className="hd">Sharepoint Development</h4>
                                        <div className="text"><p>Most of the applications demand a Sharepoint Custom Application Development as they do not match with the significant SharePoint OOB features.</p></div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <figure className="service-icon">
                                            <img src="/assets/img/services/salesforce-developer-icon.png" alt="Sforce Development" className="front" />
                                            <img src="/assets/img/services/salesforce-developer-white-icon.png" alt="Sforce Development" className="ro" />
                                        </figure>
                                        <h4 className="hd">Hire A Salesforce Developer</h4>
                                        <div className="text"><p>You can Hire a Salesforce developer from Infoicon Technologies Pvt. Ltd. To work offshore to carry out your business goals.</p></div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <figure className="service-icon">
                                            <img src="/assets/img/services/salesforce-integration-icon.png" alt="Sforce Development" className="front" />
                                            <img src="/assets/img/services/salesforce-integration-white-icon.png" alt="Sforce Development" className="ro" />
                                        </figure>
                                        <h4 className="hd">Salesforce Integration</h4>
                                        <div className="text"><p>Salesforce leverages the users to be benefited from the diverse advantages in an integrated manner.</p></div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <figure className="service-icon">
                                            <img src="/assets/img/services/data-migration-icon.png" alt="Sforce Development" className="front" />
                                            <img src="/assets/img/services/data-migration-white-icon.png" alt="Sforce Development" className="ro" />
                                        </figure>
                                        <h4 className="hd">Sharepoint Data Migration</h4>
                                        <div className="text"><p>It connects the people via a number of formal and informal business communities within the organization or outside it.</p></div>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="salesforceBox text-center">
                            <div className="awards-sec">
                                <Link href="#" target="_blank" className="nasscom">
                                    <img alt="nasscom" src="/assets/img/certificates/nasscom-logo.png" />
                                </Link>
                            </div>

                            <div className="awards-sec">
                                <Link href="#" target="_blank" className="iso-certified">
                                    <img alt="iso cetified" src="/assets/img/certificates/iso-certified-logo.png" />
                                </Link>
                            </div>

                            <div className="awards-sec">
                                <Link href="#"
                                    target="_blank" className="dmca">
                                    <img alt="dmca" src="/assets/img/certificates/dmca-logo.png" />
                                </Link>
                                <Link href="https://www.credly.com/users/noshad-ali.m2cert/badges" target="_blank"
                                    className="magento-certified">
                                    <img alt="magento certified" src="/assets/img/certificates/magento-certified-logo.png" />
                                </Link>
                            </div>

                            <div className="awards-sec">
                                <Link href="https://skillshop.exceedlms.com/profiles/e0a73a8324fb4a27be8cfd042962f925"
                                    target="_blank" className="google-partner">
                                    <img src="/assets/img/certificates/google-partner-logo.png" alt="google partner" />
                                </Link>
                                <Link href="https://learninglab.about.ads.microsoft.com/certification/membership-profile/id/368050/infoicon-technologies"
                                    target="_blank" className="microsoft-partner">
                                    <img src="/assets/img/certificates/microsoft-marketing-partner-logo.png" alt="Microsoft Marketing Partner Logo"
                                        width="170" />
                                </Link>
                            </div>

                            <div className="awards-sec">
                                <Link href="#" className="google-adword">
                                    <img src="/assets/img/certificates/google-adword-logo.png" alt="awards" />
                                </Link>
                            </div>
                            <div className="awards-sec">
                                <Link href="#" className="amazon-web">
                                    <img src="/assets/img/certificates/amazon-web-services-logo.png" alt="" />
                                </Link>
                            </div>
                            <div className="awards-sec clutch-section">
                                <Link href="https://clutch.co/profile/infoicon-technologies-0?utm_source=widget&utm_medium=9&utm_campaign=widget&utm_content=num_reviews&utm_term=www.infoicontechnologies.com#reviews"
                                    target="_blank" className="clutch-logo">
                                    <img src="/assets/img/certificates/clutch-logo.png" alt="clutch" />
                                </Link>
                                <Link href="https://www.credly.com/users/infoicon-technologies1/badges" target="_blank"
                                    className="amazon-web">
                                    <img src="/assets/img/certificates/microsoft-badge.png" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services