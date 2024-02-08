import '../css/style.css';


// const h2Style = { color: "blue", fontSize: "40px" };

const InlineComponent = () => {
  return (
    <div>
      {/* Inline styling using dounle curly brackets {{}} */}
      {/* <h2 style={{ color: "blue", fontSize: "40px" }}> Inline Component</h2> */}
      <h2 className='header'> Inline Component</h2>
    </div>
  );
};

export default InlineComponent;
