const InquiryList = ({ inquiryList, onDelete }) => { 
  return (
    <div className="inquiry-list">
    {
      inquiryList.map((ele) => ( 
        <div key={ele.id} className="inquiry-items">
          <div className="inquiry-info">
            <div>{ ele.type } </div>
            <div>{ ele.author }</div>
          </div>
          <p className="inquiry-cont">{ ele.content }</p>
          <div className="delete-list">
            <button className="delete-btn" onClick={() => {
              if(window.confirm(`해당 문의글을 삭제하시겠습니까?`)){
                onDelete(ele.id);
              }
            }}>삭제하기</button>
          </div>
        </div>
      ))
    }
    </div>
  )
}
InquiryList.defaultProps = {
  inquiryList: []
};
export default InquiryList;