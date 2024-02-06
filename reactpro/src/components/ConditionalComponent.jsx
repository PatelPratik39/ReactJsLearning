import Code from "./Code";
import Welcome from "./Welcome";

const ConditionalComponent = () => {
//   const display = false;
// const display = true;
//   if (display) {
//     return (
//       <div>
//         <h3> This is Comditional Component</h3>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <h3> Lets code everyday!</h3>
//       </div>
//     );
//   }

// if(display){
//     return <Welcome />
// } else{
//     return <Code/>
// }

let messageOne = <h1> This is Message 1..</h1>
let messageTwo = <h1> This is Message 2..</h1>
// let message;
const display = true;

if(display){
    return messageOne
} else {
    return messageTwo
}
// return message;
  
};

export default ConditionalComponent;
