import cn from "classnames";
import React, { useState } from "react";
const ComponentA = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <button
      onClick={() => {
        props.onClick();
        setIsClicked(!isClicked);
      }}
      className={cn(props.className)}
      className={cn("border-2 p-1 ml-12 mt-4", {
        "bg-red-300": isClicked,
      })}
    >
      {props.buttonName ?? "dont forget to put name of the button "}
    </button>
  );
};

export default ComponentA;
