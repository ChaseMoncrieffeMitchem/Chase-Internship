import React, { useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "../UI/Skeleton";
import Countdown from "../Countdown";
import UserCard from "../card/UserCard";

const AuthorItems = ({ author, nft, loading }) => {


  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {loading
            ? new Array(8).fill(0).map((_, index) => (
                <div
                  className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                  key={index}
                >
                  <div className="nft__item">
                    <div className="author_list_pp">
                      <Skeleton width="60px" height="60px" borderRadius={999} />
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="nft__item_wrap">
                      <Skeleton width="100%" height="100%" borderRadius={1} />
                    </div>
                    <div className="nft__item_info margin">
                      <Skeleton width="100px" height="18px" />
                      <div className="nft__item_price">
                        <Skeleton width="65px" height="14px" />
                      </div>
                      <div className="nft__item_like">
                        <Skeleton width="25px" height="12px" />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : nft.map((item) => (
                <div
                  data-aos="fade-in"
                  className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                  key={item.nftId}
                >
                  <UserCard item={item}
                  author={author}/>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
