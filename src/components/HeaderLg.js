import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
// Images
import logoImgLarge from '../assets/jw-lg-logo.png';
import searchIconGray from '../assets/search-gray-icon.png';
import closeIconGray from '../assets/close-icon.png';

const HeaderLg = () => {
  const aTag = useRef(null);
  const navEle = useRef(null);
  const searchIcon = useRef(null);
  const searchForm = useRef(null);
  
  const handleActivedNav = (e) => {
    if (aTag === 'activated') {
      console.log('액티브되었습니다.');
    }
    onScroll();
  }
  const onScroll = () => {
    window.scrollTo(0,0);
  }
  const openForm = () => {
    navEle.current.style = 'display: none';
    searchIcon.current.style = 'display: none';
    searchForm.current.style = 'display: flex';
  }

  const closeForm = () => {
    searchForm.current.style = 'display: none';
    navEle.current.style = 'display: flex';
    searchIcon.current.style = 'display: flex';
  }


  return (
    <header className="header-Lg">
        <div className="container">
          <h1 className="logo-lg" onClick={ onScroll }>
            <NavLink to={"/"}><img src={ logoImgLarge } alt="조니워커 로고"/></NavLink>
          </h1>
          <div className="header-lg-right">
            <nav ref={ navEle }>
              <li>
                <NavLink to={"/"} style={({ isActive }) => ({ color: isActive ? '#F6BE00' : '#353535' })} className={({ isActive }) => 'nav-link ' + (isActive ? 'activated' : '')} ref={ aTag } onClick={handleActivedNav} end>홈</NavLink>
              </li>
              <li>
                <NavLink to={"PrdList"} style={({ isActive }) => ({ color: isActive ? '#F6BE00' : '#353535' })} className={({ isActive }) => 'nav-link ' + (isActive ? 'activated' : '')} ref={ aTag } onClick={handleActivedNav}>제품 라인업</NavLink>
              </li>
              <li>
                <NavLink to={"WhskInfo"} style={({ isActive }) => ({ color: isActive ? '#F6BE00' : '#353535' })} className={({isActive}) => 'nav-link ' + (isActive ? 'activated' : '')} ref={ aTag } onClick={handleActivedNav}>위스키 상식</NavLink>
              </li>
              <li>
                <NavLink to={"JwStory"} style={({ isActive }) => ({ color: isActive ? '#F6BE00' : '#353535' })} className={({isActive}) => 'nav-link ' + (isActive ? 'activated' : '')} ref={ aTag } onClick={handleActivedNav}>조니워커 이야기</NavLink>
              </li>
              <li>
                <NavLink to={"Inquiry"} style={({ isActive }) => ({ color: isActive ? '#F6BE00' : '#353535' })} className={({isActive}) => 'nav-link ' + (isActive ? 'activated' : '')} ref={ aTag } onClick={handleActivedNav}>문의하기</NavLink>
              </li>
            </nav>
            <div className='search-icon' ref={ searchIcon } onClick={ openForm }>
              <button className='search-btn'>
                <img src={ searchIconGray } alt="검색하기"/>
              </button>
            </div>
          </div>

          
          <div className='search-form' ref={ searchForm }>
            <form>
              <label htmlFor="searchForm">
                <input type="type" id="searchForm" className="input search-lg-input" placeholder='검색어를 입력해주세요'/>
              </label>
            </form>
            <button className='search-btn' onClick={closeForm}>
              <img src={ closeIconGray } alt="검색창 닫기"/>
            </button> 
          </div>
           
        </div>
    </header>
  )
}
export default HeaderLg;