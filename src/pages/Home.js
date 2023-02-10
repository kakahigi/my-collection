import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner-content position-relative p-3">
                <img
                  src="images/4521329331270.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>Scarlet & Violet</h4>
                  <h5>
                    Gói mở rộng nâng cao <br />
                    Triplet Beat
                  </h5>
                  <p>Giá chỉ 1.500.000đ</p>
                  <Link className="button">Mua ngay</Link>
                </div>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
