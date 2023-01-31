import React, { useState, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

// Component
import ScrollTop from './components/ScrollTop';
import HeaderLg from './components/HeaderLg';
import HeaderSm from './components/HeaderSm';
import Main from './pages/Main';
import PrdList from './pages/PrdList';
import PrdDetail from './pages/PrdDetail';
import WhskInfo from './pages/WhskInfo';
import JwStory from './pages/JwStory';
import Inquiry from './pages/Inquiry';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/Footer';

// Style
import './App.css';
import './styles/reset.css';
import './styles/common.css';
import './styles/header.css';
import './styles/footer.css';
import './styles/main.css';
import './styles/prd.css';
import './styles/whsk.css';
import './styles/inquiry.css';
import './styles/responsive.css';

function App() {
  const isLg = useMediaQuery({
    query: "(min-width: 48rem)"
  });
  const appScroll = useRef();
  const [subMenu, setSubMenu] = useState(false);
  const changeSubMenu = () => { 
    setSubMenu(!subMenu);
  }

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollTop />
      <div className="App" ref={appScroll}>
        {isLg ? <HeaderLg /> : <HeaderSm subMenu={ subMenu } changeSubMenu={ changeSubMenu } />}
        <div>
          <Routes>
            <Route exact path='/' element={<Main />} />
          </Routes>
          <Routes>
            <Route path='/PrdList' element={<PrdList />} />
          </Routes>
          <Routes>
            <Route path='/PrdList/PrdDetail' element={<PrdDetail />} />
          </Routes>
          <Routes>
            <Route path='/WhskInfo' element={<WhskInfo />} />
          </Routes>
          <Routes>
            <Route path='/JwStory' element={<JwStory />} />
          </Routes>
          <Routes>
            <Route path='/Inquiry' element={<Inquiry />} />
          </Routes>
          <Routes>
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
