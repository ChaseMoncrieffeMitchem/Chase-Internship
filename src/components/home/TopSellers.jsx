import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Skeleton from "../UI/Skeleton";
import AOS from "aos";
import "aos/dist/aos.css";

const TopSellers = () => {
  AOS.init({
    easing: "ease",
  });

  const [topSellers, setTopSellers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTopSellers() {
      const { data } = await axios.get(
        "https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers"
      );
      setTopSellers(data);
      setLoading(false);
    }
    fetchTopSellers();
  }, []);

  return (
    <section id="section-popular" className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <div data-aos="fade-up" data-aos-duration="1300">
                <h2>Top Sellers</h2>
              </div>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-12">
            <div data-aos="fade-up" data-aos-duration="1300">
              <ol className="author_list">
                {loading
                  ? new Array(12).fill(0).map((_, index) => (
                      <li key={index}>
                        <div className="author_list_pp">
                          <Skeleton
                            className="lazy pp-author"
                            width="60px"
                            height="60px"
                            borderRadius="50%"
                          />
                          <i className="fa fa-check"></i>
                        </div>
                        <div className="author_list_info">
                          <Skeleton width="130px" height="15px" />
                          <br />
                          <Skeleton width="45px" height="15px" />
                        </div>
                      </li>
                    ))
                  : topSellers.map((topSeller) => (
                      <li key={topSeller.id}>
                        <div className="author_list_pp">
                          <Link to={"/author/" + topSeller.authorId}>
                            <img
                              className="lazy pp-author"
                              src={topSeller.authorImage}
                              alt=""
                            />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="author_list_info">
                          <Link to={"/author/" + topSeller.authorId}>
                            {topSeller.authorName}
                          </Link>
                          <span>{topSeller.price}</span>
                        </div>
                      </li>
                    ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
