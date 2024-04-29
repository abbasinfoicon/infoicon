'use client'
import React from 'react'
import Link from 'next/link'
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false, });

const options = {
    loop: true,
    margin: 0,
    autoplay: true,
    items: 1,
    nav: false,
    dots: true,
    autoplayHoverPause: true
}

const WhyChooesUs = () => {
    return (
        <section className="why-choose-us-area style-two pt-115 pb-90">
            <div className="home-container">
                <div className="row">
                    <div className="col-lg-5 col-md-12">
                        <div className="dreamit-section-title  pb-30">
                            <div className="about-bg-bar"></div>
                            <div className="dreamit-section-sub-title">
                                <h5><i className="fas fa-search"></i> Why Choose Us</h5>
                            </div>
                            <div className="dreamit-section-main-title">
                                <h2 className="text-white">We deal with the aspects of <br />professional <span>IT Services</span></h2>
                            </div>
                            <div className="dreamit-section-content-text">
                                <p>
                                    We deliver top-notch quality assistance for all IT services. A dedicated and inquisitive team of professionals who giving you the time and confidence to focus on running your business. Infoicon Technologies is at support of clients around the clock and advice to enhancing productivity and real competitive edge.</p>
                            </div>

                            <div className="clientsays">
                                <OwlCarousel className="testimonials" {...options}>
                                    <div className="testimonial-content">
                                        <figure className="customer-img">
                                            <img src="/assets/img/client/tstm2.jpg" alt="" />
                                            <i className="fas fa-quote-left"></i>
                                        </figure>
                                        <p>One of the most demanding and trusted Web Development Company in India I have ever seen. Infoicon Technologies accomplish all its relevant goals with great perfection and outstanding results. The moment I contacted it, I have found my website into a miracle converting all the latest technology introducing into my running pages. Thanks to Infoicon Technologies.</p>
                                        <p className="mt-2"><b>Olafur, UK</b></p>
                                    </div>
                                    <div className="testimonial-content">
                                        <figure className="customer-img">
                                            <img src="/assets/img/client/tstm3.jpg" alt="" />
                                            <i className="fas fa-quote-left"></i>
                                        </figure>
                                        <p>I am the most passionate user of iPhone products and so carry the whole ranges of it but since last few months; I started noticing some problems in my iPhone applications that affected my online world. But the moment I found Infoicon Technologies, I am today running ceaselessly with my favorite iPhone. The dedicated iPhone Apps developers assisted me greatly by installing their smart applications which they even monitor and manage too.</p>
                                        <p className="mt-2"><b>Niki, Denmark</b></p>
                                    </div>
                                    <div className="testimonial-content">
                                        <figure className="customer-img">
                                            <img src="/assets/img/client/tstm4.jpg" alt="" />
                                            <i className="fas fa-quote-left"></i>
                                        </figure>
                                        <p>As a garment business owner based in Chicago, I was really worried of getting mass attention for my business. Thanks to Infoicon Technologies that brought great space to my business in the online world through their outstanding Digital Brand Marketing services. Today, my products are widely being acclaimed by tremendous consumers and I have received multiple orders through my impressive e-commerce site being designed and developed by Infoicon Technologies.</p>
                                        <p className="mt-2"><b>Andrei, USA</b></p>
                                    </div>
                                    <div className="testimonial-content">
                                        <figure className="customer-img">
                                            <img src="/assets/img/client/tstm6.jpg" alt="" />
                                            <i className="fas fa-quote-left"></i>
                                        </figure>
                                        <p>I was really wondering how I can find a perfect e-commerce solution to my website when my consumers will place an order. Will it be safe from any kind of security issues? Will be my customers able to find satisfied online transaction performances? All these questions were solved in fraction of seconds; once I approached India&rsquo;s most trusted web development company-Infoicon Technologies. The company has the best e-commerce solutions with the usage of open source development applications to assure a safe and protect e-commerce transactions. I am really very pleased to receive their dedicated services.</p>
                                        <p className="mt-2"><b>Jhon, Australia</b></p>
                                    </div>
                                    <div className="testimonial-content">
                                        <figure className="customer-img">
                                            <img src="/assets/img/client/tstm1.jpg" alt="" />
                                            <i className="fas fa-quote-left"></i>
                                        </figure>
                                        <p>India’s most trusted Web Development Company, Infoicon Technologies has created my website into a unique platform to share information about my company and services in a broader way. I can now receive multiple queries from my clients and can now easily communicate to my overseas clients in a more interactive and effective way.</p>

                                        <p className="mt-2"><b>Robert, Australia</b></p>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12">
                        <div className="choose">
                            <div className="row topper3">
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-choose-box">
                                        <div className="choose-us-content">
                                            <div className="choose-us-icon">
                                                <span>
                                                    <img src="/assets/img/icons/mobile-app-white.png" alt="Mobile apps" className="front" />
                                                </span>
                                            </div>
                                            <div className="choose-number">
                                                <h1>01</h1>
                                            </div>
                                            <div className="choose-title">
                                                <h2><Link href="#">Mobile Development Store</Link></h2>
                                            </div>
                                            <div className="choose-content-text"><p>Mobile app development helps the individual business or a group to build up new contacts and later on use them for different marketing campaigns</p></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-choose-box">
                                        <div className="choose-us-content">
                                            <div className="choose-us-icon">
                                                <span>
                                                    <img src="/assets/img/icons/web-development.png" alt="Mobile apps" className="front" />
                                                </span>
                                            </div>
                                            <div className="choose-number">
                                                <h1>02</h1>
                                            </div>
                                            <div className="choose-title">
                                                <h2><Link href="#">Web development store</Link></h2>
                                            </div>
                                            <div className="choose-content-text"><p>With the world going online day by day, the call for designing and developing customer-friendly website is raising with different businesses.</p></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-choose-box">
                                        <div className="choose-us-content">
                                            <div className="choose-us-icon">
                                                <span>
                                                    <img src="/assets/img/icons/digital-marketing.png" alt="Mobile apps" className="front" />
                                                </span>
                                            </div>
                                            <div className="choose-number">
                                                <h1>03</h1>
                                            </div>
                                            <div className="choose-title">
                                                <h2><Link href="#">Digital marketing store</Link></h2>
                                            </div>
                                            <div className="choose-content-text"><p>We believe that a digital marketing strategy is an essential part of marketing strategy in todays scenario.</p></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-choose-box">
                                        <div className="choose-us-content">
                                            <div className="choose-us-icon">
                                                <span>
                                                    <img src="/assets/img/icons/software-development.png" alt="Mobile apps" className="front" />
                                                </span>
                                            </div>
                                            <div className="choose-number">
                                                <h1>04</h1>
                                            </div>
                                            <div className="choose-title">
                                                <h2><Link href="#">Software development store</Link></h2>
                                            </div>
                                            <div className="choose-content-text"><p>With an expertise to software development package and products we at Infoicon Technologies help you to exceed your business demands of innovation through software.</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooesUs