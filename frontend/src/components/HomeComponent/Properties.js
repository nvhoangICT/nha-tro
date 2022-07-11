import React from 'react'
import { Link } from 'react-router-dom'
import Item from '../ItemComponent/Item'

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
                            <Item
                                id="2"
                                backgroundImage="url(images/nha-tro-2.png)"
                                price="4,000,000"
                                beds="3"
                                baths="2"
                                area="50"
                                title="Nhà nguyên căn"
                                address="Hai Bà Trưng"
                            />
                            <Item
                                id="3"
                                backgroundImage="url(images/nha-tro-3.jpg)"
                                price="5,000,000"
                                beds="3"
                                baths="2"
                                area="50"
                                title="Nhà nguyên căn"
                                address="Hai Bà Trưng"
                            />

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Properties