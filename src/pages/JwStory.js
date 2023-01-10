import { useNavigate } from 'react-router-dom';

const JwStory = () => { 
  const navigate = useNavigate();
  const goBackFnc = () => { 
    navigate(-1);
  }

  return (
    <div className="page error-page jw-page">
      <h2 className="ir-so">조니워커 스토리 페이지입니다.</h2>
      <p style={{
        margin: '2rem auto 0'
      }}>현재 준비중인 페이지입니다.</p>
      <button className="btn-blue"
        style={{
          margin: '1.25rem auto 5rem'
        }}
        onClick={goBackFnc}>뒤로 가기</button>
    </div>
  )
}
export default JwStory;
