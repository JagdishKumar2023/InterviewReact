import React, { useEffect, useState } from "react";

export const UseEffectbasic = () => {
  const [count, setCount] = useState(0);

  // First time component is render in this webste

  useEffect(() => {
    console.log("Mount Componet");

    // Empty Depanace Array means > Whole componets
    // If depanacey has some values
    return function () {
      console.log("Unmount Componets");
    };
  }, []);

  // Any update in dependance array this compnents is run

  useEffect(() => {
    console.log("User updated Componet", count);

    return () => {
      console.log("Couter UseEffect return", count);
    };
  }, [count]);

  //   const Increment = () => {
  //     setCount(count + 1);
  //   };

  //   const Decrement = () => {
  //     if (count > 0) {
  //       setCount(count - 1);
  //     }
  //   };

  return (
    <div>
      <h2>count value : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default UseEffectbasic;
