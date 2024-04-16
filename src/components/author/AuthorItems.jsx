import React, { useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "../UI/Skeleton";

const AuthorItems = ({ author, nft, loading }) => {
  // let { id } = useParams()
  // const [authors, setAuthors] = useState([]);

  // useEffect(() => {
  //   async function fetchAuthors() {
  //     const { data } = await axios.get(
  //       `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${
  //         id
  //       }`
  //     );
  //     setLoading(false);
  //     setAuthors(data.nftCollection);
  //     console.log(data.nftCollection);
  //   }
  //   fetchAuthors();
  // }, []);

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
            : 
            nft.map((item) => (
                <div
                  data-aos="fade-in"
                  className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                  key={item.nftId}
                >
                  <div className="nft__item">
                    <div className="author_list_pp">
                      <Link to="">
                        <img className="lazy" src={author.authorImage} alt="" />
                        <i className="fa fa-check"></i>
                      </Link>
                    </div>
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
                      <Link to={`/item-details/${item.nftId}`}>
                        <img
                          src={item.nftImage}
                          className="lazy nft__item_preview"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="nft__item_info">
                      <Link to={`/item-details/${item.nftId}`}>
                        <h4>{item.title}</h4>
                      </Link>
                      <div className="nft__item_price">{item.price} ETH</div>
                      <div className="nft__item_like">
                        <i className="fa fa-heart"></i>
                        <span>{item.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
