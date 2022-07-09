
import { Link } from 'react-router-dom'
import Item from '../../components/ItemComponent/Item'
import axios from "axios";
import React, { useState, useEffect } from "react";

const baseURL = "http://localhost:8081";

const ListProperty = () => {
  const [post, setPost] = useState();

  useEffect(async () => {
    await axios.get(`${baseURL}/api/read-property`).then((response) => {
      setPost(response.data);
      console.log(post.data[0]);
    });
  }, []);

  return (
    <>
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
              <Item
                id="1"
                backgroundImage="url(images/nha-tro-1.png)"
                price="5,000,000"
                beds="3"
                baths="2"
                area="50"
                title="Nhà nguyên căn"
                address={post.data[0].address}
              />
            </div>

            <div className="col-md-4">
              <Item
                id="1"
                backgroundImage="url(images/nha-tro-1.png)"
                price="5,000,000"
                beds="3"
                baths="2"
                area="50"
                title="Nhà nguyên căn"
                address="Hai Bà Trưng"
              />
            </div>

            <div className="col-md-4">
              <Item
                id="1"
                backgroundImage="url(images/nha-tro-1.png)"
                price="5,000,000"
                beds="3"
                baths="2"
                area="50"
                title="Nhà nguyên căn"
                address="Hai Bà Trưng"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Item
                id="1"
                backgroundImage="url(images/nha-tro-1.png)"
                price="5,000,000"
                beds="3"
                baths="2"
                area="50"
                title="Nhà nguyên căn"
                address="Hai Bà Trưng"
              />
            </div>
            <div className="col-md-4">
              <Item
                id="1"
                backgroundImage="url(images/nha-tro-1.png)"
                price="5,000,000"
                beds="3"
                baths="2"
                area="50"
                title="Nhà nguyên căn"
                address="Hai Bà Trưng"
              />
            </div>
            <div className="col-md-4">
              <Item
                id="1"
                backgroundImage="url(images/nha-tro-1.png)"
                price="5,000,000"
                beds="3"
                baths="2"
                area="50"
                title="Nhà nguyên căn"
                address="Hai Bà Trưng"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Item
                id="1"
                backgroundImage="url(images/nha-tro-1.png)"
                price="5,000,000"
                beds="3"
                baths="2"
                area="50"
                title="Nhà nguyên căn"
                address="Hai Bà Trưng"
              />
            </div>
            <div className="col-md-4">
              <Item
                id="1"
                backgroundImage="url(images/nha-tro-1.png)"
                price="5,000,000"
                beds="3"
                baths="2"
                area="50"
                title="Nhà nguyên căn"
                address="Hai Bà Trưng"
              />
            </div>
            <div className="col-md-4">
              <Item
                id="1"
                backgroundImage="url(images/nha-tro-1.png)"
                price="5,000,000"
                beds="3"
                baths="2"
                area="50"
                title="Nhà nguyên căn"
                address="Hai Bà Trưng"
              />
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
      </section>
    </>
  )
}

export default ListProperty