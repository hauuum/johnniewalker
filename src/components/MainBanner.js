import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper";
//Images
import rightArrowIcon from '../assets/right-arrow-white-icon.png';

const MainBanner = () => { 
  const [width, setWidth] = useState(window.innerWidth);
  const widthResize = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", widthResize);
    return () => {
      window.removeEventListener("resize", widthResize);
    }
  }, []);

  return (
    <div className="main-banner">
      <h3 className="ir-so">메인 배너영역</h3>
      <Swiper
        modules={[Parallax, Navigation, Pagination, Autoplay]}
        speed={600}
        parallax={true}
        slidesPerView={1}
        // navigation={true}
        pagination={{
          type: "progressbar",
        }}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide style={{
          height: width > 1200 ? width * 0.322916 : ( width <= 768 ? width * 0.6111111 : width * 0.4296875 )
        }}>
          <div className="container">
            <div className="banner-txt">
              <p data-swiper-parallax="-200">SINCE 1867</p>
              <p data-swiper-parallax="-400">조니워커 블랙라벨 <span><img src={ rightArrowIcon } alt="바로가기"/></span> </p>
              <p data-swiper-parallax="-700">세계인에서 가장 사랑하는 No.1 위스키</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{
          height: width > 1200 ? width * 0.322916 : ( width <= 768 ? width * 0.6111111 : width * 0.4296875 )
        }}>
          <div className="container">
            <div className="banner-txt">
              <p data-swiper-parallax="-200">조니워커 블루</p>
              <p data-swiper-parallax="-400">로얄 블루 리미티드 에디션 <span><img src={ rightArrowIcon } alt="바로가기"/></span> </p>
              <p data-swiper-parallax="-700">소수에게만 허락된 최고의 블렌디드 위스키</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{
          height: width > 1200 ? width * 0.322916 : ( width <= 768 ? width * 0.6111111 : width * 0.4296875 )
        }}>
          <div className="container">
            <div className="banner-txt">
              <p data-swiper-parallax="-200">조니워커를 즐기는 방법</p>
              <p data-swiper-parallax="-400">조니워커로 시작하는 칵테일<span><img src={ rightArrowIcon } alt="바로가기"/></span></p>
              <p data-swiper-parallax="-700">조금 더 가볍게, 조금 더 다양하게 즐겨보세요</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
export default MainBanner;