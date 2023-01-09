import React from "react";

const WhskListLg = ({ list , width }) => { 
  return (
    list.map((ele) => {
      return (
        <div key={ele.id} className={'whsk-list-wrap ' + ele.className}
          style={{
            height: width * 0.3675,
          }}
        >
          <div className="container">
            <div className="whsk-desc">
              <div>
                <h3 className="ExtraTitle">{ele.title}</h3>
                <p>{ele.desc}</p>
                <a href="/" className="btn-yellow">더 읽어보기 <img src="/assets/right-arrow-yellow-icon.png" alt="더 읽어보기"/></a>
              </div>
            </div>
          </div>
        </div>
      )
    })
  )
}

export default WhskListLg;