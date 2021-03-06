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
    }, [loading]);

    const HandleEditProperty = async (e) => {
        e.preventDefault();

        if(isNaN(area)){
            alert("\"" + area + "\" kh??ng ph???i s???, h??y nh???p l???i Di???n t??ch");
            setArea("");
        }

        if(isNaN(price)){
            alert("\"" + price + "\" kh??ng ph???i s???, h??y nh???p l???i Gi?? ti???n");
            setPrice("");
        }

        if(isNaN(yearBuilt)){
            alert("\"" + yearBuilt + "\" kh??ng ph???i s???, h??y nh???p l???i N??m x??y d???ng");
            setYearBuilt("");
        }

        if(isNaN(waterPrice)){
            alert("\"" + waterPrice + "\" kh??ng ph???i s???, h??y nh???p l???i Gi?? ti???n 1 s??? n?????c");
            setWaterPrice("");
        }

        if(isNaN(electricPrice)){
            alert("\"" + electricPrice + "\" kh??ng ph???i s???, h??y nh???p l???i Gi?? ti???n 1 s??? ??i???n");
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
                                                    <h4 className="mb-4 pb-3">Ch???nh s???a th??ng tin nh?? tr??? </h4>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group mt-2">
                                                                <select className="form-style" defaultValue={name} onChange={(e) => setName(e.target.value)}>
                                                                    <option className="form-style" value="">-- Ki???u ph??ng tr??? --</option>
                                                                    {/* <option value="Nh?? nguy??n c??n">Nh?? nguy??n c??n</option>
                                                                    <option value="Ph??ng tr???">Ph??ng tr???</option> */}
                                                                    {name === "Nh?? nguy??n c??n" ? <option selected value="Nh?? nguy??n c??n">Nh?? nguy??n c??n</option> : <option value="Nh?? nguy??n c??n">Nh?? nguy??n c??n</option>}
                                                                    {name === "Ph??ng tr???" ? <option selected value="Ph??ng tr???">Ph??ng tr???</option> : <option value="Ph??ng tr???">Ph??ng tr???</option>}
                                                                </select>
                                                                {/* <Select placeholder= "-- Ki???u ph??ng tr??? --" options={nameOptions} /> */}
                                                                <i className="input-icon uil uil-home-alt"></i>
                                                            </div>
                                                            <div className="form-group mt-2">
                                                                <select className="form-style" onChange={(e) => setBeds(e.target.value)}>
                                                                    <option className="form-style" value="">-- S??? ph??ng ng??? --</option>
                                                                    {beds == "1" ? <option selected value="1">1</option> : <option value="1">1</option>}
                                                                    {beds == "2" ? <option selected value="2">2</option> : <option value="2">2</option>}
                                                                    {beds == "3" ? <option selected value="3">3</option> : <option value="3">3</option>}
                                                                </select>
                                                                <i className="input-icon uil uil-bed"></i>
                                                            </div>
                                                            <div className="form-group mt-2">
                                                                <select className="form-style" onChange={(e) => setBaths(e.target.value)}>
                                                                    <option className="form-style" value="">-- S??? ph??ng t???m --</option>
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
                                                                    placeholder="Di???n t??ch"
                                                                    autoComplete="off"
                                                                    value={area}
                                                                    onChange={(e) => setArea(e.target.value)}
                                                                />
                                                                <i className="input-icon uil uil-vector-square"></i>
                                                            </div>
                                                            <div className="form-group mt-2">
                                                                <select className="form-style" onChange={(e) => setDistrict(e.target.value)}>
                                                                    <option className="form-style" value="">-- Qu???n --</option>
                                                                    {/* <option value="1">Ho??ng Mai</option>
                                                                    <option value="2">C???u Gi???y</option>
                                                                    <option value="3">?????ng ??a</option>
                                                                    <option value="4">Hai B?? Tr??ng</option>
                                                                    <option value="5">Nam T??? Li??m</option>
                                                                    <option value="6">B???c T??? Li??m</option>
                                                                    <option value="7">Ho??n Ki???m</option>
                                                                    <option value="8">Thanh Xu??n</option>
                                                                    <option value="9">Ba ????nh</option> */}
                                                                    {district == "1" ? <option selected value="1">Ho??ng Mai</option> : <option value="1">Ho??ng Mai</option>}
                                                                    {district == "2" ? <option selected value="2">C???u Gi???y</option> : <option value="2">C???u Gi???y</option>}
                                                                    {district == "3" ? <option selected value="3">?????ng ??a</option> : <option value="3">?????ng ??a</option>}
                                                                    {district == "4" ? <option selected value="4">Hai B?? Tr??ng</option> : <option value="4">Hai B?? Tr??ng</option>}
                                                                    {district == "5" ? <option selected value="5">Nam T??? Li??m</option> : <option value="5">Nam T??? Li??m</option>}
                                                                    {district == "6" ? <option selected value="6">B???c T??? Li??m</option> : <option value="6">B???c T??? Li??m</option>}
                                                                    {district == "7" ? <option selected value="7">Ho??n Ki???m</option> : <option value="7">Ho??n Ki???m</option>}
                                                                    {district == "8" ? <option selected value="8">Thanh Xu??n</option> : <option value="8">Thanh Xu??n</option>}
                                                                    {district == "9" ? <option selected value="9">Ba ????nh</option> : <option value="9">Ba ????nh</option>}
                                                                </select>
                                                                <i className="input-icon uil uil-building"></i>
                                                            </div>
                                                            <div className="form-group mt-2">
                                                                <input
                                                                    type="input"
                                                                    name="address"
                                                                    className="form-style"
                                                                    placeholder="?????a ch???"
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
                                                                    placeholder="N??m x??y d???ng"
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
                                                                    placeholder="M?? t???"
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
                                                                    placeholder="Gi?? ti???n"
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
                                                                    placeholder="Gi?? ti???n 1 s??? n?????c"
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
                                                                    placeholder="Gi?? ti???n 1 s??? ??i???n"
                                                                    autoComplete="off"
                                                                    value={electricPrice}
                                                                    onChange={(e) => setElectricPrice(e.target.value)}
                                                                />
                                                                <i className="input-icon uil uil-lightbulb-alt"></i>
                                                            </div>
                                                            <div className="form-group mt-2">
                                                                <select className="form-style" onChange={(e) => setStatus(e.target.value)}>
                                                                    <option className="form-style" value="">-- Tr???ng th??i --</option>
                                                                    {status == "0" ? <option selected value="0">Ch??a cho thu??</option> : <option value="0">Ch??a cho thu??</option>}
                                                                    {status == "1" ? <option selected value="1">???? cho thu??</option> : <option value="1">???? cho thu??</option>}
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