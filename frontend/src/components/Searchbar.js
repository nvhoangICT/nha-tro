import React from 'react'
import { Link } from 'react-router-dom'

const Searchbar = () => {
    return (
        <>
        <div class="hero-wrap ftco-degree-bg" data-stellar-background-ratio="0.5">
            <div class="overlay">
            </div>
            <div class="container">
                <div class="row no-gutters slider-text justify-content-center align-items-center">
                    <div class="col-lg-8 col-md-6 d-flex align-items-end">
                        <div class="text text-center">
                            <h1 class="mb-4">Tìm nhà trọ một cách dễ dàng <br /></h1>
                            <p style={{ fontSize: "18px" }}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts</p>
                            <form action="#" class="search-location mt-md-5">
                                <div class="row justify-content-center">
                                    <div class="col-lg-10 align-items-end">
                                        <div class="form-group">
                                            <div class="form-field">
                                                <input type="text" class="form-control" placeholder="Search location" />
                                                <button><span class="ion-ios-search"></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mouse">
                <Link to="#" class="mouse-icon">
                    <div class="mouse-wheel"><span class="ion-ios-arrow-round-down"></span></div>
                </Link>
            </div>
        </div>
        </>
    )
}

export default Searchbar