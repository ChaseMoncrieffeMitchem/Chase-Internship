import React from "react";
import Skeleton from "../UI/Skeleton";

export default function SkeletonCard() {
  return (
    <>
      <div className="nft__item">
        <div className="author_list_pp">
          <Skeleton width="60px" height="60px" borderRadius="50%" />
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

          <Skeleton height="300px" width="323px" />
        </div>
        <div className="nft__item_info">
          <Skeleton height="15px" width="160px" />
          <div className="nft__item_price">
            <Skeleton width="160px" height="15px" />
          </div>
          <div className="nft__item_like">
            <i className="fa fa-heart"></i>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
}
