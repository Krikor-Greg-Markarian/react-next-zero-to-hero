import ComponentA from "../components/ComponentA";
import cn from "classnames";
import React, { useState } from "react";
const exercise1 = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [countIncrement, setCountIncrement] = useState(1);
  const [countDecrement, setCountDecrement] = useState(5);

  if (countDecrement === 0) {
    console.log("We're at the beginning!");
    alert("We're at the beginning!");
  }

  return (
    <div>
      <div className={cn("flex justify-center items-center")}>
        <ComponentA
          buttonName='Click Me'
          onClick={() => {
            alert("Hello World!");
          }}
        />
      </div>

      <div className={cn("flex justify-center items-center pt-2")}>
        <ComponentA
          buttonName='Click Me'
          onClick={() => setIsClicked(true)}
          isSelected={isClicked}
        />
      </div>

      <div className={cn("text-center pt-2")}>
        <div>increments the counter</div>
        <div>you clicked {countIncrement} times</div>

        <ComponentA
          buttonName='Click Me'
          onClick={() => setCountIncrement(countIncrement + 1)}
        />
      </div>
      <div className={cn("text-center pt-2")}>
        <div>decrements the counter</div>
        <div>you clicked {countDecrement} times</div>

        <ComponentA
          buttonName='Click Me'
          onClick={() => setCountDecrement(countDecrement - 1)}
        />
      </div>
    </div>
  );
};

export default exercise1;
