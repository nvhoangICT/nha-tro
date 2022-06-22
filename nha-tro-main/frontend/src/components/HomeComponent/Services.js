import React from 'react'

const Services = () => {
    return (
        <>
            <section className="ftco-section" style={{ fontFamily: "Arial" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 heading-section text-center mb-5">
                            <span className="subheading">Dịch vụ</span>
                            <h2 className="mb-2">Sẵn sàng phục vụ nhu cầu của bạn</h2>
                        </div>
                    </div>
                    <div className="row d-flex">
                        <div className="col-md-4 d-flex align-self-stretch">
                            <div className="media block-6 services d-block text-center">
                                <div className="icon d-flex justify-content-center align-items-center"><span className="flaticon-piggy-bank"></span></div>
                                <div className="media-body py-md-4">
                                    <h3>Thuê nhà nhanh chóng</h3>
                                    <p>Hãy để chúng tôi đồng hành cùng bạn tìm kiếm một ngôi nhà, một không gian sống tuyệt vời để bắt đầu một cuộc sống tự lập, đầy những thử thách.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 d-flex align-self-stretch">
                            <div className="media block-6 services d-block text-center">
                                <div className="icon d-flex justify-content-center align-items-center"><span className="flaticon-wallet"></span></div>
                                <div className="media-body py-md-4">
                                    <h3>An lòng phụ huynh</h3>
                                    <p>Chúng tôi xây dựng cộng đồng an toàn, lành mạnh để mang lại sự an tâm cho gia đình có người thân đi học hoặc làm việc xa nhà.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex align-self-stretch">
                            <div className="media block-6 services d-block text-center">
                                <div className="icon d-flex justify-content-center align-items-center"><span className="flaticon-locked"></span></div>
                                <div className="media-body py-md-4">
                                    <h3>Hợp tác phát triển</h3>
                                    <p>Nếu bạn có mong muốn hợp tác để mang lại nhiều thay đổi cho người trẻ Việt Nam, hãy đồng hành cùng chúng tôi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Services