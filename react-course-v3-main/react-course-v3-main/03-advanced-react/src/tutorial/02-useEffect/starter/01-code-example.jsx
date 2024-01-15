import { useState } from "react";

const CodeExample = () => {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log("hello");

    //be careful you have not set an infinite loop;
    //every time state changes the components gets rerendered and theis function will be caled again
    // setValue(value+1);
  };
  // if i have called a function iside a component
  //it will get executed again and again when the component rerenders.
  sayHello();
  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;
