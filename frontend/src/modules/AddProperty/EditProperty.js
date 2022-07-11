import React, { useState,useEffect } from 'react'
import Header from '../../components/HomeComponent/Header'
import './styles.css'
import storage from "../../firebase/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import axios from 'axios';
// import axios from 'axios'
// import { loginUser } from '../../redux/apiRequest'
// import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom';
// const baseURL = "http://localhost:8081/api/add-property";
const baseURL = "http://localhost:8081";
const EditProperty = ({ onLogin }) => {
    const [address, setAddress] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [name, setName] = useState("")
    const [beds, setBeds] = useState(0)
    const [baths, setBaths] = useState(0)
    const [district, setDistrict] = useState(0)
    const [area, setArea] = useState("")
    const [yearBuilt, setYearBuilt] = useState("")
    const [waterPrice, setWaterPrice] = useState("")
    const [electricPrice, setElectricPrice] = useState("")
    const [file, setFile] = useState("");
    const [percent, setPercent] = useState(0);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState(null);
    const [listProps, setListProps] = useState([]);
      useEffect(() => {
        const fetchData = async () => {
          await axios.get(`${baseURL}/api/get-property/b6523fd1-e7c3-440d-8056-272b28824e64`).then((response) => {
            // setPost(response.data);
            // console.log(post.data[0].address);
            setPost(response.data.data);
            setLoading(false);
            // console.log(response.data.data)
            console.log(response.data.data);
           
          });
        }
        fetchData();
      }, []);
    const HandleEditProperty = async (e) => {
        e.preventDefault();
        const property = {
            name: name,
            address: address,
            area: area,
            bedroom: beds,
            bathroom: baths,
            yearBuilt: yearBuilt,
            price: price,
            waterPrice: waterPrice,
            electricPrice: electricPrice,
            description: description,
            districtId: district,
        };
        const res = await axios.post(`http://localhost:8081/api/put-property/b6523fd1-e7c3-440d-8056-272b28824e64`,
            JSON.stringify(property),
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            }
        );

        if (!file) {
            alert("Please choose a file first!")
        }
        const storageRef = ref(storage, `/${res.data.data}/1`)
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                });
            }
        );
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
                                        <div className="card-front" style={{ height: '120%', marginTop: '-20%', marginLeft: '-50%', width: '200%' }}>
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3">Đăng phòng trọ</h4>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group mt-2">
                                                                <select className="form-style" onChange={setName}>
                                                                    <option className="form-style" value="">-- Kiểu phòng trọ --</option>
                                                                    <option value="Nhà nguyên căn">Nhà nguyên căn</option>
                                                                    <option value="Phòng trọ">Phòng trọ</option>
                                                                </select>                                                                
                                                                {/* <Select placeholder= "-- Kiểu phòng trọ --" options={nameOptions} /> */}
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
                                                                    <option value="3">3</option>
                                                                </select>
                                                                <i className="input-icon uil uil-bath"></i>
                                                            </div>

                                                            <div className="form-group mt-2">
                                                                <input
                                                                    type="input"
                                                                    name="area"
                                                                    className="form-style"
                                                                    placeholder="Diện tích"
                                                                    autoComplete="off"
                                                                    value={area}
                                                                    onChange={(e) => setArea(e.target.value)}
                                                                />
                                                                <i className="input-icon uil uil-vector-square"></i>
                                                            </div>
                                                            <div className="form-group mt-2">
                                                                <select className="form-style" onChange={setDistrict}>
                                                                    <option className="form-style" value="">-- Quận --</option>
                                                                    <option value="1">Hoàng Mai</option>
                                                                    <option value="2">Cầu Giấy</option>
                                                                    <option value="3">Đống Đa</option>
                                                                    <option value="4">Hai Bà Trưng</option>
                                                                    <option value="5">Nam Từ Liêm</option>
                                                                    <option value="6">Bắc Từ Liêm</option>
                                                                    <option value="7">Hoàn Kiếm</option>
                                                                    <option value="8">Thanh Xuân</option>
                                                                    <option value="9">Ba Đình</option>

                                                                </select>
                                                                <i className="input-icon uil uil-building"></i>
                                                            </div>
                                                            <div className="form-group mt-2">
                                                                <input
                                                                    type="input"
                                                                    name="address"
                                                                    className="form-style"
                                                                    placeholder="Địa chỉ"
                                                                    autoComplete="off"
                                                                    value={address}
                                                                    onChange={(e) => setAddress(e.target.value)}
                                                                />
                                                                <i className="input-icon uil uil-location-pin-alt"></i>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group mt-2">
                                                                <input
                                                                    type="input"
                                                                    name="yearBuilt"
                                                                    className="form-style"
                                                                    placeholder="Năm xây dựng"
                                                                    autoComplete="off"
                                                                    value={yearBuilt}
                                                                    onChange={(e) => setYearBuilt(e.target.value)}
                                                                />
                                                                <i className="input-icon uil uil-newspaper"></i>
                                                            </div>
                                                            <div className="form-group mt-2">
                                                                <input
                                                                    type="input"
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
                                                                    type="input"
                                                                    name="price"
                                                                    className="form-style"
                                                                    placeholder="Giá tiền"
                                                                    autoComplete="off"
                                                                    value={price}
                                                                    onChange={(e) => setPrice(e.target.value)}
                                                                />
                                                                <i className="input-icon uil uil-dollar-alt"></i>
                                                            </div>
                                                            <div className="form-group mt-2">
                                                                <input
                                                                    type="input"
                                                                    name="waterPrice"
                                                                    className="form-style"
                                                                    placeholder="Giá tiền 1 số nước"
                                                                    autoComplete="off"
                                                                    value={waterPrice}
                                                                    onChange={(e) => setWaterPrice(e.target.value)}
                                                                />
                                                                <i className="input-icon uil uil-water"></i>
                                                            </div>
                                                            <div className="form-group mt-2">
                                                                <input
                                                                    type="input"
                                                                    name="electricPrice"
                                                                    className="form-style"
                                                                    placeholder="Giá tiền 1 số điện"
                                                                    autoComplete="off"
                                                                    value={electricPrice}
                                                                    onChange={(e) => setElectricPrice(e.target.value)}
                                                                />
                                                                <i className="input-icon uil uil-lightbulb-alt"></i>
                                                            </div>
                                                            <div className="form-group mt-2">
                                                                <input
                                                                    type="file"
                                                                    name="pic"
                                                                    className="form-style"
                                                                    onChange={(e) => setFile(e.target.files[0])}
                                                                />
                                                                <i className="input-icon uil uil-lightbulb-alt"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button type="submit" className="btn mt-4" onClick={(e) => { HandleEditProperty(e) }}>submit</button>
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

export default EditProperty