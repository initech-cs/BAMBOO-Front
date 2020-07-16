import React, { useState, useEffect } from "react";
import Rheostat from "rheostat";
import ThemedStyleSheet from "react-with-styles/lib/ThemedStyleSheet";
import aphroditeInterface from "react-with-styles-interface-aphrodite";
import DefaultTheme from "rheostat/lib/themes/DefaultTheme";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import PaginationPage from "./Pagination.js";
import { useHistory, useLocation, Link } from "react-router-dom";
import PaginationLink from "./PaginationLink.js";
import Card2 from "./Card.js";
ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme(DefaultTheme);
export default function AlgoList(props) {
  // const [items, setItems] = useState([]);
  const [minDifficulty, setMinDifficulty] = useState(0);
  const [maxDifficulty, setMaxDifficulty] = useState(10);
  const [isDragging, setIsDragging] = useState(false);
  const [questionList, setQuestionList] = useState(props.QuestionList);
  const [tempMinDiff, setTempMinDiff] = useState();
  const [tempMaxDiff, setTempMaxDiff] = useState(10);
  const [pageNum, setPageNum] = useState(1);
  const [maxPageNum, setMaxPageNum] = useState(0);
  const [item,setItem] = useState([])
  // console.log(props.QuestionList.ques);
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const QUERYSTR_PREFIX = "q";
  console.log("Where is question", props.QuestionList);
  
  useEffect(()=>{
    getItemList()
  },[minDifficulty,maxDifficulty])
  const getItemList = async() => {
    const url = `http://localhost:5000/ques?page=${pageNum}`
    const data = await fetch(url)
    const response = await data.json()
    console.log("AlgoList",response.data.ques)
    setItem(response.data.ques)
  }
  const handleChange = (e) => {
    setMinDifficulty(e.values[0]);
    setMaxDifficulty(e.values[1]);
  };

  const handleValuesUpdated = (e) => {
    setTempMinDiff(e.values[0]);
    setTempMaxDiff(e.values[1]);
  };
  const goNextPage = () => {
    setPageNum(pageNum + 1);
  };

  const goPrevPage = () => {
    setPageNum(pageNum - 1);
  };

  // const handleSearch = (e) => {
  //     let filteredCards = originalCards;
  //     if(e){

  //     }
  //     if(keyword){

  //     }

  // }
  const Question = ({
    title,
    description,
    source,
    sponsors,
    categories,
    logo,
    author,
    difficulties,
    _id,
  }) => (
    <div>
      <Link to={`question/${_id}`}>
        <Card2
          title={title}
          description={description}
          source={source}
          sponsors={sponsors}
          categories={categories}
          logo={logo}
          author={author}
          difficulties={difficulties}
        />
      </Link>
    </div>
  );
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
            min={0}
            max={10}
            values={[minDifficulty, maxDifficulty]}
            onValuesUpdated={handleValuesUpdated}
            onChange={handleChange}
          />
          <p>
            Min Diff {tempMinDiff} <br /> Max Diff {tempMaxDiff}
          </p>
          {item.map((e) => (
            <Question {...e} />
          ))}
        </div>
        <PaginationPage next={goNextPage} back={goPrevPage}/>
      </MDBContainer>
    </div>
  );
}
