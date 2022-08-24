import Slider from "react-slick";

import Image from "../../Images/customer.png";

import "./Reviews.scss";

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <section className="py-5">
      <div className="container-sm pb-5">
        <h1 className="fw-bold mb-4 text-center">Our Customers</h1>
        <Slider {...settings}>
          <div className="reviews">
            <h3 className="reviews__title">title</h3>
            <div className="reviews__image-container">
              <img src={Image} alt="our customer" className="reviews__image" />
            </div>
            <p className="reviews__text">
              “ Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque lorem25
            </p>
            <p className="reviews__name">Sam</p>
            <p className="reviews__customer">customer</p>
          </div>

          <div className="reviews">
            <h3 className="reviews__title">title</h3>
            <div className="reviews__image-container">
              <img src={Image} alt="our customer" className="reviews__image" />
            </div>
            <p className="reviews__text">
              “ Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque ”
            </p>
            <p className="reviews__name">John</p>
            <p className="reviews__customer">customer</p>
          </div>

          <div className="reviews">
            <h3 className="reviews__title">title</h3>
            <div className="reviews__image-container">
              <img src={Image} alt="our customer" className="reviews__image" />
            </div>
            <p className="reviews__text">
              “ Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque ”
            </p>
            <p className="reviews__name">Lily</p>
            <p className="reviews__customer">customer</p>
          </div>
          <div className="reviews">
            <h3 className="reviews__title">title</h3>
            <div className="reviews__image-container">
              <img src={Image} alt="our customer" className="reviews__image" />
            </div>
            <p className="reviews__text">
              “ Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque ”
            </p>
            <p className="reviews__name">Monica</p>
            <p className="reviews__customer">customer</p>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;
