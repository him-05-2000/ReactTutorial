import Starter from "./tutorial/11-performance/starter/03-hooks";

//here i am importing the navbar folder which by default will give me entry to the index.jsx file
//as an entry point
import Navbar from "./tutorial/04-project-structure/starter/Navbar";

import { Homepage, About } from "./tutorial/04-project-structure/starter/Pages";
function App() {
  return (
    <div className="container">
      {/* <h2>Advanced React</h2> */}
      <Starter />
      {/* <Navbar />
      <Homepage></Homepage>
      <About /> */}
    </div>
  );
}

export default App;
