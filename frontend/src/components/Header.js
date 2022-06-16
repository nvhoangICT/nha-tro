import React from 'react'

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div class="container">
                <a class="navbar-brand" href="index.html">Uptown</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="oi oi-menu"></span> Menu
                </button>

                <div class="collapse navbar-collapse" id="ftco-nav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"><a href="index.html" class="nav-link">Trang chủ</a></li>
                        <li class="nav-item"><a href="about.html" class="nav-link">Câu chuyện</a></li>
                        <li class="nav-item"><a href="services.html" class="nav-link">Dịch vụ</a></li>
                        <li class="nav-item"><a href="properties.html" class="nav-link">Nhà trọ</a></li>
                        <li class="nav-item"><a href="blog.html" class="nav-link">Bài viết</a></li>
                        <li class="nav-item"><a href="contact.html" class="nav-link">Liên hệ</a></li>
                        <li class="nav-item"><a href="auth/index.html" class="nav-link">Đăng nhập</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header