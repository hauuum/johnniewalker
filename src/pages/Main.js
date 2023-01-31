import React from "react";
import { NavLink } from 'react-router-dom';
import MainBanner from '../components/MainBanner';
import MainPrdListSlide from '../components/MainPrdListSlide';
import MainCampaign from '../components/MainCampaign';
import MainSnsImgs from '../components/MainSnsImgs';
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Images
import limitedEdition from '../assets/jw-limitedEdition.png';

const Main = () => {
  return (
    <div className="main-page">
      <h2 className="ir-so">조니워커 메인 페이지</h2>
      <MainBanner />
      <MainPrdListSlide />
      <MainSnsImgs />
      <div className="limited-edition">
        <h3 className="ir-so">신제품 </h3>
        <div className="container">
          <div className="limited-edition-row">
            <img src={ limitedEdition } alt="조니워커 로얄 블루 리미티드 에디션"/>
            <div className="limited-edition-desc">
              <h4 className="title">조니워커 로얄 블루 리미티드 에디션</h4>
              <p>장대한 성취를 축하하는 것부터 단순하고 진심 어린 '감사합니다'에 이르기까지 모든 경우에 어울리는 조니워커 위스키 선물이 있습니다. <br />
              완벽한 선물을 위해 탁월한 블렌디드 스카치 위스키 제품군을 살펴보십시오.<br />
              조니워커의 빅 볼드 플레이버(big bold flavours)를 기념하여 탄생한 조니워커 로얄 블루리미티드 에디션 상자. </p>
              <NavLink to={"/PrdList/PrdDetail"}>자세히 보러가기 <span className="right-arrow"></span></NavLink>
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
              <div className="jw-house-list">
                <NavLink to={"/JwStory"}>
                  <div>
                    <div className="jw-house-bg bg1">
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
              </NavLink>
            </div>
            <div className="jw-house-list">
              <NavLink to={"/JwStory"}>
                <div>
                  <div className="jw-house-bg bg2"> 
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
              </NavLink>
            </div>
          </div>
          <NavLink to={"/JwStory"} className="btn-blue">조니워커 하우스 더보기</NavLink>
        </div>
      </div>
      <div className="line-banner"></div>
      <MainCampaign />
    </div>
  )
}

export default Main;
