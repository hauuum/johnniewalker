import React from "react";
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, } from "swiper";

// import jwBlack from '../../public/assets/jw-prd-black.png';
const mainPrdList = [
  {
    inx: '1',
    name: '조니워커 블랙 라벨',
    nameEng: 'JOHNNIE WALKER® BLACK LABEL®',
    src: '/assets/jw-prd-black.png',
  },
  {
    inx: '2',
    name: '조니워커 더블 블랙',
    nameEng: 'JOHNNIE WALKER® DOUBLE BLACK™',
    src: '/assets/jw-prd-db-black.png',
  },
  {
    inx: '3',
    name: '조니워커 블루 라벨',
    nameEng: 'JOHNNIE WALKER® BLUE LABEL™',
    src:'/assets/jw-prd-blue.png',
  },
  {
    inx: '4',
    name: '조니워커 레드 라벨',
    nameEng: 'JOHNNIE WALKER® RED LABEL',
    src: '/assets/jw-prd-red.png',
  },
  {
    inx: '5',
    name: '조니워커 골드 라벨 리저브',
    nameEng: 'JOHNNIE WALKER® GOLD LABEL RESERVE™',
    src: '/assets/jw-prd-reserve.png',
  },
  {
    inx: '6',
    name: '조니워커 플래티넘 라벨 18년산',
    nameEng: 'JOHNNIE WALKER® PLATINUM LABEL™ 18 YEAR OLD',
    src: '/assets/jw-prd-18.png',
  },
]


const MainPrdListSlide = () => { 

  return (
    <div className="page-wrap main-prd-list">
      <h3 className="ir-so">조니워커 제품 리스트 영역</h3>
      <div className="container">
        <h4 className="title">지금 바로 조니워커 위스키를 경험해보세요</h4>
        <p className="subTitle">개척정신(pioneering), 상징성(iconic), 탁월함(exceptional)을 갖춘 클래식 블렌드</p>  
        <div className="row">
          <Swiper
            modules={[Navigation, Pagination]}
            centeredSlides={true}
            loop={true}
            navigation={true}
            pagination={{
              type: "fraction",
            }}
            breakpoints={{
              360: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
          >
            {
              mainPrdList.map((ele, inx) => {
                //console.log(ele.src)
                return (
                  <SwiperSlide key={ele.inx}>
                    <NavLink to={"/PrdList/PrdDetail"}>
                      <img src={ele.src} alt={ele.name} />
                      <div className="prd-txt">
                        <div>{ele.name}</div>
                        <div>{ele.nameEng}</div>
                      </div>
                    </NavLink>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
        <NavLink to={"/PrdList"} className="btn-blue">위스키 종류 더보기</NavLink>
      </div>
    </div>
  )
}
export default MainPrdListSlide;