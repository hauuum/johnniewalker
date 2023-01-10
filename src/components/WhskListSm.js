import React from "react";
// Images
import arrowRightIcon from '../assets/right-arrow-yellow-icon.png';

const WhskListSm = ({ list , width }) => { 
  return (
    list.map((ele) => {
      return (
        <div>
          <div key={ele.id} className={'whsk-list-wrap whsk-list-wrap-sm ' + ele.className}
            style={{
              height: width * 0.48,
            }}
          >
            <div className="container">
              <h3 className="ExtraTitle">{ele.title}</h3>
            </div>
          </div>
          <div className="container">
            <div className="whsk-desc-sm">
              <p>{ele.desc}</p>
              <a href="#" className="btn-yellow">더 읽어보기 <img src={ arrowRightIcon } alt="더 읽어보기"/></a>
            </div>
          </div>
        </div>
      )
    })
  )
}

export default WhskListSm;