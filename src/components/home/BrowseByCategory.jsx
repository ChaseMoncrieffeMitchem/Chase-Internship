import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const BrowseByCategory = () => {
  AOS.init({
    easing: "ease",
  });

  return (
    <section id="section-category" className="no-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <div data-aos="fade-up" data-aos-delay="50">
                <h2>Browse by category</h2>
              </div>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <Link
              to="/explore"
              className="icon-box style-2 rounded"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <i className="fa fa-image"></i>
              <span>Art</span>
            </Link>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <Link
              to="/explore"
              className="icon-box style-2 rounded"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="200"
            >
              <i className="fa fa-music"></i>
              <span>Music</span>
            </Link>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <Link
              to="/explore"
              className="icon-box style-2 rounded"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="400"
            >
              <i className="fa fa-search"></i>
              <span>Domain Names</span>
            </Link>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <Link
              to="/explore"
              className="icon-box style-2 rounded"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="600"
            >
              <i className="fa fa-globe"></i>
              <span>Virtual Worlds</span>
            </Link>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <Link
              to="/explore"
              className="icon-box style-2 rounded"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="800"
            >
              <i className="fa fa-vcard"></i>
              <span>Trading Cards</span>
            </Link>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mb-sm-30">
            <Link
              to="/explore"
              className="icon-box style-2 rounded"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="1000"
            >
              <i className="fa fa-th"></i>
              <span>Collectibles</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
