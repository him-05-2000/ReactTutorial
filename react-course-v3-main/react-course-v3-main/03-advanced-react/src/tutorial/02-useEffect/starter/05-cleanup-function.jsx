import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log('render');
  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};
// whenever the button will be used for toggling the RadomComponent will mmount and unmount,this is the case for coditional rendering of a component
// Again so the useEffect will be put to use again and again..
const RandomComponent = () => {
  useEffect(() => {
    console.log("hmm this is interesting");
    const intId=setInterval(()=>{
       console.log('hello from interval')
    },1000);
    return ()=>{
      console.log('cleanup');
      clearInterval(intId);
    }
  }, []);
  return <h1>hello there</h1>;
};

export default CleanupFunction;
