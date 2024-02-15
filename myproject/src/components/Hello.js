const name = 'Pratik';

const displayMessage = () => {
    return 'I need Help'
}
function Hello(){
    return (
      <div>
        <h1>Hello {name} 👋🏻 : {displayMessage()}</h1>

      </div>
    );
}

export default Hello;