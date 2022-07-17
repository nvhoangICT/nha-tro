import {Link, useParams} from "react-router-dom";
import Item from "../../components/ItemComponent/Item";
import axios from "axios";
import Pagination from "./Pagination";
// import { Pagination } from '@mui/material';
import React, {useState, useEffect} from "react";
import Header from "../../components/HomeComponent/Header";
import {getStorage, ref, getDownloadURL, listAll} from "firebase/storage";
import {convertLength} from "@mui/material/styles/cssUtils";
import Select from "react-select";
const baseURL = "http://localhost:8081";

const ListPropertyDistrict = () => {
  const [post, setPost] = useState(null);
  const [listProps, setListProps] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);
  const [posts, setPosts] = useState([]);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [urls, setUrls] = useState(null);

  const {id} = useParams();

  const customStyles = {
    control: (styles) => ({
      ...styles,
      width: "40vh",
      height: "44px",
      marginRight: "0",
      backgroundColor: "#fff",
    }),
    option: (styles, isSelected) => ({
      ...styles,
      width: "40vh",
      height: "44px",
      marginRight: "0",
      backgroundColor: "#fff",
      color: "black",
    }),
    menu: (styles) => ({
      ...styles,
      width: "40vh",
      height: "44px",
      marginRight: "0",
      backgroundColor: "#fff",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
      return {...provided, opacity, transition};
    },
  };

  const districtOptions = [
    {
      value: 1,
      label: "Hoàng Mai",
    },
    {
      value: 2,
      label: "Cầu Giấy",
    },
    {
      value: 3,
      label: "Đống Đa",
    },
    {
      value: 4,
      label: "Hai Bà Trưng",
    },
    {
      value: 5,
      label: "Nam Từ Liêm",
    },
    {
      value: 6,
      label: "Bắc Từ Liêm",
    },
    {
      value: 7,
      label: "Hoàn Kiếm",
    },
    {
      value: 8,
      label: "Thanh Xuân",
    },
    {
      value: 9,
      label: "Ba Đình",
    },
  ];

  const priceOptions = [
    {
      value: null,
      label: "Chọn khoảng giá",
    },
    {
      value: 7000000,
      label: "Trên 6 triệu",
    },
    {
      value: 6000000,
      label: "Từ 5 triệu đến 6 triệu",
    },
    {
      value: 5000000,
      label: "Từ 4 triệu đến 5 triệu",
    },
    {
      value: 4000000,
      label: "Từ 3 triệu đến 4 triệu",
    },
  ];

  const areaOptions = [
    {
      value: null,
      label: "Chọn diện tích",
    },
    {
      value: 20,
      label: "Từ 10 đến 20 m2",
    },
    {
      value: 30,
      label: "Từ 20 đến 30 m2",
    },
    {
      value: 40,
      label: "Từ 30 đến 40 m2",
    },
    {
      value: 50,
      label: "Trên 40m2",
    },
  ];

  const [price, setPrice] = useState("");
  const [district, setDistrict] = useState(districtOptions[id - 1]);
  const [area, setArea] = useState("");

  function handleSelectArea(data) {
    setArea(data);
    // console.log(data.value)
  }

  function handleSelectPrice(data) {
    setPrice(data);
    // console.log(data.value)
  }

  function handleSelectDistrict(data) {
    setDistrict(data);
    // console.log(data.value)
  }

  useEffect(() => {
    const fetchData = async () => {
      const filter = {
        area: area.value,
        price: price.value,
        district: district.value,
      };
      // console.log(filter)
      await axios
        .post(`${baseURL}/api/read-property`, JSON.stringify(filter), {
          headers: {"Content-Type": "application/json"},
        })
        .then((response) => {
          // setPost(response.data);
          // console.log(post.data[0].address);
          setPost(response.data.data);
          setLoading(false);
          console.log(response.data.data);
          setListProps((listProps) => (listProps = response.data.data));
        });
    };
    fetchData();
  }, [area, price, district]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const filter = {
  //       area: area.value,
  //       price: price.value,
  //       district: id,
  //     }
  //     // console.log(filter)
  //     await axios.post(`${baseURL}/api/read-property`,
  //       JSON.stringify(filter),
  //       {
  //         headers: { 'Content-Type': 'application/json' }
  //       }
  //     ).then((response) => {
  //       // setPost(response.data);
  //       // console.log(post.data[0].address);
  //       setPost(response.data.data);
  //       setLoading(false);
  //       console.log(response.data.data)
  //       setListProps(listProps => listProps = response.data.data)
  //     });
  //   }
  //   fetchData();
  // }, []);
  // console.log(listProps);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = listProps.slice(indexOfFirstPost, indexOfLastPost);

  // console.log(post[0]['id']);
  // const storage = getStorage();
  //   getDownloadURL(ref(storage, `/${post[0]['id']}`).listAll())
  //       .then((url) => {
  //           // `url` is the download URL for 'images/stars.jpg'

  //           // This can be downloaded directly:
  //           const xhr = new XMLHttpRequest();
  //           xhr.responseType = 'blob';
  //           xhr.onload = (event) => {
  //               const blob = xhr.response;
  //           };
  //           xhr.open('GET', url);
  //           xhr.send();

  //           setUrls(url);
  //           console.log(urls)
  //       })
  //       .catch((error) => {
  //           // Handle any errors
  //       });

  return (
    <div>
      <Header />

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="property-details">
                <div className="text text-center mt-4">
                  <h2>DANH SÁCH PHÒNG TRỌ</h2>
                </div>
                <div className="row mt-4">
                  <div className="col-md-6 col-lg-4">
                    <Select
                      styles={customStyles}
                      options={districtOptions}
                      placeholder="Chọn khu vực"
                      value={district}
                      onChange={handleSelectDistrict}
                    />
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <Select
                      styles={customStyles}
                      options={priceOptions}
                      placeholder="Chọn khoảng giá"
                      value={price}
                      onChange={handleSelectPrice}
                    />
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <Select
                      styles={customStyles}
                      options={areaOptions}
                      placeholder="Chọn diện tích"
                      value={area}
                      onChange={handleSelectArea}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="row">
              {currentPosts.map((item, index) => {
                let storage = getStorage();
                let listRef = ref(storage, `/${item.id}`);
                // var url;
                // console.log(listRef)
                listAll(listRef)
                  .then((res) => {
                    res.items.forEach((itemRef) => {
                      // setUrls(null)
                      // setUrls(itemRef.name)
                      // All the items under listRef.
                      // console.log(itemRef);
                      // console.log(itemRef)
                      // getDownloadURL(ref(storage, itemRef.fullPath))
                      //   .then((url) => {
                      //     // `url` is the download URL for 'images/stars.jpg'
                      //     // This can be downloaded directly:
                      //     const xhr = new XMLHttpRequest();
                      //     xhr.responseType = 'blob';
                      //     xhr.onload = (event) => {
                      //       const blob = xhr.response;
                      //     };
                      //     xhr.open('GET', url);
                      //     xhr.send();
                      //     setUrls(...urls, url);
                      //     console.log(urls)
                      //   })
                      //   .catch((error) => {
                      //     // Handle any errors
                      //   });
                      // setUrls(`url(https://firebasestorage.googleapis.com/v0/b/nha-tro-b7165.appspot.com/o/${item.id}%2F${itemRef.name}?alt=media&token=744d876c-ef00-4e98-a5a5-866148a06666)`)
                      // url = `url(https://firebasestorage.googleapis.com/v0/b/nha-tro-b7165.appspot.com/o/${item.id}%2F${itemRef.name}?alt=media&token=744d876c-ef00-4e98-a5a5-866148a06666)`
                    });
                  })
                  .catch((error) => {
                    console.log(error);
                  });
                // console.log(name)
                let url = `url(https://firebasestorage.googleapis.com/v0/b/nha-tro-b7165.appspot.com/o/${item.id}%2F1.jpg?alt=media&token=744d876c-ef00-4e98-a5a5-866148a06666)`;
                // let url = `https://firebasestorage.googleapis.com/v0/b/nha-tro-b7165.appspot.com/o/${item.id}%2F1.jpg?alt=media&token=744d876c-ef00-4e98-a5a5-866148a06666`

                return (
                  <Item
                    id={item.id}
                    key={index}
                    backgroundImage={url}
                    price={item.price}
                    beds={item.bedroom}
                    baths={item.bathroom}
                    area={item.area}
                    title={item.name}
                    address={item.address}
                  />
                );
              })}
            </div>
          </div>
          <div className="row mt-5">
            <div className="container mt-5">
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={listProps.length}
                paginate={paginate}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListPropertyDistrict;
