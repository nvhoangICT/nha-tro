import React from 'react'

const AdvancedSearch = () => {
    return (
        <>
            <div className="card-3d-wrapper">
                <div className="card-front">
                    <div className="center-wrap">
                        <div className="section text-center">
                            <h4 className="mb-4 pb-3">Đăng phòng trọ</h4>
                            <div className="form-group mt-2">
                                <select className="form-style">
                                    <option className="form-style" value="">-- Số phòng ngủ --</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <i className="input-icon uil uil-users-alt"></i>
                            </div>
                            <div className="form-group mt-2">
                                <select className="form-style">
                                    <option className="form-style" value="">-- Số phòng tắm --</option>
                                    <option value="0.5">0.5</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="2">3</option>
                                </select>
                                <i className="input-icon uil uil-users-alt"></i>
                            </div>
                            <button type="submit" className="btn mt-4">submit</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AdvancedSearch