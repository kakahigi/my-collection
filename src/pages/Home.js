import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src="images/scarlet&violet.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>Pokemon Card Scarlet & Violet</h4>
                  <h5>
                    Gói mở rộng nâng cao <br />
                    Triplet Beat
                  </h5>
                  <p>Giá chỉ 1.500.000đ</p>
                  <Link className="button">Mua ngay</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src="images/4521329331256_S.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Pokemon Card</h4>
                    <h5>
                      Gói mở rộng <br />
                      Scarlet
                    </h5>
                    <p>Giá 1.500.000đ</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/violet.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Pokemon Card</h4>
                    <h5>
                      Gói mở rộng <br /> Violet
                    </h5>
                    <p>Giá 2.500.000đ</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/op3-1.png"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>
                      One Piece Card <br />
                    </h4>
                    <h5>
                      Gói tăng cường OP-3
                      <br />
                    </h5>
                    <p>Giá 1.500.000đ</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/4521329331256_S.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Pokemon Card</h4>
                    <h5>
                      Gói mở rộng <br />
                      Triplet Beat
                    </h5>
                    <p>Giá 1.500.000đ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="servies d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="servies" />
                  <div>
                    <h6>Miễn phí giao hàng</h6>
                    <p className="mb-0">với đơn hàng trên 500k</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="servies" />
                  <div>
                    <h6>Ưu đãi bất ngờ hàng ngày</h6>
                    <p className="mb-0">Tiết kiệm tới 25%</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="servies" />
                  <div>
                    <h6>Hỗ trợ 24/7</h6>
                    <p className="mb-0">Mọi lúc mọi nơi</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="servies" />
                  <div>
                    <h6>Giá cả phải chăng</h6>
                    <p className="mb-0">Từ thị trường Nhật Bản</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt="servies" />
                  <div>
                    <h6>Thanh toán an toàn</h6>
                    <p className="mb-0">Bảo mật 100%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Mô hình</h6>
                    <p>10 item</p>
                  </div>
                  <img src="images/rsz_goodsmile.jpg" alt="figure" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Mô hình</h6>
                    <p>10 item</p>
                  </div>
                  <img src="images/rsz_goodsmile.jpg" alt="figure" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Mô hình</h6>
                    <p>10 item</p>
                  </div>
                  <img src="images/rsz_goodsmile.jpg" alt="figure" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Mô hình</h6>
                    <p>10 item</p>
                  </div>
                  <img src="images/rsz_goodsmile.jpg" alt="figure" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Mô hình</h6>
                    <p>10 item</p>
                  </div>
                  <img src="images/rsz_goodsmile.jpg" alt="figure" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Mô hình</h6>
                    <p>10 item</p>
                  </div>
                  <img src="images/rsz_goodsmile.jpg" alt="figure" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Mô hình</h6>
                    <p>10 item</p>
                  </div>
                  <img src="images/rsz_goodsmile.jpg" alt="figure" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Mô hình</h6>
                    <p>10 item</p>
                  </div>
                  <img src="images/rsz_goodsmile.jpg" alt="figure" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
