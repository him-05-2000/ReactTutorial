import { useState } from "react";
const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      console.log("clicked th button");
      //here if we click the button more than one time before 3sec
      //it will still refer to the initial value=0,because the value is not supposed to be changed before 3 sec
      // setValue(value + 1);

      //If you want to work on the latest updated value use this..
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };

  return (
    <div>
      <h1>{value}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Click Me!
      </button>
    </div>
  );
};

export default UseStateGotcha;
