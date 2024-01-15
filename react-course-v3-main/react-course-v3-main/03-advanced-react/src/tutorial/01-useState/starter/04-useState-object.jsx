import { useState } from "react";

const UseStateObject = () => {
  // const [name, setName] = useState("peter");
  // const [age, setAge] = useState(23);
  // const [hobby, setHobby] = useState("read Books");

  //use state object..
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "read books",
  });

  const displayPerson = () => {
    // setName("john");
    // setAge(28);
    // setHobby("scream at the computer");
    setPerson({
      name: "john",
      age: 28,
      hobby: "planting",
    });
  };

  const { name, age, hobby } = person;
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>Enjoys : {hobby}</h3>
      <button className="btn" onClick={displayPerson}>
        show John
      </button>
    </>
  );
};

export default UseStateObject;
