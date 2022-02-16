import React from "react";
import ComponentA from "../components/ComponentA";
import cn from "classnames";
const exercise1 = () => {
  return (
    <div className={cn("flex justify-center items-center")}>
      <ComponentA />
    </div>
  );
};

export default exercise1;
