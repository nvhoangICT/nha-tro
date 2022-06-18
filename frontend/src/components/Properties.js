import React from 'react'
import { Link } from 'react-router-dom'

const Properties = () => {
    return (
        <>
            <section class="ftco-section goto-here">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-12 heading-section text-center mb-5">
                            <span class="subheading">Nhà trọ đề xuất</span>
                            <h2 class="mb-2">Chúng tôi đề xuất cho bạn</h2>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="property-wrap">
                                    <Link to="properties-single.html" class="img" style={{backgroundImage: `url(images/nha-tro-1.png)`}}></Link>
                                    <div class="text">
                                        <p class="price"><span class="orig-price">3,000,000đ<small>/mo</small></span></p>
                                        <ul class="property_list">
                                            <li><span class="flaticon-bed"></span>2</li>
                                            <li><span class="flaticon-bathtub"></span>1</li>
                                            <li><span class="flaticon-floor-plan"></span>30 m2</li>
                                        </ul>
                                        <h3><Link to="properties-single.html">Nhà Nguyên Căn</Link></h3>
                                        <span class="location">Hai Bà Trưng</span>
                                        <Link to="properties-single.html"
                                            class="d-flex align-items-center justify-content-center btn-custom">
                                            <span class="ion-ios-link"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="property-wrap">
                                    <Link to="properties-single.html" class="img" style={{backgroundImage: `url(images/nha-tro-2.png)`}}></Link>
                                    <div class="text">
                                        <p class="price"><span class="orig-price">3,000,000đ<small>/mo</small></span></p>
                                        <ul class="property_list">
                                            <li><span class="flaticon-bed"></span>2</li>
                                            <li><span class="flaticon-bathtub"></span>1</li>
                                            <li><span class="flaticon-floor-plan"></span>30 m2</li>
                                        </ul>
                                        <h3><Link to="properties-single.html">Phòng Trọ 2 Người</Link></h3>
                                        <span class="location">Cầu Giấy</span>
                                        <Link to="properties-single.html"
                                            class="d-flex align-items-center justify-content-center btn-custom">
                                            <span class="ion-ios-link"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="property-wrap">
                                    <Link to="properties-single.html" class="img" style={{backgroundImage: `url(images/nha-tro-3.jpg)`}}></Link>
                                    <div class="text">
                                        <p class="price"><span class="orig-price">3,000,000đ<small>/mo</small></span></p>
                                        <ul class="property_list">
                                            <li><span class="flaticon-bed"></span>2</li>
                                            <li><span class="flaticon-bathtub"></span>1</li>
                                            <li><span class="flaticon-floor-plan"></span>30 m2</li>
                                        </ul>
                                        <h3><Link to="properties-single.html">Nhà Nguyên Căn</Link></h3>
                                        <span class="location">Hoàng Mai</span>
                                        <Link to="properties-single.html"
                                            class="d-flex align-items-center justify-content-center btn-custom">
                                            <span class="ion-ios-link"></span>
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