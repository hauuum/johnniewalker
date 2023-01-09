import React, { useState, useEffect, useRef } from "react";
import { NavLink } from 'react-router-dom';
import MainBanner from '../components/MainBanner';
import MainPrdListSlide from '../components/MainPrdListSlide';
import MainCampaign from '../components/MainCampaign';

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Main = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [jwHouseWidth, setJwHouseWidth] = useState(0);

  const widthResize = () => {
    setWidth(window.innerWidth);
    jwHouseResize();
  }
  
  const jwHouseList = useRef();

  const jwHouseResize = () => { 
    setJwHouseWidth(jwHouseList.current.clientWidth);
  }

  useEffect(() => {
    jwHouseResize();
    
    window.addEventListener("resize", widthResize);
    return () => {
      window.removeEventListener("resize", widthResize);
    }
  });

  return (
    <div className="main-page">
      <h2 className="ir-so">조니워커 메인 페이지</h2>
      <MainBanner />
      <MainPrdListSlide />
      <div className="page-wrap main-sns-imgs">
        <h3 className="ir-so">조니워커 SNS 새소식</h3>
        <div className="container">
          <h4 className="title">전통과 모던함이 만나 오랜 시간 변함없는 테이스티</h4>
          <p className="subTitle">스카치 위스키의 블렌딩은 예술이자 과학입니다. 조니워커에겐 이것은 창립자 자신의 초기 블렌드까지 거의 2세기를 거슬러 올라가는 위스키 유형에 대한 깊이 있는 기술, 헌신 및 지식입니다.
          </p>
          <div className="sns-imgs">
            <a href="/" className="img1"><img src="/assets/sns-1.jpg" alt="조니워커 SNS 이미지1"/></a>
            <a href="/" className="img5"><img src="/assets/sns-51.jpg" alt="조니워커 SNS 이미지5"/></a>
            <a href="/" className="img2"><img src="/assets/sns-2.jpg" alt="조니워커 SNS 이미지2"/></a>
            <a href="/" className="img3"><img src="/assets/sns-3.jpg" alt="조니워커 SNS 이미지3"/></a>
            <a href="/" className="img4"><img src="/assets/sns-4.jpg" alt="조니워커 SNS 이미지4"/></a>
          </div>
        </div>
      </div>
      <div className="limited-edition">
        <h3 className="ir-so">신제품 </h3>
        <div className="container">
          <div className="limited-edition-row">
            <img src="/assets/jw-limitedEdition.png" alt="조니워커 로얄 블루 리미티드 에디션"/>
            <div className="limited-edition-desc">
              <h4 className="title">조니워커 로얄 블루 리미티드 에디션</h4>
              <p>장대한 성취를 축하하는 것부터 단순하고 진심 어린 '감사합니다'에 이르기까지 모든 경우에 어울리는 조니워커 위스키 선물이 있습니다. <br />

완벽한 선물을 위해 탁월한 블렌디드 스카치 위스키 제품군을 살펴보십시오.<br />
                
조니워커의 빅 볼드 플레이버(big bold flavours)를 기념하여 탄생한 조니워커 로얄 블루리미티드 에디션 상자. </p>
              <NavLink to={"/PrdList/PrdDetail"}>자세히 보러가기 <img src="/assets/right-arrow-blue-icon.png" alt="자세히 보러가기" /></NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="page-wrap jw-house">
        <h3 className="ir-so">조니워커 하우스 소개영역</h3>
        <div className="container">
          <h4 className="title">특별한 당신을 위한 조니워커 하우스에 초대합니다</h4>
          <p className="subTitle">조니 워커 하우스는 조니워커의 고급 스카치 위스키를 체험해 볼수 있는 위스키 전용 대사관입니다.</p>
          <div className="jw-house-row">
              <div className="jw-house-list" ref={ jwHouseList }>
                <a href="/JwStory">
                  <div>
                    <div className="jw-house-bg bg1" style={{
                      height: jwHouseWidth * 0.5559322
                    }}>
                  </div>
                  <div className="jw-house-desc-lg">
                      <div>
                        <em>서울</em>
                        <p>조니워커 서울 하우스는 트렌드세터 지역인 청담동에 자리하고 있습니다.
  건물은 기하 하적 패널로 장식된 멋진 외관으로 유명합니다. 내부에는 조니워커의 창작품들을 대형 스크린을 통해 HD로 상영되고 있습니다. 
  오랜 역사와 현대적인 기술이 만난, 조니워커 서울 하우스에서는 방문자들에게 맞춤 블렌딩, 주문제작 된 리테일, 그리고 위스키 칵테일 교실을 제공하고 있습니다.
  조니워커 블루 라벨 더 캐스크 에디션 "사신도"는 4가지의 정령들인 붉은 동양 불사조, 검은 거북, 푸른 용, 흰색 호랑이에게 행운을 비는 한국의 전통에서 영감을 받아 만들어진 위스키입니다. 조니워커 하우스에서 제공한 첫번째 한국 특별판이며, 100세트로 한정 판매되고 있습니다. 이 에디션은 서울 조니워커 하우스에서만 구매할 수 있습니다.</p>
                      </div>
                  </div>
                </div>
                <div className="jw-house-desc-sm">
                  <p>조니워커 서울 하우스는 트렌드세터 지역인 청담동에 자리하고 있습니다. 건물은 기하 하적 패널로 장식된 멋진 외관으로 유명합니다. 내부에는 조니워커의 창작품들을 대형 스크린을 통해 HD로 상영되고 있습니다. 오랜 역사와 현대적인 기술이 만난, 조니워커 서울 하우스에서는 방문자들에게 맞춤 블렌딩, 주문제작 된 리테일, 그리고 위스키 칵테일 교실을 제공하고 있습니다. 조니워커 블루 라벨 더 캐스크 에디션 "사신도"는 4가지의 정령들인 붉은 동양 불사조, 검은 거북, 푸른 용, 흰색 호랑이에게 행운을 비는 한국의 전통에서 영감을 받아 만들어진 위스키입니다. 조니워커 하우스에서 제공한 첫번째 한국 특별판이며, 100세트로 한정 판매되고 있습니다. 이 에디션은 서울 조니워커 하우스에서만 구매할 수 있습니다.</p>
                </div>
              </a>
            </div>
            <div className="jw-house-list" ref={ jwHouseList }>
              <a href="/JwStory">
                <div>
                  <div className="jw-house-bg bg2" style={{
                      height: jwHouseWidth * 0.5559322
                    }}> 
                  </div>
                  <div className="jw-house-desc-lg">
                    <div>
                        <em>베이징</em>
                    <p>청두는 중국에서 세 번째로 세워진 조니워커 하우스입니다. 위스키 교육, 개인 맞춤 블렌드와 음식 메뉴, 희귀한 위스키 체험 및 조니워커 마스터 블렌더 세션 등 특별서비스를 제공하는 고급 위스키 엠버시입니다. 이 하우스에는 세계에서 제일 큰 '걷고 있는 모습을 한 신사'의 동상이 전시되어 있습니다. 연못에서 의기양양하게 일어서고 있는 모습을 한 이 동상은, 중국해를 가로지른 조니워커의 여정을 상징하고 있습니다.</p>
                    </div>
                  </div>
                </div>
                <div className="jw-house-desc-sm">
                  <p>청두는 중국에서 세 번째로 세워진 조니워커 하우스입니다. 위스키 교육, 개인 맞춤 블렌드와 음식 메뉴, 희귀한 위스키 체험 및 조니워커 마스터 블렌더 세션 등 특별서비스를 제공하는 고급 위스키 엠버시입니다. 이 하우스에는 세계에서 제일 큰 '걷고 있는 모습을 한 신사'의 동상이 전시되어 있습니다. 연못에서 의기양양하게 일어서고 있는 모습을 한 이 동상은, 중국해를 가로지른 조니워커의 여정을 상징하고 있습니다.</p>
                </div>
              </a>
            </div>
          </div>
          <NavLink to={"/JwStory/JwHouse"} className="btn-blue">조니워커 하우스 더보기</NavLink>
        </div>
      </div>
      <div className="line-banner" style={{
          height: width > 1200 ? width * 0.1770833 : ( width < 768 ? width * 0.3555555 : width * 0.192708333)
        }}>
      </div>
      <MainCampaign />
    </div>
  )
}

export default Main;
