import React, { useRef, useState } from "react";
import InquiryList from "./InquiryList";

const InquiryForm = () => { 
  const typeSelect = useRef();
  const authorInput = useRef();
  const numberInput = useRef();
  const emailInput = useRef();
  const emailSiteSelect = useRef();
  const contentTextarea = useRef();
  const checkedInput = useRef();
  
  const [state, setState] = useState({
    type: "normal",
    author: "",
    number: "",
    email: "",
    emailSite: "defalut",
    content: "",
  });

  const [checked, setChecked] = useState(false);
  const [data, setData] = useState([]);

  const dataId = useRef(0)

  const changeCheckedFnc = () => { 
    setChecked(!checked);
  }

  const changeStateFnc = (e) => { 
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }

  const onCreateFnc = (type, author, content) => { 
    const newItem = {
      type,
      author,
      content,
      id: dataId.current
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  }

  const submitFnc = () => { 
    if (state.author.length < 1) { 
      authorInput.current.focus();
      authorInput.current.style.borderColor = '#E00000';
      return;
    } 
    if (state.number.length < 5) { 
      numberInput.current.focus();
      numberInput.current.style.borderColor = '#E00000';
      return;
    } 
    if (state.email.length < 1) { 
      emailInput.current.focus();
      emailInput.current.style.borderColor = '#E00000';
      return;
    } 
    if (state.content.length < 5) {
      contentTextarea.current.focus();
      contentTextarea.current.style.borderColor = '#E00000';
      return;
    }
    if (!checked) {
      alert("개인정보 수집 이용해 동의가 필요합니다.")
      checkedInput.current.focus();
      return;
    }
    
    onCreateFnc(state.type, state.author, state.content);
    alert("저장 성공!");

    authorInput.current.blur();
    numberInput.current.blur();
    emailInput.current.blur();
    contentTextarea.current.blur();
    checkedInput.current.blur();
    authorInput.current.style.borderColor = 'inherit';
    numberInput.current.style.borderColor = 'inherit';
    emailInput.current.style.borderColor = 'inherit';
    contentTextarea.current.style.borderColor = 'inherit';

    setState({
      type: "일반문의",
      author: "",
      number: "",
      email: "",
      emailSite: "naver",
      content: "",
    });
  }

  return (
    <div className="inquiry">
      <h3 className="title">기타문의</h3>
      <div className="subTitle">아직도 궁금하신 점이 있다면, 이 페이지에 있는 양식을 작성해 주시기 바랍니다. <br />
        빠른 시일 내에 답변을 드리겠습니다.</div>
      <div className="form-wrap">
        <form>
          <fieldset>
            <div className="form-list">
              <label htmlFor="inquiryType">*<span className="ir-so">필수입력</span>문의 종류
              <select
                id="inquiryType"
                name="type"
                value={state.type}
                onChange={changeStateFnc}
                ref={typeSelect}>
                  <option value={"일반문의"}>일반 문의</option>
                  <option value={"상품문의"}>상품 문의</option>
                  <option value={"후원문의"}>후원 문의</option>
                </select>
              </label>
            </div>
            <div className="form-list">
              <label htmlFor="inquiryName">*<span className="ir-so">필수입력</span>이름
                <input
                  type="text"
                  id="inquiryName"
                  name="author"
                  value={state.author}
                  className="input"
                  placeholder="이름을 입력해주세요"
                  onChange={changeStateFnc}
                  ref={authorInput}
                />
              </label>
            </div>
            <div className="form-list">
              <label htmlFor="inquiryNumber">*<span className="ir-so">필수입력</span>연락처
                <input
                  type="number"
                  id="inquiryNumber"
                  name="number"
                  value={state.number}
                  className="input"
                  placeholder="연락처를 입력해주세요"
                  onChange={changeStateFnc}
                  ref={numberInput}
                />
              </label>
              <span className="vldtn">필수 입력 사항입니다.</span>
            </div>
            <div className="form-list form-email">
              <label htmlFor="inquiryEmail">*<span className="ir-so">필수입력</span>이메일
                <div>
                  <input
                    type="email"
                    id="inquiryEmail"
                    name="email"
                    value={state.email}
                    className="input"
                    placeholder="이메일을 입력해주세요"
                    onChange={changeStateFnc}
                    ref={emailInput}
                  />
                  <select
                    name="emailSite"
                    value={state.emailSite}
                    onChange={changeStateFnc}
                    ref={emailSiteSelect}>
                      <option value={"naver"}>@naver.com</option>
                      <option value={"nate"}>@nate.com</option>
                      <option value={"gmail"}>@gmail.com</option>
                      <option value={"daum"}>@daum.net</option>
                      <option value={"hanmail"}>@hanmail.net</option>
                  </select>
                </div>
              </label>
            </div>
            <div className="form-list form-text">
              <label htmlFor="inquiryCont">*<span className="ir-so">필수입력</span>문의내용
                <textarea
                  rows="10"
                  id="inquiryCont"
                  name="content"
                  value={state.content}
                  className="input"
                  placeholder="문의 내용을 입력해주세요"
                  onChange={changeStateFnc}
                  ref={contentTextarea}
                />
              </label>
            </div>
            <div className="form-check-list">
              <label htmlFor="formCheck">
                <input
                  type="checkbox"
                  id="formCheck"
                  name="validation"
                  value={checked}
                  onChange={changeCheckedFnc}
                  ref={ checkedInput }
                /> 개인정보 수집 이용에 동의합니다.
              </label>
            </div>
          </fieldset>
        </form>
        <button className="btn-blue" onClick={submitFnc}>문의글 등록하기</button>
      </div>
      <InquiryList inquiryList={ data } />
    </div>
  )
}
export default InquiryForm;