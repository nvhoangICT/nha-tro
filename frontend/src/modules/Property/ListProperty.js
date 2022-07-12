import { Link } from 'react-router-dom';
import Item from '../../components/ItemComponent/Item';
import axios from "axios";
import Pagination from './Pagination';
// import { Pagination } from '@mui/material';
import React, { useState, useEffect } from "react";
import Header from '../../components/HomeComponent/Header';
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
import { convertLength } from '@mui/material/styles/cssUtils';

const baseURL = "http://localhost:8081";

const ListProperty = () => {
  const [post, setPost] = useState(null);
  const [listProps, setListProps] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);
  const [posts, setPosts] = useState([]);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const [urls, setUrls] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`${baseURL}/api/read-property`).then((response) => {
        // setPost(response.data);
        // console.log(post.data[0].address);
        setPost(response.data.data);
        setLoading(false);
        console.log(response.data.data)
        console.log(response.data.data);
        setListProps(listProps => listProps = response.data.data)
      });
    }
    fetchData();
  }, []);
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
                  <span></span>
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
                  }).catch((error) => {
                    console.log(error);
                  });
                // console.log(name)
                let url = `url(https://firebasestorage.googleapis.com/v0/b/nha-tro-b7165.appspot.com/o/${item.id}%2F1.jpg?alt=media&token=744d876c-ef00-4e98-a5a5-866148a06666)`
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