import React, { useState } from 'react'
import './styles.css'

const PropertyDetails = (props) => {
    const [show, setShow] = useState(1)
    console.log(show);
    return (
        <>
            <section className="ftco-section ftco-property-details">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="property-details">
                                <div className="img" style={{ backgroundImage: props.bg }}></div>
                                <div className="text text-center">
                                    <span className="subheading">{props.address}</span>
                                    <h2>{props.title}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 pills">
                            <div className="bd-example bd-example-tabs">
                                <div className="d-flex justify-content-center">
                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item" >
                                            <div onClick={()=>{setShow(1)}} className="nav-div active" id="pills-description-tab" data-toggle="pill" to="#pills-description" role="tab" aria-controls="pills-description" aria-expanded="true">Tiện ích</div>
                                        </li>
                                        
                                        <li className="nav-item" >
                                            <div onClick={()=>{setShow(2)}} className="nav-div" id="pills-manufacturer-tab" data-toggle="pill" to="#pills-manufacturer" role="tab" aria-controls="pills-manufacturer" aria-expanded="true">Mô tả</div>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <div onClick={()=>{setShow(3)}} className="nav-div" id="pills-map-tab" data-toggle="pill" to="#pills-review" role="tab" aria-controls="pills-review" aria-expanded="true">Bản đồ</div>
                                        </li>
                                        <li className="nav-item">
                                            <div onClick={()=>{setShow(4)}} className="nav-div" id="pills-review-tab" data-toggle="pill" to="#pills-review" role="tab" aria-controls="pills-review" aria-expanded="true">Phản hồi</div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="tab-content" id="pills-tabContent">
                                    {(show === 1)&&<div className="tab-pane fade show active" id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab">
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
                                    </div>}

                                    {(show === 2)&&<div className="tab-pane fade show active" id="pills-manufacturer" role="tabpanel" aria-labelledby="pills-map-tab">
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                                        <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                                    </div>}

                                    {(show===3)&&<div className="tab-pane fade show active" id="pills-map" role="tabpanel" aria-labelledby="pills-manufacturer-tab">
                                        
                                    <span>Chức năng đang hoàn thiện</span>
                                    </div>}

                                    {(show===4)&&<div className="tab-pane fade show active" id="pills-review" role="tabpanel" aria-labelledby="pills-review-tab">
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
                                                            <span className="text-right"><div to="#" className="reply"><i className="icon-reply"></i></div></span>
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
                                                            <span className="text-right"><div to="#" className="reply"><i className="icon-reply"></i></div></span>
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
                                                            <span className="text-right"><div to="#" className="reply"><i className="icon-reply"></i></div></span>
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
                                                                <i className="ion-ios-star"></i>
                                                                (85%)
                                                            </span>
                                                            <span>10 votes</span>
                                                        </p>
                                                        <p className="star">
                                                            <span>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                (70%)
                                                            </span>
                                                            <span>5 votes</span>
                                                        </p>
                                                        <p className="star">
                                                            <span>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                (10%)
                                                            </span>
                                                            <span>0 vote </span>
                                                        </p>
                                                        <p className="star">
                                                            <span>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                (0%)
                                                            </span>
                                                            <span>0 vote</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>}
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