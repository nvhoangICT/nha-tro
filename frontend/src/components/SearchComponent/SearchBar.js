import axios from "axios";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "./style.css";

const baseURL = "http://localhost:8081";

function SearchBar({data}) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null);
  const [listProps, setListProps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .post(`${baseURL}/api/read-property`, {
          headers: {"Content-Type": "application/json"},
        })
        .then((response) => {
          setPost(response.data.data);
          setLoading(true);
          setListProps((listProps) => (listProps = response.data.data));
          console.log(listProps);
        });
    };
    fetchData();
  }, [loading]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return (
        value.address.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.vie_address.toLowerCase().includes(searchWord.toLowerCase())
      );
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <>
      <form action="#" className="search-location mt-md-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 align-items-end">
            <div className="form-group">
              <div className="form-field">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tìm địa điểm"
                  value={wordEntered}
                  onChange={handleFilter}
                  style={{backgroundColor: "red"}}
                />
                {/* <button><span className="ion-ios-search"></span></button> */}
              </div>
            </div>
          </div>
        </div>
      </form>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 2).map((value, key) => {
            return (
              <Link className="dataItem" to={value.link} target="_blank">
                <p style={{marginTop: "0px", fontSize: "16px"}}>
                  {value.vie_address}
                </p>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}

export default SearchBar;
