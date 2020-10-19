import React from "react";


const Numbers = (props) => {


  return (
    <div>

  {props.nums1.map((num, ids) => (
          <button
            className={`dark-grey ${num === 0 && "big-h"}`}
            key={num}
            onClick={props.onClick1}
            id={ids[num]}
          >
            {num}
          </button>
  ))}  
  
      <button className="dark-grey" onClick={props.onClick1} id="decimal">
          .
        </button>
    
    </div>
  );
};

export default Numbers;