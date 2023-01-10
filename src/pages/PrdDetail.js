import React, { useEffect, useState } from "react";
//Images
import prdBg from '../assets/prdDetail-bg.png';
import jwblue from '../assets/prd-detail-item.png';
import serveImg from '../assets/prd-detail1.png';
import storyImg from '../assets/prd-detail4.png';


const PrdDetail = () => { 
  const [scroll, setScroll] = useState(false);
  const [res, setRes] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);

  const Access_Key = '2mVXsnQUDdCom5BvXWE4iEQnPeF-MtC-MTXXOzTq2Ak';
  const url = `https://api.unsplash.com/search/photos?page=1&query=cocktail&client_id=${Access_Key}&orientation=landscape&per_page=13`

  const getImages = async () => { 
    const response = await fetch(url);
    const responJson = await response.json();
    const result = responJson.results;
    setRes(result);
  }

  const widthResize = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => { 
    getImages();
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY >= 0)
    });
    window.addEventListener("resize", widthResize);
    return () => {
      window.removeEventListener("resize", widthResize);
    }
  }, [])

  return (
    <>
      <div className="page prdDetail-page">
        <h2 className="ir-so">조니워커 제품 상세페이지</h2>
        <div className="prd-banner"
          style={{
            height: width >= 1200 ? width * 0.24 : ( width < 768 ? width * 0.48 : width * 0.38)
          }}>
          <img src={ prdBg } alt="배경이미지" />
        </div>
        <div className="prd-list-wrap prd-info">
          <div className="container">
            <div className={"prd-imgs " + (scroll ? 'scroll' : '')}
              style={{
                height: width >= 1200 ? 'auto' : ( width < 768 ? width * 0.52 : width * 0.36) 
              }}
            >
              <img src={ jwblue } alt="조니워커 블루라벨" />
              <img src={ jwblue } alt="조니워커 블루라벨" />
              <img src={ jwblue } alt="조니워커 블루라벨" />
              <img src={ jwblue } alt="조니워커 블루라벨" />
              <img src={ jwblue } alt="조니워커 블루라벨" />
              <img src={ jwblue } alt="조니워커 블루라벨" />
              <img src={ jwblue } alt="조니워커 블루라벨" />
            </div>
            <div className="prd-desc">
              <h3>JOHNNIE WALKER® BLUE LABEL</h3>
              <p>조니워커 블루 라벨은 타의 추종을 불허하는 걸작입니다. <br/>
  스코틀랜드에서도 가장 진귀한 위스키 원액을 엄선하여 블렌드한 
  탁월한 위스키입니다. 일만개 캐스크 중에서도 오직 단 하나의 확률로
  조니워커 블루 라벨의 독특한 풍미를 구현하는데 사용됩니다. <br/>
  아주 특별한 날을 위한, 아주 특별한 위스키입니다.
              </p>
            </div>
          </div>
        </div>
        <div className="prd-list-wrap prd-serve">
          <div className="container">
            <h3 className="ExtraTitle">SERVE</h3>
            <span className="slash"></span>
            <p>조니워커 블루 라벨은 니트, 온더락, 또는 물을 곁들이는 등 다양한 방법으로 즐기실 수 있습니다. <br />
  여러 방법 중 스트레이트로 드시거나 얼음물을 곁들여서 드실 것을 추천합니다.  <br />
  퍼펙트 서브는 다음과 같습니다.</p>
            <div className="prd-serve-imgs">
              <img src={ serveImg } alt="조니워커 서브" />
            </div>
            <div className="prd-serve-desc">
              <p>
                <span>I</span>
                텀블러 잔에 조니워커 블루 라벨 45 ml을 얼음 없이 넣습니다.
              </p>
              <p>
                <span>II</span>
                차가운 물이 담긴 잔을 별도로 준비합니다.
              </p>
              <p>
                <span>III</span>
                물을 먼저 마셔 입 안을 정돈한 뒤 위스키와 교대로 조금씩 음미하면 놀라울 정도로 복합적인 풍미를 경험하실 수 있습니다.
              </p>
            </div>
          </div>
        </div>
        <div className="prd-list-wrap prd-flavours">
          <div className="container">
            <h3 className="ExtraTitle">FLAVOURS</h3>
            <span className="slash"></span>
            <p>조니워커 블루 라벨은 풍부한 스모크 향을 갖고 있으며, <br />
              강한 풍미에 벨벳같은 부드러움이 파도처럼 밀려옵니다.
              <br />
              <br />
  가장 귀한 위스키들 중에서도 수작업으로 골라낸 캐스크에서만 만들어지므로<br />
  조니워커 블루 라벨만큼 감각적인 맛을 표현하는 것은 어렵습니다. <br />
  헤이즐넛, 꿀, 셰리, 오렌지 향이 처음엔 퍼지다가, 생강, 쿰쿠아트, 백단 그리고 다크 초콜릿과 <br />
  같은 숨겨진 풍미가 점점 느껴집니다. <br /> 꿀의 달콤함이 드러나면서 건조한 과일 향도 나며, <br />
  마지막은 여운이 긴 부드러운 스모크 향이 입안을 감싸줍니다</p>
          </div>
        </div>
        <div className="prd-list-wrap prd-story">
          <div className="container">
            <h3 className="ExtraTitle">STORY</h3>
            <span className="slash"></span>
            <div className="prd-story-cont">
              <img src={ storyImg } alt="조니워커 스토리" />
              <p>1867년에 존 워커의 아들 알렉산더가 '올드 하이랜드 위스키(Old Highland Whisky)'를 만들었습니다. 
  스코틀랜드 구석구석에서 좋은 향을 모아 만든 예술품 같은 특별한 블렌드 였습니다. 조니워커 블루 라벨은 이 하이랜드 위스키를 기념하는 것으로 워커의 천재성과 진정성을 구현하는 위스키입니다.
                <br />
                <br/>
  조니워커 블루 라벨은 르 몽드 셀렉션(Le Monde Selection)에서 그랜드 골드를 여섯 번 수상하였고, 샌프란시스코 주류 품평회(San Francisco World Spirits Competition)에서 더블골드를 두 번 수상하였습니다. 그 외에도 여러 건의 주요 수상 경력을 자랑합니다.</p>
            </div>
          </div>
        </div>
        <div className="prd-list-wrap prd-recipe">
          <div className="container">
            <h3 className="ExtraTitle">RECIPE</h3>
            <span className="slash"></span>
            <div className="prd-recipe-imgs">
              {
                res.map((ele) => { 
                  return (
                    <a href={ele.urls.small} className="prd-img" key={ele.id}>
                      <img
                        src={ele.urls.small}
                        alt={ ele.alt_description} />
                    </a>
                  )
                })
              }
            </div>
            <a href="https://unsplash.com/s/photos/cocktail" className="btn-blue" onClick={getImages}>레시피 더 보러가기</a>
          </div>
        </div>
      </div>
    </>
  )
}
export default PrdDetail;



// 스크롤 이벤트 사용하기
// https://whales.tistory.com/91
// https://goddino.tistory.com/317?category=1080917
// https://wazacs.tistory.com/21


// 언스플래스 api 이용해서 리스트 가져오기
// https://unsplash.com/developers
// https://fastcampus.co.kr/courses/203720/clips/ (참고자료1)
// https://ljh86029926.gitbook.io/coding-apple-react/4/4-unsplash-api#unsplash-api  (참고자료2)
// https://nscworld.net/2022/04/13/unsplash-api-%EC%82%AC%EC%9A%A9%EB%B2%95-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0/ 