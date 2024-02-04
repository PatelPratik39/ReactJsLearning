const Hello = ({name, message , emoji}) => {
    // console.log(props);
    // const[name, setName] = props;   we dont need this declaration of props because I have declared props in function
    return (
      <div>
        <h1>Hello From component!!</h1>
        {/* <h2> {props.message} {props.name}</h2> */}
        {message} {name} {emoji}
      </div>
    );
}
 
export default Hello;