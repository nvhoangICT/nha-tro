import React from 'react'

const houseitem = () => {
    return (
        <div class="property-wrap ftco-animate">
            <a href="properties-single.html" class="img"
                style="background-image: url(images/nha-tro-1.png);"></a>
            <div class="text">
                <p class="price"><span class="orig-price">3,000,000đ<small>/mo</small></span></p>
                <ul class="property_list">
                    <li><span class="flaticon-bed"></span>2</li>
                    <li><span class="flaticon-bathtub"></span>1</li>
                    <li><span class="flaticon-floor-plan"></span>30 m2</li>
                </ul>
                <h3><a href="properties-single.html">Nhà Nguyên Căn</a></h3>
                <span class="location">Hai Bà Trưng</span>
                <a href="properties-single.html"
                    class="d-flex align-items-center justify-content-center btn-custom">
                    <span class="ion-ios-link"></span>
                </a>
            </div>
        </div>
    )
}

export default houseitem 