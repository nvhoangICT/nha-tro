import { useState } from 'react';
import '../ChangeInformation/style.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/apiRequest'
import Header from '../../components/HomeComponent/Header';
import storage from "../../firebase/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import axios from 'axios';

const ChangeInformation = (props) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState(0);
    const [phone, setPhone] = useState("");
    const [citizenId, setCitizenId] = useState("");
    const [avatar, setAvatar] = useState("");

    const [file, setFile] = useState("");


    // progress
    const [percent, setPercent] = useState(0);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChangeInfo = async (e) => {
        e.preventDefault();
        const changeInformation = {
            name: name,
            dob: dob,
            address: address,
            email: email,
            phone: phone,
            password: password
        };
        // changeInformation(newUser, dispatch, navigate);

        


        if (!file) {
            alert("Please choose a file first!")
        }
        const storageRef = ref(storage, `/files/${file.name}`)
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

    function handleChange(event) {
        setFile(event.target.files[0]);
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
                                        <div className="card-front" style={{ height: '120%', marginTop: '-20%', width: '120%' }}>
                                            <div className="image">
                                                <div className="center-wrap " >
                                                    <div className="section text-center" >
                                                        <h4 className="pb-3">Thay đổi thông tin người dùng</h4>
                                                        <div className="form-group" >
                                                            <input
                                                                type="input"
                                                                name="name"
                                                                className="form-style"
                                                                placeholder="Họ tên"
                                                                autoComplete="off"
                                                                value={props.name}
                                                                onChange={(e) => setName(e.target.value)}
                                                            />
                                                            <i className="input-icon uil uil-user"></i>
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input
                                                                type="input"
                                                                name="email"
                                                                className="form-style"
                                                                placeholder="example@email.com"
                                                                autoComplete="off"
                                                                value={props.email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                            />
                                                            <i className="input-icon uil uil-at"></i>
                                                        </div>
                                                        <div className='form-group mt-2'>
                                                            <input
                                                                type="date"
                                                                name="dob"
                                                                className="form-style"
                                                                placeholder="Ngày sinh : DD/MM/YYYY"
                                                                autoComplete="off"
                                                                value={dob}
                                                                min="1997-01-01"
                                                                max="2030-12-31"
                                                                onChange={(e) => setDob(e.target.value)}
                                                            />
                                                            <i className="input-icon uil uil-calendar-alt"></i>
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
                                                            <i className="input-icon uil-map-marker"></i>

                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <select className="form-style" onChange={(e) => setGender(e.target.value)}>
                                                                <option className="form-style" value="">-- Giới tính --</option>
                                                                <option value="0">Nam</option>
                                                                <option value="1">Nữ</option>
                                                            </select>
                                                            <i className="input-icon uil uil-users-alt"></i>
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input
                                                                type="input"
                                                                name="phone"
                                                                className="form-style"
                                                                placeholder="Số điện thoại"
                                                                autoComplete="off"
                                                                value={phone}
                                                                onChange={(e) => setPhone(e.target.value)}
                                                            />
                                                            <i className="input-icon uil uil-phone"></i>
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input
                                                                type="input"
                                                                name="citizenId"
                                                                className="form-style"
                                                                placeholder="CMND/CCCD"
                                                                autoComplete="off"
                                                                value={citizenId}
                                                                onChange={(e) => setCitizenId(e.target.value)}
                                                            />
                                                            <i className="input-icon uil uil-postcard"></i>
                                                        </div>
                                                        {/* <div className="form-group mt-2">
                                                            <input
                                                                type="password"
                                                                name="password"
                                                                className="form-style"
                                                                placeholder="Mật khẩu"
                                                                autoComplete="off"
                                                                value={password}
                                                                onChange={(e) => setPassword(e.target.value)}
                                                            />
                                                            <i className="input-icon uil uil-lock-alt"></i>
                                                        </div> */}
                                                        <div className="form-group mt-2">
                                                            <input
                                                                type="file"
                                                                name="avatar"
                                                                className="form-style"
                                                                placeholder="Ảnh đại diện"
                                                                autoComplete="off"
                                                                onChange={(e) => setFile(e.target.files[0])}
                                                            />
                                                            <i className="input-icon uil uil-image"></i>
                                                        </div>
                                                        <button type="submit" className="btn mt-4" onClick={(e) => { handleChangeInfo(e) }}>submit</button>
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
            </div>
        </>
    )
}

export default ChangeInformation