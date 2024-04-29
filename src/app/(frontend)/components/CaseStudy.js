import Link from 'next/link'
import React from 'react'

const CaseStudy = () => {
    return (
        <section className="midCon pfCon pt50">
            <div className="projects-wrap">
                <div className="section-head text-center text-white">
                    <h5><i className="fas fa-file-invoice"></i> Our Case Study</h5>
                </div>
                <h5 className="mainHd tac">Introduce Our Projects</h5>
                <div className="hdText tac mb20">
                    We build and transform your business with our leading services and over 12+ years of business experience. With
                    affordable technology solutions for every business, we create the latest business solutions tailored for every
                    client’s need to add value, simplify business processes and accelerate productions. We cater our service to
                    Real-estate, Marketing, Health Care, Oil & Gas, Automobile, Financial, Shopping, Food, Media & Entertainment and
                    1000+ more industries.
                </div>

                <div className="flexBox">
                    <div className="pfLft">
                        <div className="pfInner" style={{ background: 'url(/assets/img/case-study/bulletproofusa.jpg) no-repeat center top' }}>

                            <img loading="lazy" src="/assets/img/case-study/bulletproofusa.jpg" alt="" />
                            <div className="name"><img src="/assets/img/case-study/bultbroof-logo-white.png" alt="" /></div>
                            <div className="overBox">
                                <div>
                                    <div className="hd"><img src="/assets/img/case-study/bultbroof-logo-white.png" alt="" /></div>

                                    <div><Link href="#" className="learnMore"><span>View
                                        Portfolio</span></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pfRgt">
                        <div className="pfRgtTopC flexBox">
                            <div className="pfRgtTop">
                                <div className="pfInner" style={{ background: 'url(/assets/img/case-study/bonjob-img.jpg) no-repeat center top' }}>
                                    <img src="/assets/img/case-study/bonjob-img.jpg" alt="" />
                                    <div className="name"><img src="/assets/img/case-study/bonjob-logo.png" alt="" /></div>
                                    <div className="overBox">
                                        <div>
                                            <div className="hd"><img src="/assets/img/case-study/bonjob-logo.png" alt="" /></div>
                                            <div className="mb20"><p><br /></p></div>
                                            <div><Link href="#" className="learnMore"><span>View
                                                Portfolio</span></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pfRgtTop">
                                <div className="pfInner" style={{ background: ' url(/assets/img/case-study/amco-img.jpg) no-repeat center top' }}>
                                    <img src="/assets/img/case-study/amco-img.jpg" alt="" />
                                    <div className="name"><img src="/assets/img/case-study/amco-logo.png" alt="" /></div>
                                    <div className="overBox">
                                        <div>
                                            <div className="hd"><img src="/assets/img/case-study/amco-logo.png" alt="" /></div>
                                            <div className="mb20"><p><br /></p></div>
                                            <div><Link href="#" className="learnMore"><span>View
                                                Portfolio</span></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pfRgtBot">
                                <div className="pfInner" style={{ background: 'url(/assets/img/case-study/mayesh-img.jpg) no-repeat center top' }}>
                                    <img src="/assets/img/case-study/mayesh-img.jpg" alt="" />
                                    <div className="name"><img src="/assets/img/case-study/mayesh-logo.png" alt="" /></div>
                                    <div className="overBox">
                                        <div>
                                            <div className="hd"><img src="/assets/img/case-study/mayesh-logo.png" alt="" /></div>
                                            <div className="mb20"><p><br /></p></div>
                                            <div><Link href="#" className="learnMore"><span>View
                                                Portfolio</span></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pfRgtBot">
                                <div className="pfInner" style={{ background: 'url(/assets/img/case-study/dam-itcanada-img.jpg) no-repeat center top' }}>
                                    <img src="/assets/img/case-study/dam-itcanada-img.jpg" alt="" />
                                    <div className="name"><img src="/assets/img/case-study/dam-itcanada-logo.png" alt="" /></div>
                                    <div className="overBox">
                                        <div>
                                            <div className="hd"><img src="/assets/img/case-study/dam-itcanada-logo.png" alt="" /></div>
                                            <div className="mb20"><p><br /></p></div>
                                            <div><Link href="#" className="learnMore"><span>View
                                                Portfolio</span></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pfRgtBot">
                                <div className="pfInner" style={{ background: 'url(/assets/img/case-study/latiniusa-img.jpg) no-repeat center top' }}>
                                    <img src="/assets/img/case-study/latiniusa-img.jpg" alt="" />
                                    <div className="name"><img src="/assets/img/case-study/latiniusa-logo.png" alt="" /></div>
                                    <div className="overBox">
                                        <div>
                                            <div className="hd"><img src="/assets/img/case-study/latiniusa-logo.png" alt="" /></div>
                                            <div className="mb20"><p><br /></p></div>
                                            <div><Link href="#" className="learnMore"><span>View
                                                Portfolio</span></Link></div>
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

export default CaseStudy