import Code from "./Code";
import Welcome from "./Welcome";

const ConditionalComponent = () => {
//   const display = false;
const display = true;
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

if(display){
    return <Welcome />
} else{
    return <Code/>
}
  
};

export default ConditionalComponent;
