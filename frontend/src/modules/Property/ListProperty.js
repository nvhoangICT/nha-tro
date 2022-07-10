import { Link } from 'react-router-dom';
import Item from '../../components/ItemComponent/Item';
import axios from "axios";
import Pagination from './Pagination';
// import { Pagination } from '@mui/material';
import React, { useState, useEffect } from "react";

const baseURL = "http://localhost:8081";

const ListProperty = () => {
  const [post, setPost] = useState(null);
  const [listProps, setListProps] = useState([]);
  const[loading,setLoading]=useState(false);
  const [currentPage,setCurrentPage]=useState(1);
  const [postsPerPage,setPostsPerPage]=useState(9);
  const [posts, setPosts] = useState([]);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  useEffect(async () => {
    await axios.get(`${baseURL}/api/read-property`).then((response) => {
      // setPost(response.data);
      // console.log(post.data[0].address);
      setPost(response.data.data);
      setLoading(false);
      console.log(response.data.data)
      // console.log(response.data.data);
      setListProps(listProps => listProps = response.data.data)
    });
  }, []);
  // console.log(listProps);

  async function updatePost() {
    await axios.put(`${baseURL}/api/put-property`, {
      name: "Hello World!",
      address: "This is an updated post."
    })
      .then((response) => {
        setPost(response.data);
      });
  }
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = listProps.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <div>
      <section className="hero-wrap hero-wrap-2 ftco-degree-bg js-fullheight"
        style={{ backgroundImage: `url('images/bg_3.jpg')` }} data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
            <div className="col-md-9  pb-5 text-center">
              <p className="breadcrumbs"><span className="mr-2"><Link to="index.html">Home <i
                className="ion-ios-arrow-forward"></i></Link></span> <span>Properties <i
                  className="ion-ios-arrow-forward"></i></span></p>
              <h1 className="mb-3 bread">Choose <br />Your Desired Home</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row">  
            <div className="row">
              {currentPosts.map((item, index) => {
                return(
                  <Item
                    key = {index}
                    backgroundImage={item.backgroundImage}
                    price={item.price}
                    beds={item.bedroom}
                    baths={item.bathroom}
                    area={item.area}
                    title={item.name}
                    address={item.address}
                  />
                )
              })}
              
            </div>
          </div>
          <div className="row mt-5">
          <div className='container mt-5'>
      
      
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={listProps.length}
        paginate={paginate}
      />
    </div>
          </div>
        </div>
      </section >
    </div >
  )
}

export default ListProperty;