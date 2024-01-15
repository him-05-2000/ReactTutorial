import { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState());
  // this return an array having 2 values..
  //first argument is the initial state(initial data that you want to use) and second is function which will help in changing the values
  // const value = useState("hello")[0];
  // const func = useState("hello")[1];
  // console.log(value);
  // console.log(func);

  //array desructuring...
  //useState(0) means that i have set the count variable to 0.
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h4>You clicked {count} times</h4>
      <button type="button" className="btn" onClick={handleClick}>
        clicke me
      </button>
    </div>
  );
};

export default UseStateBasics;
