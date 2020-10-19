import React from "react";

function AButton(props) {

  const handleClick = () => {
    props.clickHandler(props.name);
  };

    {
    const className = [
      "component-button",
      props.gray ? "gray" : "",
      props.white ? "white" : "",
      props.wide ? "wide" : ""
    ];

    return (
        <div className={className.join(" ").trim()}>
            <button onClick={handleClick}>{props.name}</button>
        </div>
    );
  }
}

export default AButton;