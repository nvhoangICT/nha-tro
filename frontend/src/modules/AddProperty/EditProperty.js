import React, { useState, useEffect } from 'react'
import Header from '../../components/HomeComponent/Header'
import './styles.css'
import storage from "../../firebase/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import axios from 'axios';
import { Link, Navigate, useParams } from 'react-router-dom';
// import axios from 'axios'
// import { loginUser } from '../../redux/apiRequest'
// import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom';
// const baseURL = "http://localhost:8081/api/add-property";
const baseURL = "http://localhost:8081";

const EditProperty = () => {
    const [address, setAddress] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [name, setName] = useState("")
    const [beds, setBeds] = useState("")
    const [baths, setBaths] = useState("")
    const [district, setDistrict] = useState("")
    const [area, setArea] = useState("")
    const [yearBuilt, setYearBuilt] = useState("")
    const [waterPrice, setWaterPrice] = useState("")
    const [electricPrice, setElectricPrice] = useState("")
    const [status, setStatus] = useState(false);
    const [percent, setPercent] = useState(0);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState(null);
    const [id, setId] = useState("");
    const [submit, setSubmit] = useState(false);

    let { propertyId } = useParams();
    // console.log(propertyId);
    const [listProps, setListProps] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`${baseURL}/api/get-property/${propertyId}`).then((response) => {
                // setPost(response.data);
                // console.log(post.data[0].address);
                setPost(response.data.data);
                setLoading(true);
                setArea(post.area)
                setAddress(post.address);
                setBeds(post.bedroom)
                setBaths(post.bathroom)
                setDistrict(post.districtId)
                setYearBuilt(post.yearBuilt)
                setWaterPrice(post.waterPrice)
                setElectricPrice(post.electricPrice)
                setStatus(post.status)
                setDescription(post.description)
                setPrice(post.price)
                setName(post.name)
                setId(post.id)
                // console.log(response.data.data)
                // console.log(response.data.data);
            });
        }
        fetchData();
    }, []);

    const HandleEditProperty = async (e) => {
        e.preventDefault();

        if(isNaN(area)){
            alert("\"" + area + "\" không phải số, hãy nhập lại Diện tích");
            setArea("");
        }

        if(isNaN(price)){
            alert("\"" + price + "\" không phải số, hãy nhập lại Giá tiền");
            setPrice("");
        }

        if(isNaN(yearBuilt)){
            alert("\"" + yearBuilt + "\" không phải số, hãy nhập lại Năm xây dựng");
            setYearBuilt("");
        }

        if(isNaN(waterPrice)){
            alert("\"" + waterPrice + "\" không phải số, hãy nhập lại Giá tiền 1 số nước");
            setWaterPrice("");
        }

        if(isNaN(electricPrice)){
            alert("\"" + electricPrice + "\" không phải số, hãy nhập lại Giá tiền 1 số điện");
            setElectricPrice("");
        }

        const property = {
            id: id,
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
            status: status
        };
        await axios.put(`http://localhost:8081/api/put-property`,
            JSON.stringify(property),
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            }
        );
        setSubmit(true);
    }


    return (
        <>
            <Header />
            <div className="section">
                <div className="container" style={{ backgroundImage: `url(images/bg_3.jpg)`}}>
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <div className="card-front" style={{ height: '120%', marginTop: '-20%', marginLeft: '-50%', width: '200%' }}>
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3">Chỉnh sửa thông tin nhà trọ </h4>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group mt-2">
                                                                <select className="form-style" defaultValue={name} onChange={(e) => setName(e.target.value)}>
                                                                    <option className="form-style" value="">-- Kiểu phòng trọ --</option>
                                                                    {/* <option value="Nhà nguyên căn">Nhà nguyên căn</option>
                                                                    <option value="Phòng trọ">Phòng trọ</option> */}
                                                                    {name === "Nhà nguyên căn" ? <option selected value="Nhà nguyên căn">Nhà nguyên căn</option> : <option value="Nhà nguyên căn">Nhà nguyên căn</option>}
                                                                    {name === "Phòng trọ" ? <option selected value="Phòng trọ">Phòng trọ</option> : <option value="Phòng trọ">Phòng trọ</option>}
                                                                </select>
                                                                {/* <Select placeholder= "-- Kiểu phòng trọ --" options={nameOptions} /> */}
                                                                <i className="input-icon uil uil-home-alt"></i>
                                                            </div>
                                                            <div className="form-group mt-2">
                                                                <select className="form-style" onChange={(e) => setBeds(e.target.value)}>
                                                                    <option className="form-style" value="">-- Số phòng ngủ --</option>
                                                                    {beds == "1" ? <option selected value="1">1</option> : <option value="1">1</option>}
                                                                    {beds == "2" ? <option selected value="2">2</option> : <option value="2">2</option>}
                                                                    {beds == "3" ? <option selected value="3">3</option> : <option value="3">3</option>}
                                                                </select>
                                                                <i className="input-icon uil uil-bed"></i>
                                                            </div>
                                                            <div className="form-group mt-2">
                                                                <select className="form-style" onChange={(e) => setBaths(e.target.value)}>
                                                                    <option className="form-style" value="">-- Số phòng tắm --</option>
                                                                    {baths == "0" ? <option selected value="0">Chung</option> : <option value="0">Chung</option>}
                                                                    {baths == "1" ? <option selected value="1">1</option> : <option value="1">1</option>}
                                                                    {baths == "2" ? <option selected value="2">2</option> : <option value="2">2</option>}
                                                                    {baths == "3" ? <option selected value="3">3</option> : <option value="3">3</option>}
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
                                                                <select className="form-style" onChange={(e) => setDistrict(e.target.value)}>
                                                                    <option className="form-style" value="">-- Quận --</option>
                                                                    {/* <option value="1">Hoàng Mai</option>
                                                                    <option value="2">Cầu Giấy</option>
                                                                    <option value="3">Đống Đa</option>
                                                                    <option value="4">Hai Bà Trưng</option>
                                                                    <option value="5">Nam Từ Liêm</option>
                                                                    <option value="6">Bắc Từ Liêm</option>
                                                                    <option value="7">Hoàn Kiếm</option>
                                                                    <option value="8">Thanh Xuân</option>
                                                                    <option value="9">Ba Đình</option> */}
                                                                    {district == "1" ? <option selected value="1">Hoàng Mai</option> : <option value="1">Hoàng Mai</option>}
                                                                    {district == "2" ? <option selected value="2">Cầu Giấy</option> : <option value="2">Cầu Giấy</option>}
                                                                    {district == "3" ? <option selected value="3">Đống Đa</option> : <option value="3">Đống Đa</option>}
                                                                    {district == "4" ? <option selected value="4">Hai Bà Trưng</option> : <option value="4">Hai Bà Trưng</option>}
                                                                    {district == "5" ? <option selected value="5">Nam Từ Liêm</option> : <option value="5">Nam Từ Liêm</option>}
                                                                    {district == "6" ? <option selected value="6">Bắc Từ Liêm</option> : <option value="6">Bắc Từ Liêm</option>}
                                                                    {district == "7" ? <option selected value="7">Hoàn Kiếm</option> : <option value="7">Hoàn Kiếm</option>}
                                                                    {district == "8" ? <option selected value="8">Thanh Xuân</option> : <option value="8">Thanh Xuân</option>}
                                                                    {district == "9" ? <option selected value="9">Ba Đình</option> : <option value="9">Ba Đình</option>}
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
                                                                <select className="form-style" onChange={(e) => setStatus(e.target.value)}>
                                                                    <option className="form-style" value="">-- Trạng thái --</option>
                                                                    {status == "0" ? <option selected value="0">Chưa cho thuê</option> : <option value="0">Chưa cho thuê</option>}
                                                                    {status == "1" ? <option selected value="1">Đã cho thuê</option> : <option value="1">Đã cho thuê</option>}
                                                                </select>
                                                                <i className="input-icon uil uil-lightbulb-alt"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button className="btn mt-4" onClick={(e) => { HandleEditProperty(e) }}>submit</button>
                                                    {submit && (
                                                        <Navigate to="/manage-property" replace={true} />
                                                    )}
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