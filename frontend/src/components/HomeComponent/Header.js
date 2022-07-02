
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
    const user = useSelector((state) => state.auth.login.currentUser)

    return (
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div className="container">
                <Link className="nav-item" to="/" style={{ color: '#000', fontWeight: 'bold', fontSize: '20px', paddingBottom: '2px' }}>Uptown</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><a href="http://localhost:3006" className="nav-link">Quản lý</a></li>
                        {/* <li className="nav-item"><Link to="about.html" className="nav-link">Câu chuyện</Link></li>
                        <li className="nav-item"><Link to="services.html" className="nav-link">Dịch vụ</Link></li> */}
                        <li className="nav-item"><Link to="/explore" className="nav-link">Tìm phòng</Link></li>
                        {/* <li className="nav-item"><Link to="blog.html" className="nav-link">Bài viết</Link></li>
                        <li className="nav-item"><Link to="contact.html" className="nav-link">Liên hệ</Link></li> */}
                        <li className="nav-item"><Link to="/add-property" className="nav-link">Đăng phòng</Link></li>
                        {!user
                            ? <li className="nav-item"><Link to="/auth" className="nav-link" style={{ color: '#e86ed0' }}>Đăng nhập</Link></li>
                            :
                            <>
                                <li className="nav-item">
                                    <Link to="/change-info" className="nav-link" style={{ color: '#e86ed0' }}>{user.name}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/logout" className="nav-link">Đăng xuất</Link>
                                    </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header