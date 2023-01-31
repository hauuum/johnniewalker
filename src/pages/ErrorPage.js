import { useNavigate } from 'react-router-dom';

const ErrorPage = () => { 
  const navigate = useNavigate();
  const goBackFnc = () => { 
    navigate(-1);
  }

  return (
    <div className="page error-page">
      <h2 className="ir-so">존재하지 않는 페이지입니다.</h2>
      <p style={{
        margin: '2.5rem auto 0'
      }}>존재하지 않는 페이지입니다. (404 ERROR)</p>
      <button className="btn-blue"
        style={{
          margin: '1.25rem auto 5rem'
        }}
        onClick={goBackFnc}>뒤로 가기</button>
    </div>
  )
}
export default ErrorPage;
