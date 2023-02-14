import React from "react";
import { Link } from "react-router-dom";
import {
  BsLinkedin,
  BsGithub,
  BsYoutube,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Đăng ký nhận E-Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div class="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Nhập địa chỉ email của bạn"
                  aria-label="Nhập địa chỉ email của bạn"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Đăng ký
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Liên hệ với chúng tôi</h4>
              <div className="footer-links d-flex flex-column">
                <address className="text-white fs-6">
                  Địa chỉ :Kanagawa, Yamato, <br /> Chuuo 1-7-36 <br />
                  242-0021
                </address>
                <a
                  href="tel:+81 8058109807"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +81 8058109807
                </a>
                <a
                  href="mailto:hiltiger123@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  hiltiger123@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a
                    className="text-white"
                    href="https://www.facebook.com/Toranef/"
                  >
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a
                    className="text-white"
                    href="https://www.facebook.com/Toranef/"
                  >
                    <BsGithub className="fs-4" />
                  </a>
                  <a
                    className="text-white"
                    href="https://www.youtube.com/@ToRaNef"
                  >
                    <BsYoutube className="fs-4" />
                  </a>
                  <a
                    className="text-white"
                    href="https://www.facebook.com/Toranef/"
                  >
                    <BsInstagram className="fs-4" />
                  </a>
                  <a
                    className="text-white"
                    href="https://www.facebook.com/Toranef/"
                  >
                    <BsFacebook className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Hỗ trợ</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Chính sách bảo mật</Link>
                <Link className="text-white py-2 mb-1">
                  Chính sách hoàn tiền
                </Link>
                <Link className="text-white py-2 mb-1">
                  Chính sách giao hàng
                </Link>
                <Link className="text-white py-2 mb-1">
                  Điều khoản & Điều kiện
                </Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Tài khoản</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Về chúng tôi</Link>
                <Link className="text-white py-2 mb-1">
                  Các câu hỏi thường gặp
                </Link>
                <Link className="text-white py-2 mb-1">Liên hệ</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Đường dẫn</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Mô hình</Link>
                <Link className="text-white py-2 mb-1">Thẻ bài</Link>
                <Link className="text-white py-2 mb-1">Phụ kiện</Link>
                <Link className="text-white py-2 mb-1">Khác</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy;{new Date().getFullYear()}; My Collection Được cung cấp
                bởi nhà phát triển Trường Nguyễn
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
