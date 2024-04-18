import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UserCard from "../card/UserCard";
import SkeletonCard from "../card/SkeletonCard";
import AOS from "aos";
import "aos/dist/aos.css";

const NewItems = () => {
  AOS.init({
    easing: "ease",
  });

  const [newItems, setNewItems] = useState([]);
  const [loading, setLoading] = useState(true);

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          backgroundColor: "black",
          width: "40px",
          height: "40px",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          backgroundColor: "black",
          width: "40px",
          height: "40px",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 985,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    async function fetchNewItems() {
      const { data } = await axios.get(
        "https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems"
      );
      setNewItems(data);
    }
    fetchNewItems();
    setLoading(false);
  }, []);

  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <div data-aos="fade-up" data-aos-duration="1300">
                <h2>New Items</h2>
              </div>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1300">
            <Slider {...settings}>
              {loading ? (
                <div>
                  <SkeletonCard />
                </div>
              ) : (
                newItems.map((item, index) => (
                  <div key={index}>
                    <UserCard item={item} />
                  </div>
                ))
              )}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
