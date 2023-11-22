import React from 'react';
import '../css/CaseStudiesSlider.css';
import Rectangle from "../images/Rectangle 1.svg"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CaseStudiesSlider = () => {

  return (<Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    <SwiperSlide><div className="case-study-blocks">
            <div className="image-box" id="image-box-1">
              <div className="image-box-content">
                <img src={Rectangle} alt="Icon" />
                <h2>The Olympian</h2>
                <p>
                  The only athlete in the world to do her Olympic routine in
                  2020.
                </p>
              </div>
            </div>
            <div className="image-box" id="image-box-2">
              <div className="image-box-content">
                <img src={Rectangle} alt="Icon" />
                <h2>The Savings Jar</h2>
                <p>Grow your savings treasure and grow your dragon.</p>
              </div>
            </div>
            <div className="image-box" id="image-box-3">
              <div className="image-box-content">
                <img src={Rectangle} alt="Icon" />
                <h2>Skhokho seMali</h2>
                <p>
                  Helping South Africans become #CashCleva with Skhokho and
                  TymeBank.
                </p>
              </div>
            </div>
          </div></SwiperSlide>
    <SwiperSlide><div className="case-study-blocks">
            <div className="image-box" id="image-box-1">
              <div className="image-box-content">
                <img src={Rectangle} alt="Icon" />
                <h2>The Olympian</h2>
                <p>
                  The only athlete in the world to do her Olympic routine in
                  2020.
                </p>
              </div>
            </div>
            <div className="image-box" id="image-box-2">
              <div className="image-box-content">
                <img src={Rectangle} alt="Icon" />
                <h2>The Savings Jar</h2>
                <p>Grow your savings treasure and grow your dragon.</p>
              </div>
            </div>
            <div className="image-box" id="image-box-3">
              <div className="image-box-content">
                <img src={Rectangle} alt="Icon" />
                <h2>Skhokho seMali</h2>
                <p>
                  Helping South Africans become #CashCleva with Skhokho and
                  TymeBank.
                </p>
              </div>
            </div>
          </div></SwiperSlide>

  </Swiper>

  );
};

export default CaseStudiesSlider;

