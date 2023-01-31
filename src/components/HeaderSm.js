import React, { useRef } from "react";
import { NavLink } from 'react-router-dom';

// Imagse
import logoImgSm from '../assets/jw-sm-logo.png';
import logoImgLarge from '../assets/jw-lg-logo.png';
import searchIconWhite from '../assets/search-white-icon.png';
import searchIconGray from '../assets/search-gray-icon.png';
import openMenuIcon from '../assets/menu-icon.png';
import closeMenuIcon from '../assets/left-arrow-white-icon.png';

const HeaderSm = () => { 
  const sideMenu = useRef(null);
  const searchForm = useRef(null);
  const nav = useRef(null);

  const searchFnc = (e) => { 
    e.preventDefault();
    sideMenu.current.style = 'left: 0;  transition: 1s;'
    searchForm.current.style = 'display: block';
    nav.current.style = 'display: none';
  }
  const navFnc = (e) => { 
    e.preventDefault();
    sideMenu.current.style = 'left: 0;  transition: 1s;'
    nav.current.style = 'display: block';
    searchForm.current.style = 'display: none';
  }
  const closeSideMenu = (e) => { 
    e.preventDefault();
    sideMenu.current.style = 'left: 400%;'
  }
  const onScroll = () => {
    window.scrollTo(0,0);
  }

  return (
    <>
      <header className="header-sm">
        <div className="container">
          <h1 className="logo-sm">
            <NavLink to={"/"} onClick={onScroll}><img src={ logoImgLarge } alt="조니워커 로고"/></NavLink>
          </h1>
          <div className="header-icon-wrap">
            <a href="/" onClick={ navFnc }>
              <img src={ openMenuIcon } alt="메뉴보기" />
            </a>
            <a href="/" onClick={ searchFnc }>
              <img src={ searchIconGray } alt="검색하기" />
            </a>
          </div>
        </div>
      </header>
      <div className="side-menu" ref={sideMenu}>
        <div className='container'>
          <div className="side-menu-top">
            <a href="/" className="closed-btn" onClick={ closeSideMenu }>
              <img src={ closeMenuIcon } alt="메뉴창 닫기" />
            </a>
            <h1 className="logo-sm" onClick={closeSideMenu}>
              <NavLink to={"/"} onClick={onScroll}><img src={ logoImgSm } alt="조니워커 로고"/></NavLink>
            </h1>
          </div>
          <div className="search-wrap" ref={ searchForm }>
            <form>
              <fieldset>
                <label>
                  <input type="type" className='input-search' placeholder='검색어를 입력해주세요'/>
                </label>
              </fieldset>
            </form>
          </div>
          <nav ref={nav}>
            <li onClick={closeSideMenu}>
              <NavLink to={"/"} end onClick={onScroll}>홈</NavLink>
            </li>
            <li onClick={closeSideMenu}>
              <NavLink to={"/PrdList"} onClick={onScroll}>제품 라인업</NavLink>
            </li>
            <li onClick={closeSideMenu}>
              <NavLink to={"/whskInfo"} onClick={onScroll}>위스키 상식</NavLink>
            </li>
            <li onClick={closeSideMenu}>
              <NavLink to={"/JwStory"} onClick={onScroll}>조니워커 이야기</NavLink>
            </li>
            <li onClick={closeSideMenu}>
              <NavLink to={"/Inquiry"} onClick={onScroll}>문의하기</NavLink>
            </li>
          </nav>
        </div>
      </div>
    </>
  )
}
export default HeaderSm;