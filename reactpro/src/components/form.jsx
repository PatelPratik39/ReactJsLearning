import { useState } from "react";

const Form = () => {
const [name, setName] = useState("")

//   function handleChange(e) {
//     // console.log("Change Occured!!!");
//     // console.log(e.target.value);
//     // setName(e.target.value);
//   }

  return (
    <>
      <form>
        {/*  //dont use this code */}
        {/* <input type="text" value={name} onChange={function demo(e){
            return handleChange(e)
        }} /> */}
        {/* <input type="text" value={name} onChange={(e) => handleChange(e)} /> */}
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </form>
    </>
  );
};

export default Form;
