'use client'
import Link from 'next/link'
import React from 'react'
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


const UpdateNews = () => {
    return (
        <div className="home-blog-main">
            <h3>NEWS & UPDATES</h3>
            <OwlCarousel className="testimonials home-blog" {...options}>
                <div className="home-blog-content">
                    <p>In the modern digital era, a mere web presence is inadequate for a brand's success, especially as users
                        increasingly shift towards mobile platforms. With smartphones becoming ubiquitous, mobile applications have
                        become indispensable marketing tools for businesses, offering a pletho...</p>
                    <Link className="home-blog-anchor" href="#">Read More</Link>
                </div>

                <div className="home-blog-content">
                    <p>In the ever-evolving digital landscape, user interaction has become a cornerstone for the success of mobile
                        applications. One innovative feature that has gained prominence is the Customer Wall. This dynamic element
                        empowers businesses to foster real-time communication, gather insta...</p>
                    <Link className="home-blog-anchor" href="#">Read More</Link>
                </div>

                <div className="home-blog-content">
                    <p>In 2023, we have already witnessed a huge rise in the field of digital marketing. It is
                        becoming one of the booming markets to streamline the business online presence. And, the
                        main credit goes to the AI content and numerous Google updates to...</p>
                    <Link className="home-blog-anchor" href="#">Read More</Link>
                </div>

                <div className="home-blog-content">
                    <p>The world is witnessing a surge in the digital landscape. No one is untouched by
                        digitalisation. As we know, mobile users are increasing day by day. In the last few years,
                        the mobile app world has seen a significant increase in the sector. Wh...</p>
                    <Link className="home-blog-anchor" href="#">Read More</Link>
                </div>

                <div className="home-blog-content">
                    <p>With the evolving technical landscape technology and finance need sheer security and a
                        transparent system to record transactions has never been more crucial. Enter the world of
                        blockchain technology, a revolutionary concept that promises to r...</p>
                    <Link className="home-blog-anchor" href="#">Read More</Link>
                </div>
            </OwlCarousel>
        </div>
    )
}

export default UpdateNews