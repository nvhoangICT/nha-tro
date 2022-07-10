import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
    const {price, beds, baths, area, title, address, backgroundImage} = props
    return (
        <div className="property-wrap col-md-6 col-lg-4">
            <Link to={`/item`} className="img" style={{ backgroundImage:backgroundImage }}></Link>
            <div className="text">
                <p className="price"><span className="orig-price">{price}đ<small>/mo</small></span></p>
                <ul className="property_list">
                    <li><span className="flaticon-bed"></span>{beds}</li>
                    <li><span className="flaticon-bathtub"></span>{baths}</li>
                    <li><span className="flaticon-floor-plan"></span>{area} m2</li>
                </ul>
                <h3><Link to={`/item`}>{title}</Link></h3>
                <span className="location">{address}</span>
                <Link to={`/item`}
                    className="d-flex align-items-center justify-content-center btn-custom">
                    <span className="ion-ios-link"></span>
                </Link>
            </div>
        </div>
    )
}

export default Item