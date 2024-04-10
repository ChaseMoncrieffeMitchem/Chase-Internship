import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Countdown from "../Countdown";

export default function UserCard() {
  const [exploreItems, setExploreItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchExploreItems() {
      const { data } = await axios.get(
        "https://us-central1-nft-cloud-functions.cloudfunctions.net/explore"
      );
      setExploreItems(data);
      setLoading(false);
      console.log(data);
    }
    fetchExploreItems();
  }, []);

  return (
    <>
      {loading
        ? new Array(8).fill(0).map((_, index) => (
            <div
              key={index}
              className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
              style={{ display: "block", backgroundSize: "cover" }}
            >
              <div className="nft__item">
                <div className="author_list_pp">
                  <Link
                    to="/author"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                  >
                    <img className="lazy" src="" alt="" />
                    <i className="fa fa-check"></i>
                  </Link>
                </div>
                <div className="de_countdown">5h 30m 32s</div>

                <div className="nft__item_wrap">
                  <div className="nft__item_extra">
                    <div className="nft__item_buttons">
                      <button>Buy Now</button>
                      <div className="nft__item_share">
                        <h4>Share</h4>
                        <a href="" target="_blank" rel="noreferrer">
                          <i className="fa fa-facebook fa-lg"></i>
                        </a>
                        <a href="" target="_blank" rel="noreferrer">
                          <i className="fa fa-twitter fa-lg"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-envelope fa-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <Link to="/item-details">
                    <img
                      src=""
                      className="lazy nft__item_preview"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="nft__item_info">
                  <Link to="/item-details">
                    <h4>Pinky Ocean</h4>
                  </Link>
                  <div className="nft__item_price">1.74 ETH</div>
                  <div className="nft__item_like">
                    <i className="fa fa-heart"></i>
                    <span>69</span>
                  </div>
                </div>
              </div>
            </div>
          )) : exploreItems.map((exploreItem) => (
      <div key={exploreItem.id}>
        <div className="nft__item">
          <div className="author_list_pp">
            <Link
              to="/author"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Creator: Monica Lucas"
            >
              <img className="lazy" src={exploreItem.authorImage} alt="" />
              <i className="fa fa-check"></i>
            </Link>
          </div>
          {exploreItem.expiryDate && (
            <>
              <Countdown expiryDate={exploreItem.expiryDate} />
            </>
          )}

          <div className="nft__item_wrap">
            <div className="nft__item_extra">
              <div className="nft__item_buttons">
                <button>Buy Now</button>
                <div className="nft__item_share">
                  <h4>Share</h4>
                  <a href="" target="_blank" rel="noreferrer">
                    <i className="fa fa-facebook fa-lg"></i>
                  </a>
                  <a href="" target="_blank" rel="noreferrer">
                    <i className="fa fa-twitter fa-lg"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-envelope fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>

            <Link to="/item-details">
              <img
                src={exploreItem.nftImage}
                className="lazy nft__item_preview"
                alt=""
              />
            </Link>
          </div>
          <div className="nft__item_info">
            <Link to="/item-details">
              <h4>{exploreItem.title}</h4>
            </Link>
            <div className="nft__item_price">{exploreItem.price} ETH</div>
            <div className="nft__item_like">
              <i className="fa fa-heart"></i>
              <span>{exploreItem.likes}</span>
            </div>
          </div>
        </div>
      </div>
      ))}
    </>
  );
}
