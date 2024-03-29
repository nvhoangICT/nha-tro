// import { Marker } from '@react-google-maps/api'
import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import GoogleMap from '../../modules/GoogleMap/GoogleMap'
import 'react-medium-image-zoom/dist/styles.css'
import Header from '../../components/HomeComponent/Header'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import SendIcon from '@mui/icons-material/Send'
import { Table } from 'react-bootstrap'

const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',
    top: '30%',
    left: '42%',
    transfrom: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: '#f5f5f5',
    border: '1px solid #000',
    p: 4
}

const ManagePropertyDetails = (props) => {
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

    // const storage = getStorage();
    // getDownloadURL(ref(storage, '/files/cap-anh-em-ngoc-son-ngoc-hai-me-hat-nhung-re-loi-khac-nhau-1.jpeg'))
    //     .then((url) => {
    //         // `url` is the download URL for 'images/stars.jpg'

    //         // This can be downloaded directly:
    //         const xhr = new XMLHttpRequest();
    //         xhr.responseType = 'blob';
    //         xhr.onload = (event) => {
    //             const blob = xhr.response;
    //         };
    //         xhr.open('GET', url);
    //         xhr.send();

    //         // Or inserted into an <img> element
    //         const img = document.getElementById('myimg');
    //         img.setAttribute('src', url);
    //     })   
    //     .catch((error) => {
    //         // Handle any errors
    //     });


    return (
        <>
            <Header />
            <section className="ftco-section ftco-property-details">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="property-details">
                                <div className="text text-center mt-4">
                                    <span className="subheading">{props.address}</span>
                                    <h2>{props.title}</h2>
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
                                            <button
                                                className={toggle === 1 ? "nav-link active" : "nav-link"}
                                                id="pills-description-tab"
                                                data-toggle="pill"
                                                to="#pills-description"
                                                role="tab"
                                                aria-controls="pills-description"
                                                aria-expanded="true"
                                                onClick={() => toggleTab(1)}
                                            >
                                                Người thuê
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button
                                                className={toggle === 2 ? "nav-link active" : "nav-link"}
                                                id="pills-manufacturer-tab"
                                                data-toggle="pill"
                                                to="#pills-manufacturer"
                                                role="tab"
                                                aria-controls="pills-manufacturer"
                                                aria-expanded="true"
                                                onClick={() => toggleTab(2)}
                                            >
                                                Giá tiền
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button
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
                                            </button>
                                        </li>

                                        <li className="nav-item">
                                            <button
                                                className={toggle === 4 ? "nav-link active" : "nav-link"}
                                                id="pills-review-tab"
                                                data-toggle="pill"
                                                to="#pills-review"
                                                role="tab"
                                                aria-controls="pills-review"
                                                aria-expanded="true"
                                                onClick={() => toggleTab(4)}
                                            >
                                                Phản hồi
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button
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
                                            </button>
                                        </li>
                                    </ul>

                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item">
                                            <a href="tel:+1-224-203-2815" className="propertyPhoneNumber">
                                                <IoPhonePortraitOutline style={{ marginBottom: '3px' }} />
                                                <span className="phone-text">&ensp;096-203-2815&ensp;</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className={"nav-link active"}
                                                id="pills-review-tab"
                                                data-toggle="pill"
                                                href="/request-tour"
                                                role="tab"
                                                aria-controls="pills-review"
                                                aria-expanded="true"
                                            >
                                                <button
                                                    className={"nav-link active"}
                                                    style={{ backgroundColor: "#7ac70c" }}
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
                                                            Quên mật khẩu
                                                        </Typography>
                                                        <Typography id="modal-modal-description" sx={{ mt: 3 }}>
                                                            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
                                                        </Typography>
                                                        <Button
                                                            endIcon={<SendIcon />}
                                                            variant="contained"
                                                            sx={{ mt: 2 }}
                                                            href="#outlined-buttons"
                                                        >Gửi</Button>
                                                    </Box>
                                                </Modal>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="tab-content" id="pills-tabContent">
                                    <div className={toggle === 1 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab">
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Họ tên</th>
                                                    <th>Địa chỉ</th>
                                                    <th>Số điện thoại</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>0983213123</td>
                                                    <td><Button>Sửa</Button><Button>Xóa</Button></td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                    <td><Button>Sửa</Button><Button>Xóa</Button></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        <Button>Thêm</Button>
                                    </div>

                                    <div className={toggle === 2 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-manufacturer" role="tabpanel" aria-labelledby="pills-map-tab">
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>Tháng</th>
                                                    <th>Tiền phòng</th>
                                                    <th>Tiền điện</th>
                                                    <th>Tiền nước</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                            </tbody>
                                        </Table>
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
                                        <div className="row">
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
                                        </div>
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

export default ManagePropertyDetails