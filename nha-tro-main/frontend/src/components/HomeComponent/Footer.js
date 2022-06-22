import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="ftco-footer ftco-section">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Uptown</h2>
                            <p>Sự hài lòng của khách hàng là niềm hạnh phúc của chúng tôi</p>
                            <ul className="ftco-footer-social list-unstyled mt-5">
                                <li><Link to="#"><span className="icon-twitter"></span></Link></li>
                                <li><Link to="#"><span className="icon-facebook"></span></Link></li>
                                <li><Link to="#"><span className="icon-instagram"></span></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4 ml-md-4">
                            <h2 className="ftco-heading-2">Cộng đồng</h2>
                            <ul className="list-unstyled">
                                <li><Link to="#"><span className="icon-long-arrow-right mr-2"></span>Tìm nhà trọ</Link></li>
                                <li><Link to="#"><span className="icon-long-arrow-right mr-2"></span>Reviews</Link></li>
                                <li><Link to="#"><span className="icon-long-arrow-right mr-2"></span>FAQs</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4 ml-md-4">
                            <h2 className="ftco-heading-2">Câu chuyện</h2>
                            <ul className="list-unstyled">
                                <li><Link to="#"><span className="icon-long-arrow-right mr-2"></span>Blog</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Bạn có thắc mắc?</h2>
                            <div className="block-23 mb-3">
                                <ul>
                                    <li><span className="icon icon-map-marker"></span><span className="text">1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội</span></li>
                                    <li><Link to="#"><span className="icon icon-phone"></span><span className="text">+84 987 654 321</span></Link></li>
                                    <li><Link to="#"><span className="icon icon-envelope pr-4"></span><span className="text">info@yourdomain.com</span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">

                        <p>
                            &copy;<script>document.write(new Date().getFullYear());</script> by Uptown, Proudly created with passion and delegation.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer