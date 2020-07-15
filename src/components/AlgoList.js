import React, { useState, useEffect } from "react";
import Rheostat from "rheostat";
import ThemedStyleSheet from "react-with-styles/lib/ThemedStyleSheet";
import aphroditeInterface from "react-with-styles-interface-aphrodite";
import DefaultTheme from "rheostat/lib/themes/DefaultTheme";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import PaginationPage from "./Pagination.js";
import { useHistory, useLocation } from "react-router-dom";
import PaginationLink from "./PaginationLink.js";
import Card2 from "./Card.js"
ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme(DefaultTheme);
export default function AlgoList() {
  const [items, setItems] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [isDragging, setIsDragging] = useState(false);
  const [exp, setExp] = useState([]);
  const [tempMinPrice, setTempMinPrice] = useState(1);
  const [tempMaxPrice, setTempMaxPrice] = useState(1000);
  const [pageNum, setPageNum] = useState(1);
  const [maxPageNum, setMaxPageNum] = useState(0);
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const QUERYSTR_PREFIX = "q";

  const handleChange2 = (e) => {
    setMinPrice(e.values[0]);
    setMaxPrice(e.values[1]);
  };
  const handleChange = (e) => {
    setMinPrice(e.values[0]);
    setMaxPrice(e.values[1]);
  };
  const handleValuesUpdated = (e) => {
    setTempMinPrice(e.values[0]);
    setTempMaxPrice(e.values[1]);
  };
  const goNextPage = () => {
    setPageNum(pageNum + 1);
  };

  const goPrevPage = () => {
    setPageNum(pageNum - 1);
  };

  //   const handleSearch = (e) => {
  //       let filteredCards = originalCards;
  //       if(e){

  //       }
  //       if(keyword){

  //       }

  //   }
  //   const Experience = ({ title, pictureUrl, country, price, duration, _id }) => (
  //     <div>
  //       <Link to={`experience/${_id}`}>
  //       <RecipeReviewCard
  //         title={title}
  //         pictureURL={pictureUrl}
  //         country={country}
  //         price={price}
  //         duration={duration}

  //       />
  //       </Link>
  //     </div>
  //   );
  return (
    <div>
      <MDBContainer>
        <div className="m-5">
          {" "}
          <MDBCol xs={12} md={10}>
            <MDBRow>
              <div className="input-group md-form form-sm form-1 pl-0">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text purple lighten-3"
                    id="basic-text1"
                  >
                    <MDBIcon className="text-white" icon="search" />
                  </span>
                </div>
                <input
                  className="form-control my-0 py-1"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            </MDBRow>
          </MDBCol>
          <Rheostat
            min={1}
            max={1000}
            values={[minPrice, maxPrice]}
            onValuesUpdated={handleValuesUpdated}
            onChange={handleChange}
          />
          <p>
            Min Price {tempMinPrice} <br /> Max Price {tempMaxPrice}
          </p>

        </div>
        <Card2 />
        <PaginationPage />
      </MDBContainer>
    </div>
  );
}
