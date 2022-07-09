
import { Link } from 'react-router-dom'
import Item from '../../components/ItemComponent/Item'
import axios from "axios";
import React, { useState, useEffect } from "react";

const baseURL = "http://localhost:8081";

const ListProperty = () => {
  const [post, setPost] = useState(null);
  const [listProps, setListProps] = useState([])

  useEffect(async () => {
    await axios.get(`${baseURL}/api/read-property`).then((response) => {
      // setPost(response.data);
      // console.log(post.data[0].address);
      console.log(response.data.data);
      setListProps(listProps => listProps = response.data.data)
    });
  }, []);
  console.log(listProps);

  async function updatePost() {
    await axios.put(`${baseURL}/api/put-property`, {
      name: "Hello World!",
      address: "This is an updated post."
    })
      .then((response) => {
        setPost(response.data);
      });
  }

  async function updatePost() {
    await axios.put(`${baseURL}/api/put-property`, {
      name: "Hello World!",
      address: "This is an updated post."
    })
      .then((response) => {
        setPost(response.data);
      });
  }


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
            
            <div className="col-md-4">
              {listProps.map((item, index) => {
                return(
                  <Item
                    key = {index}
                    backgroundImage= {item.backgroundImage}
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
            <div className="col text-center">
              <div className="block-27">
                <ul>
                  <li><Link to="#">&lt;</Link></li>
                  <li className="active"><span>1</span></li>
                  <li><Link to="#">2</Link></li>
                  <li><Link to="#">3</Link></li>
                  <li><Link to="#">4</Link></li>
                  <li><Link to="#">5</Link></li>
                  <li><Link to="#">&gt;</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section >
    </div >
  )
}

export default ListProperty