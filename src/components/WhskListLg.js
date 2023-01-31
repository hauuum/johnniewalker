import React from "react";

const WhskListLg = ({ list }) => { 
  return (
    list.map((ele) => {
      return (
        <div key={ele.id} className={'whsk-list-wrap ' + ele.className}>
          <div className="container">
            <div className="whsk-desc">
              <div>
                <h3 className="ExtraTitle">{ele.title}</h3>
                <p>{ele.desc}</p>
                <a href="/johnniewalker/JwStory" className="btn-yellow">더 읽어보기 <span className="right-arrow"></span></a>
              </div>
            </div>
          </div>
        </div>
      )
    })
  )
}
export default WhskListLg;