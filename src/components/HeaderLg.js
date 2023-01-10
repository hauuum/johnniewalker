import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
// Images
import logoImgLarge from '../assets/jw-lg-logo.png';
import searchIconGray from '../assets/search-gray-icon.png';


const HeaderLg = () => {
  const aTag = useRef(null);
  const handleActivedNav = (e) => {
    if (aTag === 'activated') {
      console.log('액티브되었습니다.');
    }
    onScroll();
  }
  const onScroll = () => {
    window.scrollTo(0,0);
  }

  return (
    <header className='header-Lg'>
      <div className="header-lg-top">
        <div className="container">
          <h1 className="logo-lg">
            <NavLink to={"/"}><img src={ logoImgLarge } alt="조니워커 로고"/></NavLink>
          </h1>
          <form>
            <label>
              <input type="type" className="input search-lg-input" placeholder='제품 또는 스토어를 검색해주세요'/>
            </label>
            <img src={ searchIconGray } alt="검색하기"/>
          </form>
        </div>
      </div>
      <div className="header-nav">
        <div className="container">
          <nav>
            <li>
              <NavLink to={"/"} style={({ isActive }) => ({ color: isActive ? '#F6BE00' : '#fff' })} className={({ isActive }) => 'nav-link ' + (isActive ? 'activated' : '')} ref={ aTag } onClick={handleActivedNav} end>홈</NavLink>
            </li>
            <li>
              <NavLink to={"PrdList"} style={({ isActive }) => ({ color: isActive ? '#F6BE00' : '#fff' })} className={({ isActive }) => 'nav-link ' + (isActive ? 'activated' : '')} ref={ aTag } onClick={handleActivedNav}>제품 라인업</NavLink>
            </li>
            <li>
              <NavLink to={"WhskInfo"} style={({ isActive }) => ({ color: isActive ? '#F6BE00' : '#fff' })} className={({isActive}) => 'nav-link ' + (isActive ? 'activated' : '')} ref={ aTag } onClick={handleActivedNav}>위스키 상식</NavLink>
            </li>
            <li>
              <NavLink to={"JwStory"} style={({ isActive }) => ({ color: isActive ? '#F6BE00' : '#fff' })} className={({isActive}) => 'nav-link ' + (isActive ? 'activated' : '')} ref={ aTag } onClick={handleActivedNav}>조니워커 이야기</NavLink>
            </li>
            <li>
              <NavLink to={"Inquiry"} style={({ isActive }) => ({ color: isActive ? '#F6BE00' : '#fff' })} className={({isActive}) => 'nav-link ' + (isActive ? 'activated' : '')} ref={ aTag } onClick={handleActivedNav}>문의하기</NavLink>
            </li>
          </nav>
        </div>
      </div>
    </header>
  )
}
export default HeaderLg;