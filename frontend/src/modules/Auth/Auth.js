import React from 'react'
import './styles.css'
import Login from './Login'
import Register from './Register'
import Header from '../../components/HomeComponent/Header'

const Auth = () => {
    return (
        <>
            <Header />
            <div className="section" style={{ backgroundImage: `url(images/bg_3.jpg)` }}>
                <div className="container">
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <h6 className="mb-0 pb-3"><span>Đăng nhập</span><span>Đăng ký</span></h6>
                                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                <label htmlFor="reg-log"></label>
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <Login />
                                        <Register />
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

export default Auth