import {React,useState} from 'react'
const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 280) : text}
        <span onClick={toggleReadMore} className="read-or-hide ">
          {isReadMore ? <button className="btn btn-success btn-sm" style={{ marginLeft: "20px", marginTop: "7px" }}>Read More</button> : <button className="btn btn-success btn-sm" style={{ marginLeft: "20px", marginTop: "10px" }}>Show Less</button>}
        </span>
      </p>
    );
  };

  export default ReadMore;