import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
    return (
        <>
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-7 heading-section text-center">
                            <span className="subheading">Blog</span>
                            <h2>Blog gần đây</h2>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row d-flex">
                            <div className="col-md-3 d-flex">
                                <div className="blog-entry justify-content-end">
                                    <div className="text">
                                        <Link to="blog-single.html" className="block-20 img" style={{ backgroundImage: `url('images/image_1.jpg')` }}>
                                        </Link>
                                        <h3 className="heading"><Link to="#">Những loại cây xanh thích hợp đặt trong phòng ngủ</Link></h3>
                                        <div className="meta mb-3">
                                            <div><Link to="#">June. 24, 2022</Link></div>
                                            <div><Link to="#">Admin</Link></div>
                                            <div><Link to="#" className="meta-chat"><span className="icon-chat"></span> 3</Link></div>
                                        </div>
                                        <p>Trang trí phòng ngủ với những loại cây trồng trong nhà vừa giúp thanh lọc bầu không khí, vừa tạo cho gian phòng những mảng xanh đẹp mắt giúp bạn gần gũi hơn với thiên nhiên.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex">
                                <div className="blog-entry justify-content-end">
                                    <div className="text">
                                        <Link to="blog-single.html" className="block-20 img" style={{ backgroundImage: `url('images/image_2.jpg')` }}>
                                        </Link>
                                        <h3 className="heading"><Link to="#">5 tips giúp bắt đầu một ngày mới với tâm trạng tích cực</Link></h3>
                                        <div className="meta mb-3">
                                            <div><Link to="#">June. 24, 2022</Link></div>
                                            <div><Link to="#">Admin</Link></div>
                                            <div><Link to="#" className="meta-chat"><span className="icon-chat"></span> 3</Link></div>
                                        </div>
                                        <p>Tâm trạng là yếu tố có khả năng ảnh hưởng rất lớn đến thành quả công việc của bạn trong cả một ngày. Làm cách nào để bắt đầu ngày mới một cách tích cực? Hãy cùng Uptown đi tìm câu trả lời thông qua phần nội dung dưới đây:</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex">
                                <div className="blog-entry justify-content-end">
                                    <div className="text">
                                        <Link to="blog-single.html" className="block-20 img" style={{ backgroundImage: `url('images/image_3.jpg')` }}>
                                        </Link>
                                        <h3 className="heading"><Link to="#">Cải tạo phòng ngủ - Nên bắt đầu từ đâu?</Link></h3>
                                        <div className="meta mb-3">
                                            <div><Link to="#">June. 24, 2022</Link></div>
                                            <div><Link to="#">Admin</Link></div>
                                            <div><Link to="#" className="meta-chat"><span className="icon-chat"></span> 3</Link></div>
                                        </div>
                                        <p>Bạn muốn thay đổi diện mạo cho căn phòng ngủ trở nên xinh xắn, nhiều tiện ích hơn nhưng chưa biết bắt đầu từ đâu? Vậy thì bài viết này chính là dành riêng cho bạn. Hãy cùng Uptown khám phá những vật dụng vừa hữu ích vừa có cả công năng trang trí phòng ngủ, mang lại cho bạn không gian nghỉ ngơi thật xinh xắn nhé!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex">
                                <div className="blog-entry justify-content-end">
                                    <div className="text">
                                        <Link to="blog-single.html" className="block-20 img" style={{ backgroundImage: `url('images/image_4.jpg')` }}>
                                        </Link>
                                        <h3 className="heading"><Link to="#">Khám phá khung giờ học tập giúp bạn tiếp thu bài hiệu quả nhất</Link></h3>
                                        <div className="meta mb-3">
                                            <div><Link to="#">June. 24, 2022</Link></div>
                                            <div><Link to="#">Admin</Link></div>
                                            <div><Link to="#" className="meta-chat"><span className="icon-chat"></span> 3</Link></div>
                                        </div>
                                        <p>Bạn có biết, việc lựa chọn đúng khung giờ học tập sẽ giúp việc học trở nên dễ dàng và hiệu quả hơn rất nhiều. Cũng như mỗi môn học đều sẽ có đặc điểm riêng. Trạng thái, tinh thần của chúng ta ở từng khung giờ khác nhau cũng sẽ có điểm khác biệt.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex">
                                <div className="blog-entry justify-content-end">
                                    <div className="text">
                                        <Link to="blog-single.html" className="block-20 img" style={{ backgroundImage: `url('images/image_5.jpg')` }}>
                                        </Link>
                                        <h3 className="heading"><Link to="#">Tự tay trang trí bàn học với những mẹo hay hữu ích</Link></h3>
                                        <div className="meta mb-3">
                                            <div><Link to="#">June. 24, 2022</Link></div>
                                            <div><Link to="#">Admin</Link></div>
                                            <div><Link to="#" className="meta-chat"><span className="icon-chat"></span> 3</Link></div>
                                        </div>
                                        <p>Một chiếc bàn học đẹp được xếp đặt ngay ngắn, gọn gàng vừa tạo sự thuận tiện cho người sử dụng, vừa là cách giúp bạn trẻ duy trì được nguồn cảm hứng học tập và làm việc. Hôm nay, hãy cùng Uptown khám phá những mẹo hay hữu ích mà bạn có thể ứng dụng để tự tay trang trí cho chiếc bàn học của mình nhé</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex">
                                <div className="blog-entry justify-content-end">
                                    <div className="text">
                                        <Link to="blog-single.html" className="block-20 img" style={{ backgroundImage: `url('images/image_6.jpg')` }}>
                                        </Link>
                                        <h3 className="heading"><Link to="#">Môi trường sống khác biệt kiến tạo nên cộng đồng cư dân ưu tú</Link></h3>
                                        <div className="meta mb-3">
                                            <div><Link to="#">June. 24, 2022</Link></div>
                                            <div><Link to="#">Admin</Link></div>
                                            <div><Link to="#" className="meta-chat"><span className="icon-chat"></span> 3</Link></div>
                                        </div>
                                        <p>Tiên phong mang tới hình Student Housing đến với sinh viên và giới trẻ Việt Nam, Uptown không chỉ mong muốn cung cấp không gian sống tiện nghi mà còn đem lại phong cách sống hiện đại và khác biệt nhằm tạo dựng một cộng đồng cư dân ưu tú.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex">
                                <div className="blog-entry justify-content-end">
                                    <div className="text">
                                        <Link to="blog-single.html" className="block-20 img" style={{ backgroundImage: `url('images/image_7.jpg')` }}>
                                        </Link>
                                        <h3 className="heading"><Link to="#">Aesthetic - Phong cách thời trang và lối sống mới của gen Z</Link></h3>
                                        <div className="meta mb-3">
                                            <div><Link to="#">June. 24, 2022</Link></div>
                                            <div><Link to="#">Admin</Link></div>
                                            <div><Link to="#" className="meta-chat"><span className="icon-chat"></span> 3</Link></div>
                                        </div>
                                        <p>Có lẽ bạn đã vài lần nhìn thấy hashtag aesthetic được gắn với những bộ hình xinh đẹp hoặc một xu hướng ăn mặc cụ thể. Vậy aesthetic là gì? Làm sao để tìm được phong cách aesthetic phù hợp với bản thân? Hãy cùng khám phá nhé!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 d-flex">
                                <div className="blog-entry justify-content-end">
                                    <div className="text">
                                        <Link to="blog-single.html" className="block-20 img" style={{ backgroundImage: `url('images/image_8.jpg')` }}>
                                        </Link>
                                        <h3 className="heading"><Link to="#">Mẹo trang trí giúp khai thác không gian căn hộ mini</Link></h3>
                                        <div className="meta mb-3">
                                            <div><Link to="#">June. 24, 2022</Link></div>
                                            <div><Link to="#">Admin</Link></div>
                                            <div><Link to="#" className="meta-chat"><span className="icon-chat"></span> 3</Link></div>
                                        </div>
                                        <p>Căn hộ mini được thiết kế như một studio với giường gác xép, đây là kiểu phòng ở quen thuộc đối với các bạn sinh viên. Tất nhiên, vì loại phòng này có diện tích khá khiêm tốn nên việc trang trí cần được ưu tiên làm sao để tận dụng được hết không gian, đẩy đủ, tiện nghi nhưng vẫn đem đến cảm giác thoáng và thoải mái.

                                            Dưới đây là một số gợi ý giúp các bạn trẻ tận dụng được toàn bộ diện tích của căn hộ và làm đẹp cho không gian sống “nhỏ nhưng có võ” của mình</p>
                                    </div>
                                </div>
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
                </div>
            </section>
        </>
    )
}

export default Blog