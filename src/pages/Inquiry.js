import InquiryForm from "../components/InquiryForm";

const Inquiry = () => { 
  return (
    <div className="page inquiry-page">
      <h2 className="ir-so">문의하기 페이지입니다.</h2>
      <div className="container">
        <div className="faq">
          <h3 className="title">자주 묻는 질문</h3>
          <ul className="faq-wrap">
            <li>
              <h4>저 혹은 제 지인은 조니워커의 열성 팬 입니다. 제품이나 홍보 상품을 무료로 받을 수 있습니까?</h4>
              <p>조니워커 위스키의 열성적인 팬이라는 것을 알게 되어 굉장히 영광입니다. 안타깝지만 나라마다 다르게 적용되는 법으로 인해 저희
는 선물, 제품 또는 홍보 상품을 별도로 제공해드릴 수 없습니다. 양해 부탁 드립니다.</p>
            </li>
            <li>
              <h4>제가 특별하고 오래된 조니워커 병을 가지고 있어요. 얼마나 가치가 있을까요?</h4>
              <p>소지하고 계신 위스키의 가치는 많은 요인에 따라 달라지기 때문에 가격을 판단하기 매우 어려운 일입니다. 브랜드로서 저희는 가격
평가를 따로 제공하지 않지만, 본햄스(Bonhams) 또는 맥티어스(McTears)와 같은 독립된 출처를 통해 정보를 찾아보실 수 있습니
다.</p>
            </li>
            <li>
              <h4>저는 조니워커가 우리 회사, 조직, 이벤트 또는 자선 이벤트를 후원해 주기를 바랍니다, 어디로 연락해야 할까요?</h4>
              <p>조니워커를 잠재적 후원자로 고려해 주셔서 감사합니다. 저희는 매년 유사한 제안을 많이 받고 있습니다만 사용할 수 있는 자원이 제한되어 있어 조니워커 브랜드 목적에 가장 알맞은 계획을 바탕으로 후원 여부를 결정할 수 밖에 없습니다. 귀하의 요청이 브랜드 목표에 어울리는 것인지에 대한 여부를 판단할 수 있도록 아래에 있는 후원 요청 계약서를 작성하여 주시기 바랍니다. 귀하의 요청이 법적으로 음주가 허용되는 연령대의 사람들만을 위한 것임을 분명히 하여 주시기 바라며, 조니워커 마케팅팀이 브랜드의 목표를 전달할 수 있는 것으로 판단되는 경우 귀하에게 별도의 연락을 드리겠습니다.</p>
            </li>
            <li>
              <h4>저에게는 오래된 조니워커가 한 병 있습니다. 마셔도 되나요 ?</h4>
              <p>위스키는 일단 캐스크에서 떠나는 순간 숙성이 중단됩니다. 따라서 귀하의 위스키는 그 이후로 연산이 높아지진 않습니다. 직사광선을 피해 올바른 방법으로 보관된 경우, 개봉하시면 조니워커 위스키의 강한 풍미를 경험하실 수 있을 것입니다. 조니워커는 귀하의 책임 있는 음주를 권장합니다. 천천히 음미하시고, 대리 운전을 잊지 마시기 바랍니다.</p>
            </li>
          </ul>
        </div>
        <InquiryForm />        
      </div>
    </div>
  )
}

export default Inquiry;
