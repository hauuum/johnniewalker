import React, { useEffect, useState } from "react";
import WhskListSm from '../components/WhskListSm';
import WhskLIstLg from '../components/WhskListLg';


const WhskInfo = () => { 
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

  const whskList = [
    {
      id: 0,
      className: 'whsk-history',
      title: 'THE HISTORY OF WHISKY',
      desc: `초기의 위스키는 수도승들이 증류하여 상당히 가벼웠습니다.
숙성이 이루어지지 않아 날것에 가까웠고, 수두에서 중풍까지 주로 치료 목적으로 사용되었기 때문이죠.
그럼 오늘날의 위스키는 어떻게 탄생했을까요?`,
    },
    {
      id: 1,
      className: 'whsk-made',
      title: 'HOW WHISKY IS MADE',
      desc: `스카치 위스키를 제조하는것은 가내 업에서부터 정밀한 공정의 발달까지
오랜 시간에 걸쳐 발전된 기술입니다.
진정한 스카치 위스키를 제조하는 데 필요한 기본적인 부분을 간단히 소개하겠습니다.`
    },
    {
      id: 2,
      className: 'whsk-type',
      title: 'TYPES OF WHISKY',
      desc: `싱글 몰트 스카치 위스키와 블렌디드 스카치 위스키 간의 차이점은 무엇입니까?
또 Whisky와 Whisk'e'y, 버번과 테네시 위스키, 라이(rye) 위스키의 차이는 무엇일까요?
위스키에 진심인 여러분을 위해 준비했습니다.`
    },
    {
      id: 3,
      className: 'drink-whsk',
      title: 'HOW TO DRINK WHISKY',
      desc: `위스키를 마시는 데 특정한 좋은 방법이나 나쁜 방법은 없습니다.
여러분이 그 순간을 즐기는 것이 가장 중요합니다.
하지만 위스키의 더 깊은 풍미를 느끼게 해주는 다양한 테크닉은 존재합니다.`
    },
    {
      id: 4,
      className: 'serve-whsk',
      title: 'SERVES AND WHISKY COCKTAILS',
      desc: `진정으로 위대한 위스키는 다재다능해야 합니다.
조니워커를 사용하여 깊고 선명한 풍미의 다양한 위스키 칵테일을 만들어 보십시오.`
    },
  ]

  return (
    <div className="page whsk-info-page">
      <h2 className="ir-so">위스키 상식 페이지입니다.</h2>
      <div className="whsk-video-wrap">
        <div className="whsk-video">
          <iframe src="https://www.youtube.com/embed/YqdmgUX_kY8?autoplay=1&mute=1"  title="YouTube video player" autoPlay></iframe>
        </div>
        <div className="whsk-video-desc">
          <div className="container">
            <div className="title">위스키는 스코틀랜드 게일어로 '우스게 바하(UISGE BEATHA)' 이며, 
              여기에서 '위스키'라는 단어가 파생되었습니다.
            </div>
            <p>얼마나 오래전부터 사람들이 알코올을 증류해 왔는지는 아직 밝혀지지 않았지만, 
그 역사는 최소한 4천년 간 이어져 온 것으로 보입니다.<br/>
증류 기술은 12세기에 이르러 유럽으로 전파되었습니다. <br/>
스코틀랜드에 남아있는 최초의 증류에 관한 문서는 15세기로 거슬러 올라갑니다.<br/>
 <br/>
1494년 왕이 500병의 아쿠아 비타이(aqua vitae), <br/>
즉 라틴어로 '생명의 물'을 만들기에 충분한 몰트를 준비하라고 지시한 것에서 시작됩니다. <br/>
            </p>
          </div>
        </div>
      </div>
      {
        width >= 768 ? <WhskLIstLg list={whskList} width={width} /> : <WhskListSm list={whskList} width={width} />
      }
    </div>
  )
}

export default WhskInfo;