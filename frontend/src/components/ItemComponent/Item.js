import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
const Item = (props) => {
    const {price, beds, baths, area, title, address, backgroundImage} = props
    return (
        <div className="col-md-6 col-lg-4 mx-sm-8 my-3">
            <Link to={`/item`} className="">
                <Card>
                {/* <Card.Img variant="top" src={"https://datnendep.vn/wp-content/uploads/2019/10/anh-phong-tro-1_1545126166.jpg"} /> */}
                <Card.Img variant="top" src={backgroundImage} />
                <Card.Body>
                    <Card.Title>{price}</Card.Title>
                    <div className='d-flex flex-row'>
                        <div className='d-flex flex-row justify-content-around'>
                            <i className="flaticon-bed mr-1"/>
                            <span>{beds}</span>
                        </div>
                        <div className='d-flex flex-row justify-content-around mx-3'>
                            <i className="flaticon-bathtub mr-1"/>
                            <span>{baths}</span>
                        </div>
                        <div className='d-flex flex-row justify-content-around'>
                            <i className="flaticon-floor-plan mr-1"/>
                            <span>{area}m2</span>
                        </div>
                    </div>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="location text-dark mb-3">{address}</Card.Text>
                </Card.Body>
                </Card>
            </Link>
            {/* <div className="text">
                <div>
                    <img src='https://datnendep.vn/wp-content/uploads/2019/10/anh-phong-tro-1_1545126166.jpg' />
                </div>
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
            </div> */}
        </div>
        // <div className="property-wrap col-md-6 col-lg-4">
        //     <Link to={`/item`} className="img" style={{ backgroundImage: backgroundImage }}></Link>
        //     <div className="text">
        //         <p className="price"><span className="orig-price">{price}đ<small>/mo</small></span></p>
        //         <ul className="property_list">
        //             <li><span className="flaticon-bed"></span>{beds}</li>
        //             <li><span className="flaticon-bathtub"></span>{baths}</li>
        //             <li><span className="flaticon-floor-plan"></span>{area} m2</li>
        //         </ul>
        //         <h3><Link to={`/item`}>{title}</Link></h3>
        //         <span className="location">{address}</span>
        //         <Link to={`/item`}
        //             className="d-flex align-items-center justify-content-center btn-custom">
        //             <span className="ion-ios-link"></span>
        //         </Link>
        //     </div>
        // </div>
    )
}

export default Item
