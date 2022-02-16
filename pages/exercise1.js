import ComponentA from "../components/ComponentA";
import cn from "classnames";
import React, { useState } from "react";
const exercise1 = () => {
  const [isClicked, setIsClicked] = useState(false);
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
    </div>
  );
};

export default exercise1;
