// import { Marker } from '@react-google-maps/api'
import React, { useState, useCallback, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import GoogleMap from '../GoogleMap/GoogleMap'
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import RequestTour from '../RequestTour/RequestTour'
import Header from '../../components/HomeComponent/Header'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import SendIcon from '@mui/icons-material/Send'
import axios from 'axios'


import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Table } from 'react-bootstrap'
const baseURL = "http://localhost:8081";
const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',
    top: '25%',
    left: '40%',
    transfrom: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#f5f5f5',
    border: '1px solid #000',
    p: 4
}

const PropertyDetails = (props) => {
    const [toggle, setToggle] = useState(1)
    const [image, setImage] = useState("")
    const toggleTab = (index) => {
        setToggle(index);
    }
    const [isZoomed, setIsZoomed] = useState(false)
    const handleImgLoad = useCallback(() => {
        setIsZoomed(true)
    }, [])
    const handleZoomChange = useCallback(shouldZoom => {
        setIsZoomed(shouldZoom)
    }, [])

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [time, setTime] = useState()
    const [tel, setTel] = useState()
    const [post, setPost] = useState()
    const [address, setAddress] = useState()
    const [property, setProperty] = useState()

    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [beds, setBeds] = useState("")
    const [baths, setBaths] = useState("")
    const [district, setDistrict] = useState("")
    const [area, setArea] = useState("")
    const [yearBuilt, setYearBuilt] = useState("")
    const [waterPrice, setWaterPrice] = useState("")
    const [electricPrice, setElectricPrice] = useState("")

    const { propertyId } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`${baseURL}/api/get-property/${propertyId}`).then((response) => {
                // setPost(response.data);
                // console.log(post.data[0].address);
                setPost(response.data.data);
                setLoading(true);
                setAddress(post.address)
                setProperty(post.name)
                setArea(post.area)
                setAddress(post.address);
                setBeds(post.bedroom)
                setBaths(post.bathroom)
                setDistrict(post.districtId)
                setYearBuilt(post.yearBuilt)
                setWaterPrice(post.waterPrice)
                setElectricPrice(post.electricPrice)
                setDescription(post.description)
                setPrice(post.price)
                console.log(response.data.data)
                // console.log(response.data.data);
            });
            await axios.get(`${baseURL}/api/get-owner/${propertyId}`).then((response) => {
                // setPost(response.data);
                // console.log(post.data[0].address);
                setTel(response.data.data.phone);
                console.log(response.data.data)
                // console.log(response.data.data);
            });
        }
        fetchData();
    }, [loading]);

    const HandleSubmit = async (e) => {
        e.preventDefault();
        const contact = {
            name: name,
            email: email,
            phone: phone,
            address: post.address,
            time: time,
        };
        console.log(contact)
        await axios.post(`http://localhost:8081/api/send-email`,
            JSON.stringify(contact),
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            }
        );
    }

    return (
        <>
            <Header />
            <section className="ftco-section ftco-property-details">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="property-details">
                                <div className="text text-center mt-4">
                                    <span className="subheading">{address}</span>
                                    <h2>{property}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 pills">
                            <div className="bd-example bd-example-tabs">
                                <div className="d-flex" style={{ justifyContent: 'space-between' }}>
                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item">
                                            <Link
                                                className={toggle === 1 ? "nav-link active" : "nav-link"}
                                                id="pills-description-tab"
                                                data-toggle="pill"
                                                to="#pills-description"
                                                role="tab"
                                                aria-controls="pills-description"
                                                aria-expanded="true"
                                                onClick={() => toggleTab(1)}
                                                style={{ border: '0px' }}
                                            >
                                                Tiện ích
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                className={toggle === 2 ? "nav-link active" : "nav-link"}
                                                id="pills-manufacturer-tab"
                                                data-toggle="pill"
                                                to="#pills-manufacturer"
                                                role="tab"
                                                aria-controls="pills-manufacturer"
                                                aria-expanded="true"
                                                onClick={() => toggleTab(2)}
                                            >
                                                Mô tả
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                className={toggle === 3 ? "nav-link active" : "nav-link"}
                                                id="pills-map-tab"
                                                data-toggle="pill"
                                                to="#pills-review"
                                                role="tab"
                                                aria-controls="pills-review"
                                                aria-expanded="true"
                                                onClick={() => toggleTab(3)}
                                            >
                                                Bản đồ
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link
                                                className={toggle === 4 ? "nav-link active" : "nav-link"}
                                                id="pills-review-tab"
                                                data-toggle="pill"
                                                to="#pills-review"
                                                role="tab"
                                                aria-controls="pills-review"
                                                aria-expanded="true"
                                                onClick={() => toggleTab(4)}
                                            >
                                                Hình ảnh
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                className={toggle === 5 ? "nav-link active" : "nav-link"}
                                                id="pills-review-tab"
                                                data-toggle="pill"
                                                to="#pills-review"
                                                role="tab"
                                                aria-controls="pills-review"
                                                aria-expanded="true"
                                                onClick={() => toggleTab(5)}
                                            >
                                                Tham quan
                                            </Link>
                                        </li>
                                    </ul>

                                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                        <li className="nav-item">
                                            <a href={`tel:+84${tel}`} className="propertyPhoneNumber">
                                                <IoPhonePortraitOutline style={{ marginBottom: '3px' }} />
                                                <span className="phone-text">&ensp;{tel}&ensp;</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">

                                            <button
                                                className={"nav-link active"}
                                                style={{ backgroundColor: "#7ac70c", border: '0px' }}
                                                onClick={handleOpen}
                                            >Liên hệ</button>
                                            <Modal
                                                open={open}
                                                onClose={handleClose}
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description"
                                            >
                                                <Box sx={style}>
                                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                                        Liên hệ
                                                    </Typography>
                                                    <Typography id="modal-modal-description" sx={{ mt: 3 }}>
                                                        <TextField
                                                            value={name}
                                                            onChange={(e) => setName(e.target.value)} id="outlined-basic" label="Tên" variant="outlined" style={{width:"300px"}} />
                                                    </Typography>
                                                    <Typography id="modal-modal-description" sx={{ mt: 3 }}>
                                                        <TextField value={time}
                                                            onChange={(e) => setTime(e.target.value)}
                                                            id="outlined-basic" label="Ngày giờ hẹn" variant="outlined" style={{width:"300px"}} />
                                                    </Typography>
                                                    <Typography id="modal-modal-description" sx={{ mt: 3 }}>
                                                        <TextField value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            id="outlined-basic" label="Email" variant="outlined" style={{width:"300px"}} />
                                                    </Typography>
                                                    <Typography id="modal-modal-description" sx={{ mt: 3 }}>
                                                        <TextField
                                                            value={phone}
                                                            onChange={(e) => setPhone(e.target.value)}
                                                            id="outlined-basic" label="Số điện thoại" variant="outlined" style={{width:"300px"}} />
                                                    </Typography>
                                                    <Button
                                                        endIcon={<SendIcon />}
                                                        variant="contained"
                                                        sx={{ mt: 3 }}
                                                        href="#outlined-buttons"
                                                        onClick={(e) => { HandleSubmit(e) }}
                                                    >Gửi</Button>
                                                </Box>
                                            </Modal>
                                        </li>
                                    </ul>
                                </div>

                                <div className="tab-content" id="pills-tabContent">
                                    <div className={toggle === 1 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab">
                                        <div className="row">
                                            <Table striped bordered hover>
                                                <thead>
                                                    <tr>
                                                        <th>Diện tích</th>
                                                        <th>Số phòng ngủ</th>
                                                        <th>Số phòng tắm</th>
                                                        <th>Năm xây dựng</th>
                                                        <th>Giá thuê</th>
                                                        <th>Giá điện</th>
                                                        <th>Giá nước</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>{area} m2</td>
                                                        <td>{beds}</td>
                                                        <td>{baths}</td>
                                                        <td>{yearBuilt}</td>
                                                        <td>{price} đ/tháng</td>
                                                        <td>{electricPrice} đ/số</td>
                                                        <td>{waterPrice} đ/số</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>

                                    <div className={toggle === 2 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-manufacturer" role="tabpanel" aria-labelledby="pills-map-tab">
                                        <h5>{description}</h5>
                                    </div>

                                    <div className={toggle === 3 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-map" role="tabpanel" aria-labelledby="pills-manufacturer-tab">
                                        <GoogleMap
                                            // googleMapURL={`https://maps.googleapis.com/maps/api/js?key=&v=3.exp&libraries=geometry,drawing,places`}
                                            googleMapURL={`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyA0Dx_boXQiwvdz8sJHoYeZNVTdoWONYkU`}
                                            loadingElement={<div style={{ height: `100%` }} />}
                                            containerElement={<div style={{ height: `90vh`, margin: `auto`, border: '2px solid black' }} />}
                                            mapElement={<div style={{ height: `100%` }} />}
                                        />
                                    </div>

                                    <div className={toggle === 4 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-review" role="tabpanel" aria-labelledby="pills-review-tab">
                                        <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
                                            <picture>
                                                <img
                                                    src={`https://firebasestorage.googleapis.com/v0/b/nha-tro-b7165.appspot.com/o/${propertyId}%2F1.jpg?alt=media&token=744d876c-ef00-4e98-a5a5-866148a06666`}
                                                    id="myimg"
                                                    alt="a house"
                                                    // onLoad={handleImgLoad}
                                                    height={600}
                                                // width="auto"
                                                />
                                            </picture>
                                        </ControlledZoom>
                                        {/* <div className="row">
                                            <div className="col-md-7">
                                                <h3 className="head">23 lượt phản hồi</h3>
                                                <div className="review d-flex">
                                                    <div className="user-img" style={{ backgroundImage: `url(images/person_1.jpg)` }}></div>
                                                    <div className="desc">
                                                        <h4>
                                                            <span className="text-left">Jacob Webb</span>
                                                            <span className="text-right">14 March 2018</span>
                                                        </h4>
                                                        <p className="star">
                                                            <span>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                            </span>
                                                            <span className="text-right"><Link to="#" className="reply"><i className="icon-reply"></i></Link></span>
                                                        </p>
                                                        <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
                                                    </div>
                                                </div>
                                                <div className="review d-flex">
                                                    <div className="user-img" style={{ backgroundImage: `url(images/person_2.jpg` }}></div>
                                                    <div className="desc">
                                                        <h4>
                                                            <span className="text-left">Jacob Webb</span>
                                                            <span className="text-right">14 March 2018</span>
                                                        </h4>
                                                        <p className="star">
                                                            <span>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                            </span>
                                                            <span className="text-right"><Link to="#" className="reply"><i className="icon-reply"></i></Link></span>
                                                        </p>
                                                        <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
                                                    </div>
                                                </div>
                                                <div className="review d-flex">
                                                    <div className="user-img" style={{ backgroundImage: `url(images/person_3.jpg)}` }}></div>
                                                    <div className="desc">
                                                        <h4>
                                                            <span className="text-left">Jacob Webb</span>
                                                            <span className="text-right">14 March 2018</span>
                                                        </h4>
                                                        <p className="star">
                                                            <span>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                            </span>
                                                            <span className="text-right">
                                                                <Link to="#" className="reply"><i className="icon-reply"></i></Link>
                                                            </span>
                                                        </p>
                                                        <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="rating-wrap">
                                                    <h3 className="head">Xếp hạng</h3>
                                                    <div className="wrap">
                                                        <p className="star">
                                                            <span>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                (98%)
                                                            </span>
                                                            <span>20 votes</span>
                                                        </p>
                                                        <p className="star">
                                                            <span>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star-outline"></i>
                                                                (85%)
                                                            </span>
                                                            <span>10 votes</span>
                                                        </p>
                                                        <p className="star">
                                                            <span>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star-outline"></i>
                                                                <i className="ion-ios-star-outline"></i>
                                                                (70%)
                                                            </span>
                                                            <span>5 votes</span>
                                                        </p>
                                                        <p className="star">
                                                            <span>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star-outline"></i>
                                                                <i className="ion-ios-star-outline"></i>
                                                                <i className="ion-ios-star-outline"></i>
                                                                (10%)
                                                            </span>
                                                            <span>0 vote </span>
                                                        </p>
                                                        <p className="star">
                                                            <span>
                                                                <i className="ion-ios-star"></i>
                                                                <i className="ion-ios-star-outline"></i>
                                                                <i className="ion-ios-star-outline"></i>
                                                                <i className="ion-ios-star-outline"></i>
                                                                <i className="ion-ios-star-outline"></i>
                                                                (0%)
                                                            </span>
                                                            <span>0 vote</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>

                                    <div className={toggle === 5 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-map" role="tabpanel" aria-labelledby="pills-manufacturer-tab">
                                        <div className="itemWrapper playerActive">
                                            <iframe src={'https://my.matterport.com/show/?model=AseRoob7d5G&amp;play=1'} style={{ height: '800px', width: '1200px' }}></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PropertyDetails