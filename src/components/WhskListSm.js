import React from "react";

const WhskListSm = ({ list }) => { 
  return (
    list.map((ele) => {
      return (
        <div>
          <div key={ele.id} className={'whsk-list-wrap whsk-list-wrap-sm ' + ele.className}>
            <div className="container">
              <h3 className="ExtraTitle">{ele.title}</h3>
            </div>
          </div>
          <div className="container">
            <div className="whsk-desc-sm">
              <p>{ele.desc}</p>
              <a href="/johnniewalker/JwStory" className="btn-yellow">더 읽어보기 <span className="right-arrow"></span></a>
            </div>
          </div>
        </div>
      )
    })
  )
}

export default WhskListSm;