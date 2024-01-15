import { data } from "../../../data";
import { useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  // console.log(useState(data));
  console.log(people);

  const removeItem = (id) => {
    // console.log(id);
    const newPeople = people.filter((person) => {
      return person.id != id;
    });
    setPeople(newPeople);
  };

  const clearAllItems = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        const { name, id } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button
              type="button"
              style={{ marginBottom: "1rem" }}
              onClick={() => {
                removeItem(id);
              }}
            >
              remove
            </button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={clearAllItems}>
        Remove All
      </button>
    </div>
  );
};

export default UseStateArray;
