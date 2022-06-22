import React from 'react'
import { Link } from 'react-router-dom'

const Properties = () => {
    return (
        <>
            <section className="ftco-section goto-here">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 heading-section text-center mb-5">
                            <span className="subheading">Nhà trọ đề xuất</span>
                            <h2 className="mb-2">Chúng tôi đề xuất cho bạn</h2>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="property-wrap">
                                    <Link to="properties-single.html" className="img" style={{backgroundImage: `url(images/nha-tro-1.png)`}}></Link>
                                    <div className="text">
                                        <p className="price"><span className="orig-price">3,000,000đ<small>/mo</small></span></p>
                                        <ul className="property_list">
                                            <li><span className="flaticon-bed"></span>2</li>
                                            <li><span className="flaticon-bathtub"></span>1</li>
                                            <li><span className="flaticon-floor-plan"></span>30 m2</li>
                                        </ul>
                                        <h3><Link to="properties-single.html">Nhà Nguyên Căn</Link></h3>
                                        <span className="location">Hai Bà Trưng</span>
                                        <Link to="properties-single.html"
                                            className="d-flex align-items-center justify-content-center btn-custom">
                                            <span className="ion-ios-link"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="property-wrap">
                                    <Link to="properties-single.html" className="img" style={{backgroundImage: `url(images/nha-tro-2.png)`}}></Link>
                                    <div className="text">
                                        <p className="price"><span className="orig-price">3,000,000đ<small>/mo</small></span></p>
                                        <ul className="property_list">
                                            <li><span className="flaticon-bed"></span>2</li>
                                            <li><span className="flaticon-bathtub"></span>1</li>
                                            <li><span className="flaticon-floor-plan"></span>30 m2</li>
                                        </ul>
                                        <h3><Link to="properties-single.html">Phòng Trọ 2 Người</Link></h3>
                                        <span className="location">Cầu Giấy</span>
                                        <Link to="properties-single.html"
                                            className="d-flex align-items-center justify-content-center btn-custom">
                                            <span className="ion-ios-link"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="property-wrap">
                                    <Link to="properties-single.html" className="img" style={{backgroundImage: `url(images/nha-tro-3.jpg)`}}></Link>
                                    <div className="text">
                                        <p className="price"><span className="orig-price">3,000,000đ<small>/mo</small></span></p>
                                        <ul className="property_list">
                                            <li><span className="flaticon-bed"></span>2</li>
                                            <li><span className="flaticon-bathtub"></span>1</li>
                                            <li><span className="flaticon-floor-plan"></span>30 m2</li>
                                        </ul>
                                        <h3><Link to="properties-single.html">Nhà Nguyên Căn</Link></h3>
                                        <span className="location">Hoàng Mai</span>
                                        <Link to="properties-single.html"
                                            className="d-flex align-items-center justify-content-center btn-custom">
                                            <span className="ion-ios-link"></span>
                                        </Link>
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

export default Properties