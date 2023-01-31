import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Autoplay, EffectFade } from "swiper";

const MainBanner = () => { 
  return (
    <div className="container main-banner">
      <h3 className="ir-so">메인 배너영역</h3>
      <Swiper
        modules={[EffectFade, Parallax, Pagination]}
        speed={400}
        effect={"fade"}
        loop={false}
        parallax={true}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <div className="container">
            <div className="banner-txt">
              <p data-swiper-parallax="-200">조니워커 블루</p>
              <p data-swiper-parallax="-400">BLUE LABEL LIMITED EDITION</p>
              <p data-swiper-parallax="-700">조니워커 블루 라벨 리미티드 에디션은 특별하고 진귀한 위스키를 기념하기 위한 위스키입니다</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <div className="banner-txt">
              <p data-swiper-parallax="-200">SINCE 1867</p>
              <p data-swiper-parallax="-400">BLACK LABEL®</p>
              <p data-swiper-parallax="-700">조니워커 블랙 라벨은 다른 모든 고급 블렌드의 벤치마크로 자리잡은 진정한 아이콘입니다</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <div className="banner-txt">
              <p data-swiper-parallax="-200">위스키 상식</p>
              <p data-swiper-parallax="-400">조니워커를 더 현명하고 알차게 즐길 수 방법</p>
              <p data-swiper-parallax="-700">위스키의 더 깊은 풍미를 느끼게 해주는 다양한 테크닉으로 그 순간을 영원토록 기억하세요</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
export default MainBanner;