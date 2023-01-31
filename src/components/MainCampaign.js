import React, { useState, useEffect } from "react";

const MainCampaign = () => {
  const [counter, setCounter] = useState(
    () => JSON.parse(window.localStorage.getItem("counter")) || 145491
  );

  const numCounter = () => { 
    alert("참여해주셔서 감사합니다");
    return setCounter((counter + 1));
  }

  useEffect(() => {
    window.localStorage.setItem("count", JSON.stringify(counter));
  }, [counter]);

  return (
    <div className="page-wrap jw-campaign">
        <h3 className="ir-so">캠페인 영역</h3>
        <div className="container">
          <h4 className="title">조니워커와 함께 하는 음주음전 근절 캠페인</h4>
          <p className="subTitle">
조니워커는 책임있는 음주문화를 만들어가는데 전념하고 있습니다. <br />
그러한 이유로 우리는 음주운전 금지에 대한 약속 캠페인을 진행해왔습니다.
            <br />
            <br />
            절대 음주운전을 하지 않겠다는 자신과의 약속을 해주세요
          </p>
          <div className="video-hashtag">
            <span>#IMNOTDRIVING</span>
            <span>#NODRUNKDRIVING</span>
          </div>
          <div className="video-wrap">
            <iframe src="https://www.youtube.com/embed/56b09ZyLaWk" title="YouTube video player" ></iframe>
          </div>
          <p className="campaign-desc">
            다음과 같은 인원이 해당 캠페인에 참가하였습니다.<br/>
아래의 버튼을 클릭하여 책임있는 음주에 문화에 동참해주세요
          </p>
        <p className="campaign-prtcp"><em>{counter.toLocaleString()}</em>명</p>
          <button className="btn-blue" onClick={numCounter}>서약에 참여하기</button>
      </div>
    </div>
  )
}

export default MainCampaign;