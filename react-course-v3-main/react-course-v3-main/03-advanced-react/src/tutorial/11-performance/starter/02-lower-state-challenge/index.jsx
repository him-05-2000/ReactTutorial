import { data } from "../../../../data";
import List from "./List";
import Form from "./Form";
import { useState } from "react";

const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data);

  const addPerson = (name) => {
    const fakeId = Date.now();
    const newPerson = { id: fakeId, name };
    setPeople([...people, newPerson]);
  };

  return (
    <section>
      <Form addPerson={addPerson}></Form>
      <List people={people} />
    </section>
  );
};
export default LowerStateChallenge;
