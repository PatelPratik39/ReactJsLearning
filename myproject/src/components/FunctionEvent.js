const FunctionEvent = () => {
    // function handleClick() {
    //     console.log('Button is clicked!!!');
    // }
    const handleClick=() => {
        console.log("Button is clicked!!!");
    }
  return (
    <div>
      Functional Component : <button onClick={handleClick}> Click Here </button>
    </div>
  );
};

export default FunctionEvent;
