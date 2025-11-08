import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Chat from "./Chat";

import slide1 from "./assets/images/img-1920x642-cosmetics-banner.webp";
import slide2 from "./assets/images/img-1920x642-non-prescription-drugs.webp";
import slide3 from "./assets/images/img-1920x642-prescription_drugs_banner.webp";

import case1 from "./assets/images/case-study-01.png";

function SliderComponent() {
  const settings = {
    dots: true,          // Show dots navigation
    infinite: true,      // Infinite loop
    speed: 200,          // Transition speed
    slidesToShow: 1,     // Number of slides shown
    slidesToScroll: 1,   // Slides per scroll
    autoplay: true,      // Auto sliding
    autoplaySpeed: 2000, // Interval
  };

  return (
    <div className="custom-slick-slider">
      <Slider {...settings}>
        <div>
          <img className="img-fluid" src={slide1} alt="Slide 1" />

        </div>
        <div>
          <img className="img-fluid" src={slide2} alt="Slide 2" />
        </div>
        <div>
          <img className="img-fluid" src={slide3} alt="Slide 3" />
        </div>
      </Slider>
      <div className="container digital-service">
        <div className="row">
          <div className="col-lg-12 col-12 text-center ">
            <h1>Abouts <span>Us</span></h1>
            <p> with Vidushi Infotech. We craft intelligent models that create content, design, and innovate with ease. From generating creative designs, automating content production, or streamlining workflows, our generative AI solutions drive efficiency and creativity like never before.</p>
            <p>Discover the immense potential of generative AI in revolutionizing industries
              and forging new frontiers. This insightful feature explores how advanced
              artificial intelligence is not only transforming business operations but also
              pushing the boundaries of innovation and strategic growth.</p>
          </div>
        </div>
      </div>



      <div className="container digital-service">
        <h1 className="new-h2-heading"> Case <span>Studies</span>
        </h1>
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <img className="img-fluid" src={case1} alt="Case Study" />
            <button className="btn btn-primary mt-3 mb-3" data-toggle="modal"> Download </button>
          </div>
          <div className="col-lg-4 col-md-4">
            <img className="img-fluid" src={case1} alt="Case Study" />
            <button className="btn btn-primary mt-3 mb-3" data-toggle="modal"> Download </button>
          </div>
          <div className="col-lg-4 col-md-4">
            <img className="img-fluid" src={case1} alt="Case Study" />
            <button className="btn btn-primary mt-3 mb-3" data-toggle="modal"> Download </button>
          </div>
        </div>
      </div>

      <Chat />
    </div>
  );
}

export default SliderComponent;
