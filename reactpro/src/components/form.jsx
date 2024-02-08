import { useState } from "react";

const Form = () => {
  // here, i am creating object in USEState without creating multiple useStates
  const [name, setName] = useState({ firstName: " ", lastName: " " });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }

  return (
    <>
      <form>
        {/*  //dont use this code */}
        {/* <input type="text" value={name} onChange={function demo(e){
            return handleChange(e)
        }} /> */}
        {/* <input type="text" value={name} onChange={(e) => handleChange(e)} /> */}
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />{" "}
        <br />
        <br />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <br />
        <br />
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
      <br />
      <br />
      {name.firstName} - {name.lastName}
    </>
  );
};

export default Form;
