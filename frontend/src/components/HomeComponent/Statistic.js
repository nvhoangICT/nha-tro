import React from 'react'

const Statistic = () => {
    return (
        <>
            <section className="ftco-counter img" id="section-counter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 justify-content-center counter-wrap">
                            <div className="block-18 py-4 mb-4">
                                <div className="text text-border d-flex align-items-center">
                                    <strong className="number" data-number="305">305</strong>
                                    <span>Cư dân <br />được phục vụ</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 justify-content-center counter-wrap">
                            <div className="block-18 py-4 mb-4">
                                <div className="text text-border d-flex align-items-center">
                                    <strong className="number" data-number="1090">1090</strong>
                                    <span>Nhà trọ <br />còn trống</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 justify-content-center counter-wrap">
                            <div className="block-18 py-4 mb-4">
                                <div className="text text-border d-flex align-items-center">
                                    <strong className="number" data-number="209">209</strong>
                                    <span>Nhà đã <br />cho thuê</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 justify-content-center counter-wrap">
                            <div className="block-18 py-4 mb-4">
                                <div className="text d-flex align-items-center">
                                    <strong className="number" data-number="67">67</strong>
                                    <span>Đối tác <br />Chủ nhà</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Statistic