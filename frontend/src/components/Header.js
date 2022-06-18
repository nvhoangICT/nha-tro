import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div class="container">
                <Link class="nav-item" to="index.html" style={{color: '#000', fontWeight: 'bolder', fontSize: '20px', paddingBottom: '2px'}}>Uptown</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="oi oi-menu"></span> Menu
                </button>

                <div class="collapse navbar-collapse" id="ftco-nav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"><Link to="index.html" class="nav-link">Trang chủ</Link></li>
                        <li class="nav-item"><Link to="about.html" class="nav-link">Câu chuyện</Link></li>
                        <li class="nav-item"><Link to="services.html" class="nav-link">Dịch vụ</Link></li>
                        <li class="nav-item"><Link to="properties.html" class="nav-link">Nhà trọ</Link></li>
                        <li class="nav-item"><Link to="blog.html" class="nav-link">Bài viết</Link></li>
                        <li class="nav-item"><Link to="contact.html" class="nav-link">Liên hệ</Link></li>
                        <li class="nav-item"><Link to="auth/index.html" class="nav-link" style={{color: '#e86ed0'}}>Đăng nhập</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header