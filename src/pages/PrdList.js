import React, { useEffect, useState, useRef } from "react";
import { NavLink } from 'react-router-dom';
// import PrdDetail from './pages/PrdDetail';

const prdSonsList = [
  {
    inx: '1',
    name: '존 워커 앤 선즈 킹 조지5세',
    nameEng: 'JOHN WALKER & SONS KING GEORGE V',
    src: '/assets/jw-prd-01.png',
  },
  {
    inx: '2',
    name: '존 워커 앤 선즈 프라이빗 컬렉션 2014 에디션',
    nameEng: 'JOHN WALKER & SONS PRIVATE COLLECTION 2014',
    src: '/assets/jw-prd-02.png',
  },
  {
    inx: '3',
    name: '존 워커 앤 선즈 XR 21',
    nameEng: 'JOHN WALKER & SONS XR 21',
    src:'/assets/jw-prd-03.png',
  },
  {
    inx: '4',
    name: '존 워커 앤 선즈 프라이빗 컬렉션 2015 에디션',
    nameEng: 'JOHN WALKER & SONS PRIVATE COLLECTION 2015',
    src: '/assets/jw-prd-04.png',
  },
  {
    inx: '5',
    name: '존 워커 앤 선즈 오디세이',
    nameEng: 'JOHN WALKER & SONS ODYSSEY',
    src: '/assets/jw-prd-05.png',
  },
  {
    inx: '6',
    name: '존 워커 앤 선즈 더 존 워커',
    nameEng: 'JOHN WALKER & SONS THE JOHN WALKER',
    src: '/assets/jw-prd-06.png',
  },
  {
    inx: '7',
    name: '존 워커 앤 선즈 다이아몬드 쥬빌리',
    nameEng: 'JOHN WALKER & SONS DIAMOND JUBILEE',
    src: '/assets/jw-prd-07.png',
  },
]
const prdColoursList = [
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
const prdLimitList= [
  {
    inx: '1',
    name: '조니워커 블루 라벨 리미티드 에디션',
    nameEng: 'JOHNNIE WALKER® BLUE LABEL LIMITED EDITION',
    src: '/assets/jw-prd-08.png',
  },
  {
    inx: '2',
    name: '조니워커 골드 라벨 리저브 리미티드 에디션',
    nameEng: 'JOHNNIE WALKER® GOLD LABEL RESERVE LIMITED EDITION',
    src:'/assets/jw-prd-09.png',
  },
  {
    inx: '3',
    name: '조니워커 더블 블랙 리미티드 에디션',
    nameEng: 'JOHNNIE WALKER® DOUBLE BLACK LIMITED EDITION',
    src: '/assets/jw-prd-10.png',
  },
]

const PrdList = () => { 
  const [width, setWidth] = useState(window.innerWidth);
  const [jwStoryWidth, setJwStorywidth] = useState(0); 

  const widthResize = () => {
    setWidth(window.innerWidth);
    jwStoryResize();
  }
  const jwStoryResize = () => { 
    setJwStorywidth(jwStory.current.clientWidth);
  }
  const jwStory = useRef(null);

  useEffect(() => {
    jwStoryResize();

    window.addEventListener("resize", widthResize);
    return () => {
      window.removeEventListener("resize", widthResize);
    }
  }, []);

  return (
      <div className="page prdList-page">
        <h2 className="ir-so">조니워커 제품 라인업 페이지</h2>
        <div className="prd-banner">
          <div className="container">
            <img src="/assets/prdList-bg.png" alt="" />
          </div>
        </div>
        <div className="page-wrap prd-list">
          <div className="container">
            <p>
              <em>오랜 시간 세계인의 사랑을 받고 있는 No.1 위스키</em>
              조니워커 컬러 라벨의 클래식한 위스키 제품부터 
최고의 성취를 기념하기 위해 탄생한 존 워커 앤 선즈 제품, <br />
위대한 여정에 영감을 받은 조니워커 익스플로러스 클럽 컬렉션, 
그리고 한정된 수량으로 선보이는 다양한 조니워커 위스키들의 리미티드 에디션까지. 
조니워커만의 탁월한 블렌디드 스카치 위스키를 만나보십시오.
            </p>
            <div className="prd-list-wrap prd-sons">
              <h3 className="ExtraTitle">JOHN WALKER <br />& SONS</h3>
              <span className="slash"></span>
              <p>위대한 업적을 기념하기 위해 탄생한 특별한 블렌드</p>
              <div className="prd-items">
                {
                  prdSonsList.map((ele) => { 
                    return (
                      <div key={ele.inx} className="prd-son-item">
                        <NavLink to={"/PrdList/PrdDetail"}>
                          <img src={ele.src} alt={ele.name} />
                          <div className="prd-lg-hover prd-son-hover">{ele.name}</div>
                          <div className="prd-sm-desc prd-son-sm-desc">
                            <p>
                              {ele.name}
                              <span>{ele.nameEng}</span>
                            </p>
                          </div>
                        </NavLink>
                      </div>
                    )
                  })
                }
              </div>
              {/* <button className="btn-blue">제품 더보기</button> */}
            </div>
            <div className="prd-list-wrap prd-colours">
              <h5 className="ExtraTitle">JOHNNIE WALKER COLOURS</h5>
              <span className="slash"></span>
              <p>개척정신(pioneering), 상징성(iconic), 탁월함(exceptional)을 갖춘 클래식 블렌드</p>
              <div className="prd-items">
                {
                  prdColoursList.map((ele) => { 
                    return (
                      <div key={ele.inx} className="prd-colours-item">
                        <NavLink to={"/PrdList/PrdDetail"}>
                          <img src={ele.src} alt={ele.name} />
                          <div className="prd-lg-hover prd-colours-hover">{ele.name}</div>
                          <div className="prd-sm-desc prd-colours-sm-desc">
                            <p>
                              {ele.name}
                              <span>{ele.nameEng}</span>
                            </p>
                          </div> 
                        </NavLink>
                      </div>
                    )
                  })
                }
              </div>
              {/* <button className="btn-blue">제품 더보기</button> */}
          </div>
          <div className="prd-list-wrap prd-limited">
              <h3 className="ExtraTitle">LIMITED EDITIONS</h3>
              <span className="slash"></span>
              <p>한정수량으로 출시된 조니워커만의 아주 특별한 리미티드 에디션</p>
              <div className="prd-items">
                {
                  prdLimitList.map((ele) => { 
                    return (
                      <div key={ele.inx} className="prd-limited-item">
                        <NavLink to={"/PrdList/PrdDetail"}>
                          <img src={ele.src} alt={ele.name} />
                          <div className="prd-lg-hover prd-limited-hover">{ele.name}</div>
                          <div className="prd-sm-desc prd-limited-sm-desc">
                            <p>
                              {ele.name}
                              <span>{ele.nameEng}</span>
                            </p>
                          </div>
                        </NavLink>
                      </div>
                    )
                  })
                }
            </div>
            {/* <button className="btn-blue">제품 더보기</button> */}
            </div>
          </div>
        </div>
      <div className="jw-story" ref={ jwStory }>
          <div className="container">
          <div className="jw-story-bg"
              style={{
                height: width > 1200 ? '28.75rem' : jwStoryWidth * 0.420833333
              }}
          ></div>
            <div className="jw-story-txt">
              <div className="title"><span>조니워커의 스토리가 궁금하신가요?</span></div>
              <p><span>조니워커의 전설은 지금 이 순간에도 쓰여지고 있습니다.</span></p>
              <p><span>평범한 농장 청년이였던 그가 세계에서 가장 큰 위스키 브랜드를</span></p>
              <p><span>세우기까지 조니워커의 역사를 직접 확인해보세요</span></p>
              <div className="more-btn">
                <NavLink to={"/JwStory"}>자세히 보러가기<img src="/assets/right-arrow-blue-icon.png" alt="자세히 보러가기" /></NavLink>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PrdList;
