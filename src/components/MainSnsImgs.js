import React from "react";

const SnsImgList = [
  {
    inx: '1',
    src: [require('../assets/sns-1.jpg')]
  },
  {
    inx: '2',
    src: [require('../assets/sns-2.jpg')]
  },
  {
    inx: '3',
    src: [require('../assets/sns-3.jpg')]
  },
  {
    inx: '4',
    src: [require('../assets/sns-4.jpg')]
  },
  {
    inx: '5',
    src: [require('../assets/sns-51.jpg')]
  },
]

const MainSnsImgs = () => { 
  return (
    <div className="page-wrap main-sns-imgs">
      <div className="container">
        <h3 className="title">전통과 모던함이 만나 오랜 시간 변함없는 테이스티</h3>
        <p className="subTitle">스카치 위스키의 블렌딩은 예술이자 과학입니다. 조니워커에겐 이것은 창립자 자신의 초기 블렌드까지 
          거의 2세기를 거슬러 올라가는 위스키 유형에 대한 깊이 있는 기술, 헌신 및 지식입니다.
        </p>
        <div className="sns-imgs">
          {
            SnsImgList.map(ele => {
              return (
                <img key={ele.inx} className={ `img` + ele.inx } src={ ele.src } alt="조니워커 SNS 이미지" />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
export default MainSnsImgs;