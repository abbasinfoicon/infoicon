"use client"
import React from 'react'
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false, });

const options = {
    loop: true,
    margin: 0,
    autoplaySpeed: 5000,
    autoplay: 8000,
    items: 1,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    nav: false,
    dots: true,
    mouseDrag: false
}

const Slider = () => {
    return (
        <section className="bannerCon">
            <OwlCarousel className="bannerSlider" {...options}>
                <div className="bannerItem" style={{ background: 'url(/assets/img/slider/slider1.jpg) no-repeat center top' }}>
                    <div className="home-container">
                        <div className="bannerBox">
                            <h2 className="bannerHd"><span>Artificial</span> Intelligence and Robotics in Smart City Strategies and Development</h2>
                            <div className="bannerText">
                                <ul className="animated10">
                                    <li><strong>10000+</strong> Solutions has been delivered at various platforms.</li>
                                    <li><strong>12+</strong> successful years in Business.</li>
                                    <li>NASSCOM/ ISO 9001:2015 <strong>certified company.</strong></li>
                                    <li>Providing Offshore services to more than <strong>25 countries.</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bannerItem" style={{ background: 'url(/assets/img/slider/slider2.jpg) no-repeat center top' }}>
                    <div className="home-container">
                        <div className="bannerBox">
                            <h2 className="bannerHd"><span>MACHINE</span> INTELLIGENCE IS THE LAST INVENTION THAT HUMANITY WILL EVER NEED TO MAKE.</h2>
                            <div className="bannerText">
                                <p className="d-none">There are many application development services to choose from. A number of factors set us <br />
                                    apart from our competition including:</p>
                                <ul className="animated10">
                                    <li>We always strive for perfectionism.</li>
                                    <li>We are client oriented and client satisfaction is our number one goal.</li>
                                    <li>We assure return on investment.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bannerItem" style={{ background: 'url(/assets/img/slider/slider3.jpg) no-repeat center top' }}>
                    <div className="home-container">
                        <div className="bannerBox">
                            <h2 className="bannerHd">We Implement <span>Innovating Techniques </span>for Your Enhanced Business Presence.</h2>
                            <div className="bannerText">
                                <p>Create a proper planning to implement the aspects for your project Completion.
                                    Care for your suggestions and implement them with proper understanding.
                                    Positive prospects and assistance from experts to get the things completed on-time. </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bannerItem" style={{ background: "url(/assets/img/slider/slider4.jpg) no-repeat center top" }}>
                    <div className="home-container">
                        <div className="bannerBox">
                            <h2 className="bannerHd"><span>DIGITAL TRANSFORMATION </span>IS A FUNDAMENTAL REALITY FOR BUSINESSES TODAY.</h2>
                            <div className="bannerText">
                                <p>Infoicon is a diversified IT outsourcing company. We assist our clients to achieve their business objectives by successfully outsourcing their non-core business processes and functions in the areas of technology and digital marketing.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bannerItem" style={{ background: 'url(/assets/img/slider/slider5.jpg) no-repeat center top' }}>
                    <div className="home-container">
                        <div className="bannerBox">
                            <h2 className="bannerHd"><span>PROFESSIONALS </span>ASSISTANCE FOR CREATING THE BEST SOLUTIONS</h2>
                            <div className="bannerText">
                                <ul className="animated10" >
                                    <li>Java/J2EE, .NET Development, Mobile Apps Development, Digital Marketing, AWS Migration, Big Data Implementation & Consulting, Cross Platform, ERP, HRM, CRM customizations, CMS Design, Database programming, BPM, Sugar CRM Development, UI & DB Design.</li>
                                    <li>Best AI Solutions & Data Transformation, Node.js, Vue.js, React.js, Angular.js, Ruby & rails, Python ,MongoDB, Augmentation reality, Virtual Reality, Window app development company in India</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </section>
    )
}

export default Slider