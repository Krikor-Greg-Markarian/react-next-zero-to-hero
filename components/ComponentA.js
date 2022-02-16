import React from "react";
import cn from "classnames";
const ComponentA = () => {
  return (
    <button
      className={cn(
        "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      )}
    >
      Click Me
    </button>
  );
};

export default ComponentA;
