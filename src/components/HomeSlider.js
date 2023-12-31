import Link from "next/link";
import { Fragment } from "react";
import munfirmSlider from "../munfirmSlider";
export const HomeSlider1 = () => {
  const { active, setActive } = munfirmSlider();
  return (
    <Fragment>
      <button
        className="slider-prev slick-arrow"
        onClick={() => setActive(active == 1 ? 2 : 1)}
      >
        <i className="fas fa-chevron-left" />
      </button>

      <div
        className={`slider-single-item slide-one ${
          active == 1 ? "slick-active" : ""
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="slider-content">
                <h1>FlavorFusion</h1>
                <h6>Добро пожаловать в FlavorFusion – ваш онлайн магазин свежих фруктов, овощей, сухофруктов, чая и пряностей! У нас вы найдете качественные и вкусные продукты для создания здоровой и вкусной пищи. Приходите к нам и наслаждайтесь покупками!
</h6>
                <div className="slider-btns mt-30">
                  <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Заказать <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  <Link href="/about">
                    <a className="theme-btn style-two">
                      Подробнее <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="slider-images">
                <img
                  className="image"
                  src="https://raw.githubusercontent.com/Alen44141/images/main/remove%20back/bigremoveimage/2.png"
                  alt="Slider"
                />

              </div>
            </div>
          </div>
        </div>
        <div className="slide-shapes">
          <img
            className="two-leaf"
            src="https://raw.githubusercontent.com/Alen44141/images/main/list/listR.png"
            alt="Leaf"
          />
          <img
            className="half-leaf"
            src="https://raw.githubusercontent.com/Alen44141/images/main/list/listL.png"
            alt="Leaf"
          />
          <img
            className="leaf-one"
            src="https://raw.githubusercontent.com/Alen44141/images/main/list/listR.png"
            alt="Leaf"
          />
          <img
            className="leaf-two"
            src="https://raw.githubusercontent.com/Alen44141/images/main/list/listL.png"
            alt="Leaf"
          />
        </div>
      </div>
      <div
        className={`slider-single-item slide-two ${
          active == 2 ? "slick-active" : ""
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="slider-images">
                <img
                  className="image"
                  src="https://raw.githubusercontent.com/Alen44141/images/main/remove%20back/bigremoveimage/3.png"
                  alt="Slider"
                />

              </div>
            </div>
            <div className="col-lg-6">
              <div className="slider-content">
                <h1>FlavorFusion</h1>
                <h6>Добро пожаловать в FlavorFusion – ваш онлайн магазин свежих фруктов, овощей, сухофруктов, чая и пряностей! У нас вы найдете качественные и вкусные продукты для создания здоровой и вкусной пищи. Приходите к нам и наслаждайтесь покупками!
</h6>
                <div className="slider-btns mt-30">
                  <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Заказать <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  <Link href="/about">
                    <a className="theme-btn style-two">
                      Подробнее <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide-shapes">
          <img
            className="two-leaf"
            src="https://raw.githubusercontent.com/Alen44141/images/main/list/listR.png"
            alt="Leaf"
          />
          <img
            className="half-leaf"
            src="https://raw.githubusercontent.com/Alen44141/images/main/list/listL.png"
            alt="Leaf"
          />
          <img
            className="leaf-one"
            src="https://raw.githubusercontent.com/Alen44141/images/main/list/listR.png"
            alt="Leaf"
          />
          <img
            className="leaf-two"
            src="https://raw.githubusercontent.com/Alen44141/images/main/list/listL.png"
            alt="Leaf"
          />
        </div>
      </div>
      <button
        className="slider-next slick-arrow"
        onClick={() => setActive(active == 2 ? 1 : 2)}
      >
        <i className="fas fa-chevron-right" />
      </button>
    </Fragment>
  );
};
export const HomeSlider2 = () => {
  const { active, setActive } = munfirmSlider();
  return (
    <Fragment>
      <button
        className="slider-prev slick-arrow"
        onClick={() => setActive(active == 1 ? 2 : 1)}
      >
        <i className="fas fa-chevron-left" />
      </button>

      <div
        className={`slider-single-item style-two ${
          active == 1 ? "slick-active" : ""
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="slider-content">
                <h1>Organic Foods &amp; Vegetables</h1>
                <div className="slider-btns mt-30">
                  <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  <Link href="/about">
                    <a className="theme-btn style-two">
                      Learn More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="slider-images">
                <img
                  className="image"
                  src="assets/images/slider/slider-two1.png"
                  alt="Slider"
                />

              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`slider-single-item style-two ${
          active == 2 ? "slick-active" : ""
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="slider-content">
                <h1>Organic Foods &amp; Vegetables</h1>
                <div className="slider-btns mt-30">
                  <Link href="/about">
                    <a className="theme-btn style-two">
                      Learn More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="slider-images">
                <img
                  className="image"
                  src="assets/images/slider/slider-two3.png"
                  alt="Slider"
                />
                <img
                  className="offer"
                  src="assets/images/shapes/organic.png"
                  alt="Organic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="slider-next slick-arrow"
        onClick={() => setActive(active == 2 ? 1 : 2)}
      >
        <i className="fas fa-chevron-right" />
      </button>
    </Fragment>
  );
};
export const HomeSlider3 = () => {
  const { active, setActive } = munfirmSlider();
  return (
    <Fragment>
      <button
        className="slider-prev slick-arrow"
        onClick={() => setActive(active == 1 ? 2 : 1)}
      >
        <i className="fas fa-chevron-left" />
      </button>

      <div
        className={`slider-single-item style-three slide-one ${
          active == 1 ? "slick-active" : ""
        }`}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-5">
              <div className="slider-content">
                <h1>Organic Food &amp; Vegetables</h1>
                <p>
                  On the other hand we denounce with righteou indignation and
                  dislike men who are so beguiled and demoralized
                </p>
                <div className="slider-btns mt-20">
                  <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  <Link href="/about">
                    <a className="theme-btn style-three">
                      Learn More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-9">
              <div className="slider-images">
                <img
                  className="image"
                  src="assets/images/slider/slider-three-1.png"
                  alt="Slider"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`slider-single-item style-three slide-two ${
          active == 2 ? "slick-active" : ""
        }`}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-9">
              <div className="slider-images">
                <img
                  className="image"
                  src="assets/images/slider/slider-three-1.png"
                  alt="Slider"
                />
              </div>
            </div>
            <div className="col-xl-5">
              <div className="slider-content">
                <h1>Organic Food &amp; Vegetables</h1>
                <p>
                  On the other hand we denounce with righteou indignation and
                  dislike men who are so beguiled and demoralized
                </p>
                <div className="slider-btns mt-20">
                  <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  <Link href="/about">
                    <a className="theme-btn style-three">
                      Learn More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="slider-next slick-arrow"
        onClick={() => setActive(active == 2 ? 1 : 2)}
      >
        <i className="fas fa-chevron-right" />
      </button>
    </Fragment>
  );
};
