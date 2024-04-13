import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../card/UserCard";
import SkeletonCard from "../card/SkeletonCard";

const ExploreItems = () => {
  const [loading, setLoading] = useState(true);
  const [exploreItems, setExploreItems] = useState([]);
  const [itemsLoaded, setItemsLoaded] = useState(8);
  const [filter, setFilter] = useState()

  function onFilter() {
    fetchExploreItems(filter)
  }

  async function fetchExploreItems(value) {
    const { data } = await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=${value || ""}`
    );
    setExploreItems(data);
    setLoading(false);
    console.log(data);
  }

  useEffect(() => {
    fetchExploreItems();
  }, []) 

  return (
    <>
      <div>
        <select
          id="filter-items"
          defaultValue=""
          onChange={(event) => setFilter(event.target.value)}
          value={filter}
          onClick={() => onFilter()}
        >
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
      {loading ? (
        new Array(8).fill(0).map((_, index) => (
          <div
            key={index}
            className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
            style={{ display: "block", backgroundSize: "cover" }}
          >
            <SkeletonCard />
          </div>
        ))
      ) : exploreItems.length ? (
        exploreItems?.slice(0, itemsLoaded).map((exploreItem) => (
          <div
            key={exploreItem.id}
            className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
            style={{ display: "block", backgroundSize: "cover" }}
          >
            <UserCard item={exploreItem} />
          </div>
        ))
      ) : (
        <span>No NFTs Found!</span>
      )}
      <div className="col-md-12 text-center">
        {itemsLoaded < (exploreItems.length && 16) ? (
          <button
            onClick={() => setItemsLoaded(itemsLoaded + 4)}
            id="loadmore"
            className="btn-main lead"
          >
            Load more
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ExploreItems;
