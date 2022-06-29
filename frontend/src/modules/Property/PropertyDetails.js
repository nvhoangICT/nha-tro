// import { Marker } from '@react-google-maps/api'
import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import GoogleMap from '../GoogleMap/GoogleMap'
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'



const PropertyDetails = (props) => {
    const [toggle, setToggle] = useState(1)
    const toggleTab = (index) => {
        setToggle(index);
    }
    const [isZoomed, setIsZoomed] = useState(false)
    const handleImgLoad = useCallback(() => {
        setIsZoomed(true)
    }, [])
    const handleZoomChange = useCallback(shouldZoom => {
        setIsZoomed(shouldZoom)
    }, [])

    return (
        <>
            <section className="ftco-section ftco-property-details">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="property-details">
                                <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
                                    <picture>
                                        <img
                                            alt="a house"
                                            // onLoad={handleImgLoad}
                                            src={props.bg}
                                            maxHeight={600}
                                            width={1200}
                                        />
                                    </picture>
                                </ControlledZoom>
                                <div className="text text-center mt-4">
                                    <span className="subheading">{props.address}</span>
                                    <h2>{props.title}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 pills">
                            <div className="bd-example bd-example-tabs">
                                <div className="d-flex justify-content-left">
                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">

                                        <li className="nav-item">
                                            <button
                                                className={toggle === 1 ? "nav-link active" : "nav-link"}
                                                id="pills-description-tab"
                                                data-toggle="pill"
                                                to="#pills-description"
                                                role="tab"
                                                aria-controls="pills-description"
                                                aria-expanded="true"
                                                onClick={() => toggleTab(1)}
                                            >
                                                Tiện ích
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button
                                                className={toggle === 2 ? "nav-link active" : "nav-link"}
                                                id="pills-manufacturer-tab"
                                                data-toggle="pill"
                                                to="#pills-manufacturer"
                                                role="tab"
                                                aria-controls="pills-manufacturer"
                                                aria-expanded="true"
                                                onClick={() => toggleTab(2)}
                                            >
                                                Mô tả
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button
                                                className={toggle === 3 ? "nav-link active" : "nav-link"}
                                                id="pills-map-tab"
                                                data-toggle="pill"
                                                to="#pills-review"
                                                role="tab"
                                                aria-controls="pills-review"
                                                aria-expanded="true"
                                                onClick={() => toggleTab(3)}
                                            >
                                                Bản đồ
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button
                                                className={toggle === 4 ? "nav-link active" : "nav-link"}
                                                id="pills-review-tab"
                                                data-toggle="pill"
                                                to="#pills-review"
                                                role="tab"
                                                aria-controls="pills-review"
                                                aria-expanded="true"
                                                onClick={() => toggleTab(4)}
                                            >
                                                Phản hồi
                                            </button>
                                        </li>
                                    </ul>
                                </div>

                                <div className="tab-content" id="pills-tabContent">
                                    <div className={toggle === 1 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <ul className="features">
                                                    <li className="check"><span className="ion-ios-checkmark"></span>Diện tích: 1250 SQ FT</li>
                                                    <li className="check"><span className="ion-ios-checkmark"></span>Phòng ngủ: 4</li>
                                                    <li className="check"><span className="ion-ios-checkmark"></span>Phòng tắm: 4</li>
                                                    <li className="check"><span className="ion-ios-checkmark"></span>Đồ đạc : giường, tủ, điều hòa, ...</li>
                                                    <li className="check"><span className="ion-ios-checkmark"></span>Chỗ để xe: 2</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-4">
                                                <ul className="features">
                                                    <li className="check"><span className="ion-ios-checkmark"></span>Diện tích: 1,300 SQ FT</li>
                                                    <li className="check"><span className="ion-ios-checkmark"></span>Năm xây dựng: 2019</li>
                                                    <li className="check"><span className="ion-ios-checkmark"></span>Giá điện nước: tính theo số</li>

                                                </ul>
                                            </div>

                                        </div>
                                    </div>

                                    <div className={toggle === 2 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-manufacturer" role="tabpanel" aria-labelledby="pills-map-tab">
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                                        <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                                    </div>

                                    <div className={toggle === 3 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-map" role="tabpanel" aria-labelledby="pills-manufacturer-tab">
                                        <GoogleMap
                                            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDpCgPt0W2mw-lp5So6AeMEqQXUas2itkA&v=3.exp&libraries=geometry,drawing,places`}
                                            loadingElement={<div style={{ height: `100%` }} />}
                                            containerElement={<div style={{ height: `90vh`, margin: `auto`, border: '2px solid black' }} />}
                                            mapElement={<div style={{ height: `100%` }} />}
                                        />
                                    </div>

                                    <div className={toggle === 4 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-review" role="tabpanel" aria-labelledby="pills-review-tab">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <h3 className="head">23 lượt phản hồi</h3>
                                                <div className="review d-flex">
                                                    <div className="user-img" style={{ backgroundImage: `url(images/person_1.jpg)` }}></div>
                                                    <div className="desc">
                                                        <h4>
                                                            <span className="text-left">Jacob Webb</span>
                                                            <span className="text-right">14 March 2018</span>
                                                        </h4>
                                                        <p className="star">
                                                            <span>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                            </span>
                                                            <span className="text-right"><Link to="#" className="reply"><i className="icon-reply"></i></Link></span>
                                                        </p>
                                                        <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
                                                    </div>
                                                </div>
                                                <div className="review d-flex">
                                                    <div className="user-img" style={{ backgroundImage: `url(images/person_2.jpg` }}></div>
                                                    <div className="desc">
                                                        <h4>
                                                            <span className="text-left">Jacob Webb</span>
                                                            <span className="text-right">14 March 2018</span>
                                                        </h4>
                                                        <p className="star">
                                                            <span>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                            </span>
                                                            <span className="text-right"><Link to="#" className="reply"><i className="icon-reply"></i></Link></span>
                                                        </p>
                                                        <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
                                                    </div>
                                                </div>
                                                <div className="review d-flex">
                                                    <div className="user-img" style={{ backgroundImage: `url(images/person_3.jpg)}` }}></div>
                                                    <div className="desc">
                                                        <h4>
                                                            <span className="text-left">Jacob Webb</span>
                                                            <span className="text-right">14 March 2018</span>
                                                        </h4>
                                                        <p className="star">
                                                            <span>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                            </span>
                                                            <span className="text-right">
                                                                <Link to="#" className="reply"><i className="icon-reply"></i></Link>
                                                            </span>
                                                        </p>
                                                        <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="rating-wrap">
                                                    <h3 className="head">Xếp hạng</h3>
                                                    <div className="wrap">
                                                        <p className="star">
                                                            <span>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                (98%)
                                                            </span>
                                                            <span>20 votes</span>
                                                        </p>
                                                        <p className="star">
                                                            <span>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star-outline"></i>
                                                                (85%)
                                                            </span>
                                                            <span>10 votes</span>
                                                        </p>
                                                        <p className="star">
                                                            <span>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star-outline"></i>
                                                                <i className="ion-ios-star-outline"></i>
                                                                (70%)
                                                            </span>
                                                            <span>5 votes</span>
                                                        </p>
                                                        <p className="star">
                                                            <span>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star-outline"></i>
                                                                <i className="ion-ios-star-outline"></i>
                                                                <i className="ion-ios-star-outline"></i>
                                                                (10%)
                                                            </span>
                                                            <span>0 vote </span>
                                                        </p>
                                                        <p className="star">
                                                            <span>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star-outline"></i>
                                                                <i className="ion-ios-star-outline"></i>
                                                                <i className="ion-ios-star-outline"></i>
                                                                <i className="ion-ios-star-outline"></i>
                                                                (0%)
                                                            </span>
                                                            <span>0 vote</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PropertyDetails