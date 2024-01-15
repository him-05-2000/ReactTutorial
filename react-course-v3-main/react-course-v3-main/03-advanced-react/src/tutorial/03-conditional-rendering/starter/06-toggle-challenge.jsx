import { useState } from "react";

const ToggleChallenge = () => {
  //falsy
  const [click, setClick] = useState("");
  const toggleVisibility = () => {
    if (!click) {
      console.log("On");
      setClick("I am clicked");
    } else {
      console.log("Off");
      setClick("");
    }
  };

  return (
    <>
      <button className="btn" onClick={toggleVisibility}>
        Magic!!
      </button>
      {click && (
        <div style={{ margin: "3rem 0" }}>
          <h4>You called Me Highness !!!</h4>
        </div>
      )}
    </>
  );
};

export default ToggleChallenge;
