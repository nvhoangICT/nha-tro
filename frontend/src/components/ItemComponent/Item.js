import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
    return (
        <div className="property-wrap">
            <Link to={`/explore/${props.id}`} className="img" style={{ backgroundImage: props.backgroundImage }}></Link>
            <div className="text">
                <p className="price"><span className="orig-price">{props.price}đ<small>/mo</small></span></p>
                <ul className="property_list">
                    <li><span className="flaticon-bed"></span>{props.beds}</li>
                    <li><span className="flaticon-bathtub"></span>{props.baths}</li>
                    <li><span className="flaticon-floor-plan"></span>{props.area} m2</li>
                </ul>
                <h3><Link to={`/explore/${props.id}`}>{props.title}</Link></h3>
                <span className="location">{props.address}</span>
                <Link to={`/explore/${props.id}`}
                    className="d-flex align-items-center justify-content-center btn-custom">
                    <span className="ion-ios-link"></span>
                </Link>
            </div>
        </div>
    )
}

export default Item