
import service1 from "./assets/images/ad_copies_and_creatives.jpg";
import service2 from "./assets/images/campaign_setup.jpg";
import service3 from "./assets/images/transparent_reporting.jpg";

function Services() {
    return (
        <section className="bg-grow">
        <div className="container contact-us">
            <div className="row">
                <div className="col-lg-12 col-12">
                    <div className="text-center pt-5 pb-5">

                        <div className="digital-service">
                            <h1 className="new-h2-heading">Digital Marketing<span> Services</span>
                            </h1>
                            <div className="row">
                            <div className="col-lg-4 col-md-4">
                            <img className="img-fluid" src={service1} alt="service 1" />
                                <h2>Drive More ROI</h2>
                                <p> With a team of strategic marketers, we identify what works best for your
                                    organization and work towards achieving that. Let us engage, interact, build trust,
                                    and market it to the target audience to drive more ROI for your business. </p>
                            </div>
                            <div className="col-lg-4 col-md-4">
                            <img className="img-fluid" src={service2} alt="service 2" />
                                <h2>Build Brand</h2>
                                <p> The right marketing channels, tools, and marketing strategy play a major
                                    role in developing a brand. Targeting the right buyer, leveraging different
                                    marketing channels, and curating well-structured campaigns allow us to build a
                                    connection with your targeted audience, and when your audience is connected, no
                                    one can stop your brand from getting noticed. </p>
                            </div>
                            <div className="col-lg-4 col-md-4">
                            <img className="img-fluid" src={service3} alt="service 3" />
                                <h2> Build Target Audience </h2>
                                <p> Building a target audience is the first step to making your business grow.
                                    With the right audience, you can market your brand and get a better ROI.
                                    Finding audiences is key and our team makes it easier to target the right people.
                                    With the right audience targeting, you can see more registrations, purchases, and
                                    engagement. Let’s expand your reach with talented marketers. </p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Services;