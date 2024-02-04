// const Hello = (props) => {
const Hello = ({ person }) => {
      // console.log(props);
      // const[name, setName] = props;   // ******** I dont need this declaration of props because I have declared props in function
      return (
        <div>
          <h1>Hello From component!!</h1>
          {/* <h2> {props.message} {props.name}</h2> */}
          {person.message} {person.name} {person.emoji} {person.seatNumbers}
        </div>
      );
    };

export default Hello;
