import { useState } from "react";

const ShortCircuitOverview = () => {
  //falsy
  const [text, setText] = useState("");

  //truthy
  const [name, setName] = useState("susan");

  const codeExample = text || "hello world";

  return (
    <div>
      {/* We cannot use if condition in jsx */}
      {/* if(someCondition){"won't work"} */}
      {/* We will be using short circuit evaluation */}
      <h4>Falsy OR :{text || "hello world"}</h4>
      <h4>Falsy AND :{text && "hello world"}</h4>
      <h4>Truthy OR :{name || "hello world"}</h4>
      <h4>Truthy AND :{name && "hello world"}</h4>
      <h5>{codeExample}</h5>
    </div>
  );
};
export default ShortCircuitOverview;
