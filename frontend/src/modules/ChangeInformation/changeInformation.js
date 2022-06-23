import { useState } from 'react';

export default function ChangeInformation() {

    // States for registration
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    return (
        <div className="form">
            <div>
                <h1>Thay đổi thông tin người dùng</h1>
            </div>

            <form action="" className="form" >

                <div className="spacer"></div>

                <div className="form-group">
                    <label for="fullname" className="form-label">Tên đầy đủ</label>
                    <input size id="fullname" name="fullname" type="text" placeholder="VD: Sơn Đặng" className="form-control" />
                    <span className="form-message"></span>
                </div>

                <div className="form-group">
                    <label for="email" className="form-label">Email</label>
                    <input id="email" name="email" type="text" placeholder="VD: email@domain.com" className="form-control" />
                    <span className="form-message"></span>
                </div>

                <div className="form-group">
                    <label for="password" className="form-label">Mật khẩu</label>
                    <input id="password" name="password" type="password" placeholder="Nhập mật khẩu" className="form-control" />
                    <span className="form-message"></span>
                </div>

                <div className="form-group">
                    <label for="password_confirmation" className="form-label">Nhập lại mật khẩu</label>
                    <input id="password_confirmation" name="password_confirmation" placeholder="Nhập lại mật khẩu" type="password" className="form-control" />
                    <span className="form-message"></span>
                </div>
                <div className="form-group">
                    <label for="address" className="form-label">Địa chỉ</label>
                    <input id="address" name="address" type="address" placeholder="Số nhà / Đường / Huyện /Tỉnh " className="form-control" />
                    <span className="form-message"></span>
                </div>
                <div className="form-group">
                    <label for="phone" className="form-label">Số điện thoại</label>
                    <input id="phone" name="phone" type="phone" placeholder="" className="form-control" />
                    <span className="form-message"></span>
                </div>
                <div className="form-group">
                    <label for="date" className="form-label">Ngày tháng năm sinh</label>
                    <input id="date" name="date" type="date"  className="form-control" />
                    <span className="form-message"></span>
                </div>
                <button className="form-submit">Sửa đổi</button>
            </form>
        </div>
    );
}
