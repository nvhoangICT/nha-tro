import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer class="ftco-footer ftco-section">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-md">
                        <div class="ftco-footer-widget mb-4">
                            <h2 class="ftco-heading-2">Uptown</h2>
                            <p>Sự hài lòng của khách hàng là niềm hạnh phúc của chúng tôi</p>
                            <ul class="ftco-footer-social list-unstyled mt-5">
                                <li><Link to="#"><span class="icon-twitter"></span></Link></li>
                                <li><Link to="#"><span class="icon-facebook"></span></Link></li>
                                <li><Link to="#"><span class="icon-instagram"></span></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="ftco-footer-widget mb-4 ml-md-4">
                            <h2 class="ftco-heading-2">Cộng đồng</h2>
                            <ul class="list-unstyled">
                                <li><Link to="#"><span class="icon-long-arrow-right mr-2"></span>Tìm nhà trọ</Link></li>
                                <li><Link to="#"><span class="icon-long-arrow-right mr-2"></span>Reviews</Link></li>
                                <li><Link to="#"><span class="icon-long-arrow-right mr-2"></span>FAQs</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="ftco-footer-widget mb-4 ml-md-4">
                            <h2 class="ftco-heading-2">Câu chuyện</h2>
                            <ul class="list-unstyled">
                                <li><Link to="#"><span class="icon-long-arrow-right mr-2"></span>Blog</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="ftco-footer-widget mb-4">
                            <h2 class="ftco-heading-2">Bạn có thắc mắc?</h2>
                            <div class="block-23 mb-3">
                                <ul>
                                    <li><span class="icon icon-map-marker"></span><span class="text">1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội</span></li>
                                    <li><Link to="#"><span class="icon icon-phone"></span><span class="text">+84 987 654 321</span></Link></li>
                                    <li><Link to="#"><span class="icon icon-envelope pr-4"></span><span class="text">info@yourdomain.com</span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 text-center">

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