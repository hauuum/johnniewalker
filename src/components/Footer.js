import React, { useState } from "react";
import '../styles/footer.css';

const Footer = ( props ) => { 
  const [lang, setLang] = useState("KOREA");
  const transLang = (e) => { 
    setLang(e.target.value); 
    alert(`선택하신 ${e.target.value} 언어로 변경합니다. (준비중)`)
  }


  return (
    <footer>
      <div className="container">
        <div>
          <div className="footer-lang">
            <p>{props.lang}</p>
            <select value={lang} onChange={transLang}>
              <option value="KOREAN">KOREAN</option>
              <option value="ENGLISH">ENGLISH</option>
              <option value="CHINESE">CHINESE</option>
              <option value="ARABIC">ARABIC</option>
              <option value="JAPANESE">JAPANESE</option>
              <option value="FRENCH">FRENCH</option>
              <option value="GERMAN">GERMAN</option>
            </select>
          </div>
          <div className="footer-sitemap">
            <div>
              <a href="/">이용약관</a>
              <a href="/">개인정보 보호 및 쿠키공지</a>
              <a href="/">UGC POLICY</a>
              <a href="/">웹접근성 도움말</a>
              <a href="/">PRIVACY SETTINGS</a>
            </div>
            <p className="footer-desc">DRINKAWARE.CO.UKDRINKIQTHEBAR.COMTHE JOHNNIE WALKER, JOHNNIE WALKER HOUSE, JOHN WALKER & SONS, RED LABEL, BLACK LABEL, DOUBLE BLACK, GOLD LABEL RESERVE, PLATINUM LABEL, BLUE LABEL, XR, KING GEORGE V, JOHN WALKER & SONS ODYSSEY, THE JOHN WALKER, DIAMOND JUBILEE, THE ADVENTURER, THE SPICE ROAD, THE GOLD ROUTE AND THE ROYAL ROUTE WORDS, THE STRIDING FIGURE DEVICE AND ASSOCIATED LOGOS, JOY WILL TAKE YOU FURTHER ARE TRADEMARKS. © JOHN WALKER & SONS 2015. THE EXPLORERS CLUB FLAG AND ASSOCIATED LOGOS ARE TRADEMARKS OF THE EXPLORERS CLUB, A GLOBAL NON-PROFIT ORGANIZATION HEADQUARTERED IN NEW YORK CITY."
              <br />
              JOHN WALKER & SONS 2016
              <br />
              <br />
              PLEASE DO NOT SHARE WITH ANYONE UNDER THE LEGAL PURCHASE AGE FOR ALCOHOL.DRINK RESPONSIBLY.
              <br />
              COPYRIGHT © 2022. HAUUUMI. ALL RIGHT RESERVED.
            </p>
          </div>
          <div className="footer-sns">
            <a href="/"><img src="/assets/facebook2-icon.png" alt="페이스북으로 이동"/></a>
            <a href="/"><img src="/assets/instagram-icon.png" alt="인스타그램으로 이동"/></a>
            <a href="/"><img src="/assets/twitter-icon.png" alt="트위터로 이동"/></a>
            <a href="/"><img src="/assets/youtube-icon.png" alt="유튜브로 이동"/></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;