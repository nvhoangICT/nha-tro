import {useState} from "react";
import "../ChangeInformation/style.css";
import {Link, Navigate, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../../redux/apiRequest";
import Header from "../../components/HomeComponent/Header";
import axios from "axios";

const ChangeInformation = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState(false);
  const [phone, setPhone] = useState("");
  const [citizenId, setCitizenId] = useState("");

  const [submit, setSubmit] = useState(false);

  const user = useSelector((state) => state.auth.login.currentUser);
  const id = user?.id;

  const handleChangeInfo = async (e) => {
    e.preventDefault();
    const user = {
      id: id,
      dob: dob,
      address: address,
      phone: phone,
      gender: gender,
      citizenId: citizenId,
    };
    console.log(user);
    try {
      const res = await axios.put("/api/change-info", user, {
        headers: {"Content-Type": "application/json"},
      });
      console.log(res.response.data);
    } catch (e) {
      
    }
    alert("Thêm thông tin người dùng thành công!");
    setSubmit(true);
  };

  return (
    <>
      <Header />
      <div
        className="section"
        style={{backgroundImage: `url(images/bg_3.jpg)`}}
      >
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div
                      className="card-front"
                      style={{
                        height: "100%",
                        marginTop: "-10%",
                        marginLeft: "-10%",
                        width: "120%",
                      }}
                    >
                      <div className="image">
                        <div className="center-wrap ">
                          <div className="section text-center">
                            <h4 className="pb-3">Thêm thông tin người dùng</h4>
                            <div className="form-group mt-2">
                              <input
                                type="date"
                                name="dob"
                                className="form-style"
                                placeholder="Ngày sinh : DD/MM/YYYY"
                                autoComplete="off"
                                value={dob}
                                min="1930-01-01"
                                max="2022-12-31"
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
                              <select
                                className="form-style"
                                onChange={(e) => setGender(e.target.value)}
                              >
                                <option className="form-style" value="">
                                  -- Giới tính --
                                </option>
                                <option value={true}>Nữ</option>
                                <option value={false}>Nam</option>
                              </select>
                              <i className="input-icon uil uil-bed"></i>
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
                            {/* <div className="form-group mt-2">
                              <input
                                type="file"
                                name="avatar"
                                className="form-style"
                                placeholder="Ảnh đại diện"
                                autoComplete="off"
                                onChange={(e) => setFile(e.target.files[0])}
                              />
                              <i className="input-icon uil uil-image"></i>
                            </div> */}
                            <button
                              type="submit"
                              className="btn mt-4"
                              onClick={(e) => {
                                handleChangeInfo(e);
                              }}
                            >
                              submit
                            </button>
                            {submit == true && (
                              <Navigate to="/" replace={true} />
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
      </div>
    </>
  );
};

export default ChangeInformation;
