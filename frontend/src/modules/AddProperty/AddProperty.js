import React, { useState } from 'react'
import Header from '../../components/HomeComponent/Header'
import './styles.css'
// import axios from 'axios'
// import { loginUser } from '../../redux/apiRequest'
// import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom';

const AddProperty = ({ onLogin }) => {
    const [address, setAddress] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [name, setName] = useState("")
    const [beds, setBeds] = useState(0)
    const [baths, setBaths] = useState(0)

    const options = [
        {
          label: "Apple",
          value: "apple",
        },
        {
          label: "Mango",
          value: "mango",
        },
        {
          label: "Banana",
          value: "banana",
        },
        {
          label: "Pineapple",
          value: "pineapple",
        },
      ];

    const HandleAddProperty = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <Header />
            <div className="section" style={{ backgroundImage: `url(images/bg_3.jpg)` }}>
                <div className="container">
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <div className="card-front" style={{ height: '120%', marginTop: '-20%', width: '100%' }}>
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3">Đăng phòng trọ</h4>
                                                    <div className="form-group">
                                                        <select className="form-style" onChange={setName}>
                                                            <option className="form-style" value="">-- Kiểu phòng trọ --</option>
                                                            <option value="Nhà nguyên căn">Nhà nguyên căn</option>
                                                            <option value="Căn hộ">Căn hộ</option>
                                                            <option value="Phòng trọ">Phòng trọ</option>
                                                        </select>
                                                        <i className="input-icon uil uil-home-alt"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <select className="form-style" onChange={setBeds}>
                                                            <option className="form-style" value="">-- Số phòng ngủ --</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                        </select>
                                                        <i className="input-icon uil uil-bed"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <select className="form-style" onChange={setBaths}>
                                                            <option className="form-style" value="">-- Số phòng tắm --</option>
                                                            <option value="0.5">0.5</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="2">3</option>
                                                        </select>
                                                        <i className="input-icon uil uil-bath"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input
                                                            type="address"
                                                            name="address"
                                                            className="form-style"
                                                            placeholder="Địa chỉ"
                                                            autoComplete="off"
                                                            value={address}
                                                            onChange={(e) => setAddress(e.target.value)}
                                                        />
                                                        <i className="input-icon uil uil-location-pin-alt"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input
                                                            type="description"
                                                            name="description"
                                                            className="form-style"
                                                            placeholder="Mô tả"
                                                            autoComplete="off"
                                                            value={description}
                                                            onChange={(e) => setDescription(e.target.value)}
                                                        />
                                                        <i className="input-icon uil uil-newspaper"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input
                                                            type="price"
                                                            name="price"
                                                            className="form-style"
                                                            placeholder="Giá tiền"
                                                            autoComplete="off"
                                                            value={price}
                                                            onChange={(e) => setPrice(e.target.value)}
                                                        />
                                                        <i className="input-icon uil uil-dollar-alt"></i>
                                                    </div>
                                                    <button type="submit" className="btn mt-4" onClick={(e) => { HandleAddProperty(e) }}>submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProperty