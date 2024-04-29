import Link from "next/link";
import Slider from "./(frontend)/components/Slider";
import Services from "./(frontend)/components/Services";
import CaseStudy from "./(frontend)/components/CaseStudy";
import WhyChooesUs from "./(frontend)/components/WhyChooesUs";
import PerfectSolution from "./(frontend)/components/PerfectSolution";
import UpdateNews from "./(frontend)/components/UpdateNews";
import Newsletter from "./(frontend)/components/Newsletter";
import VideoFooter from "./(frontend)/components/VideoFooter";

export default function Home() {
    return (

        <div className="mainCon">
            <Slider />

            <section className="aboutus-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 align-self-center">
                            <div className="ot-heading">
                                <span><i className="fas fa-building"></i> about company</span>
                                <h2 className="main-heading">Your Partner for <br /> Software Innovation</h2>
                            </div>
                            <p>Infoicon Technologies is a next generation global leader in IT industry enabling 5000+ clients from different countries viz U.S.A, Australia, Canada, and Europe like:
                                <strong>Switzerland, Germany, France, Denmark, Netherlands, Spain, Sweden, United Kingdom</strong> ….etc. to maneuver their digital transformation.</p>
                            <p>With over 12 years of experience, we proficiently navigate our clients throughout their digital journey.</p>
                            <p>All we can do by empowering the venture with our unmatched solution that helps prioritize the execution of the revolution. We also strengthen the business via employing innovative strategies and always-on leaning approach to deliver customer delight.</p>

                        </div>
                        <div className="col-lg-6 col-md-12 align-self-center">
                            <div className="about-right about-right1">
                                <div className="home-about-video d-flex justify-content-center">

                                    <div className="video-btn align-self-center">
                                        <img src="/assets/img/home-about.jpg" alt="about us" className="img-fluid" />
                                        <Link href="#" className="btn-play">
                                            <span className="circle-1"></span>
                                            <span className="circle-2"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Services />

            <CaseStudy />

            <WhyChooesUs />

            <PerfectSolution />

            <section className="letsTalk" style={{ backgroundImage: 'url(/assets/img/nesletter-bg.jpg)' }}>
                <div className="home-container pr-0">
                    <div className="row w-100 mr-0 ml-0 text-center">
                        <div className="col-lg-6">
                            <Newsletter />

                            <UpdateNews />
                        </div>

                        <div className="col-lg-6 pr-0">
                            <div className="about-right">
                                <VideoFooter />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
