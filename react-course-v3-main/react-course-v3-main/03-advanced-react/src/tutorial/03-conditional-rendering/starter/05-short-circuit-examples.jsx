import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "Bull" });

  //AND operator helps us to select which part or component to show
  return (
    <div>
      <h2>{text || "default value"}</h2>
      {/* the code below will show the div component 
  when !text=true,which is true in this case */}
      {/* {!text && (
        <div>
          <h2>whatever return</h2>
          <h2>{name}</h2>
        </div>
      )} */}

      {user && <SomeComponent name={user.name} />}
      <h2 style={{ margin: "1rem 0" }}>Ternary Operator</h2>
      <button className="btn">{isEditing ? "edit" : "add"}</button>
      {
        user ? <div>
          <h4>hello there user {user.name}</h4>
        </div> :
        <div>
          <h4>Plz add login</h4>
        </div>
      }
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2>whatever return</h2>
      <h2>{name}</h2>
    </div>
  );
};

export default ShortCircuitExamples;
