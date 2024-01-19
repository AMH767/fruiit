import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Pagination from "../src/components/Pagination";
import Layout from "../src/layout/Layout";
const BlogGrid = () => {
  return (
    <Layout>
      <PageBanner pageName={"Акции"} />
      <section className="news-page-section rel z-1 py-130 rpy-100">
        <div className="container">
          <div className="row justify-content-center blog-grid">
          <section className="offer-banners-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div
                className="offer-banner-item wow fadeInUp delay-0-2s"
                style={{
                  backgroundImage:
                    "url(https://www.meme-arsenal.com/memes/502faf513f1474f393416515a07a8969.jpg)",
                }}
              >
                <div className="content mb-0">
                  <span className="sub-title">40% скидка</span>
                  <h4 className="textacc">Lays с луком</h4>
                  {/* <p>Best Foods For Your Family</p> */}
                  {/* <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
            <div
                className="offer-banner-item wow fadeInUp delay-0-2s"
                style={{
                  backgroundImage:
                    "url(https://www.meme-arsenal.com/memes/502faf513f1474f393416515a07a8969.jpg)",
                }}
              >
                <div className="content mb-0">
                  <span className="sub-title">40% скидка</span>
                  <h4 className="textacc">Lays с луком</h4>
                  {/* <p>Best Foods For Your Family</p> */}
                  {/* <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
            <div
                className="offer-banner-item wow fadeInUp delay-0-2s"
                style={{
                  backgroundImage:
                    "url(https://www.meme-arsenal.com/memes/502faf513f1474f393416515a07a8969.jpg)",
                }}
              >
                <div className="content mb-0">
                  <span className="sub-title">40% скидка</span>
                  <h4 className="textacc">Lays с луком</h4>
                  {/* <p>Best Foods For Your Family</p> */}
                  {/* <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="https://raw.githubusercontent.com/AMH767/image/main/news/zucchiolo_p97029.jpg" alt="News" />
                  <span className="date">
                  <b>23</b> Авг
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Vegetable</span>
                  <h4>
                    <Link href="/blog-details">
                    На рынок Испании вывели новый вид овоща - Цуккиоло
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                    Читать Дальше <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div> */}
            {/* <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="https://fruitnews.ru/images/jch-optimize/ng/images_2022_11___62688__p50349.webp" alt="News" />
                  <span className="date">
                  <b>16</b> Ноя
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Farming</span>
                  <h4>
                    <Link href="/blog-potat">
                    НИИП создал новый сорт картофеля с высоким содержанием цинка и железа
                    </Link>
                  </h4>
                  <Link href="/blog-potat">
                    <a className="read-more">
                    Читать Дальше <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div> */}
            {/* <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="https://fruitnews.ru/images/2023/08/_65274_p53646.jpg" alt="News" />
                  <span className="date">
                  <b>14</b> Авг
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Organic Fruits</span>
                  <h4>
                    <Link href="/blog-temp">
                    Метеорологи ожидают рекордного роста мировой температуры в 2023-2027 гг.
                    </Link>
                  </h4>
                  <Link href="/blog-temp">
                    <a className="read-more">
                    Читать Дальше <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div> */}
            {/* <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/news/news4.jpg" alt="News" />
                  <span className="date">
                    <b>06</b> Nov
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Vegetable</span>
                  <h4>
                    <Link href="/blog-details">
                      Unicode UTF8 Character Sets They Sltimate Guide Systems
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/news/news5.jpg" alt="News" />
                  <span className="date">
                    <b>03</b> Sep
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Farming</span>
                  <h4>
                    <Link href="/blog-details">
                      Quality Foods Requirments For Every Human Body’s
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/news/news6.jpg" alt="News" />
                  <span className="date">
                    <b>09</b> Sep
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Organic Fruits</span>
                  <h4>
                    <Link href="/blog-details">
                      Choose Awesome Vegetables For Your Daily Life Routine
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/news/news7.jpg" alt="News" />
                  <span className="date">
                    <b>06</b> Nov
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Vegetable</span>
                  <h4>
                    <Link href="/blog-details">
                      Unicode UTF8 Character Sets They Sltimate Guide Systems
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/news/news8.jpg" alt="News" />
                  <span className="date">
                    <b>03</b> Sep
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Farming</span>
                  <h4>
                    <Link href="/blog-details">
                      Quality Foods Requirments For Every Human Body’s
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/news/news9.jpg" alt="News" />
                  <span className="date">
                    <b>06</b> Sep
                  </span>
                </div>
                <div className="content">
                  <span className="sub-title">Organic Fruits</span>
                  <h4>
                    <Link href="/blog-details">
                      Choose Awesome Vegetables For Your Daily Life Routine
                    </Link>
                  </h4>
                  <Link href="/blog-details">
                    <a className="read-more">
                      Read More <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
          <ul className="pagination justify-content-center flex-wrap">
            <Pagination
              paginationCls={".blog-grid .col-xl-4"}
              defaultSort={6}
            />
          </ul>
        </div>
        <div className="news-shapes">
          <img
            className="two-leaf"
            src="assets/images/slider/two-lear.png"
            alt="Leaf"
          />
          <img
            className="leaf-left"
            src="assets/images/shapes/leaf-three.png"
            alt="Leaf"
          />
          <img
            className="leaf-two"
            src="assets/images/shapes/leaf-three.png"
            alt="Leaf"
          />
          <img
            className="leaf-three"
            src="assets/images/shapes/leaf-1.png"
            alt="Leaf"
          />
        </div>
      </section>
    </Layout>
  );
};
export default BlogGrid;
