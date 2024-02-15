const Profile = (props) => {
  console.log(props);
  props.name = 'Mowglee';
  return (
    <h1>
      Name : {props.name} {props.lastName}
    </h1>
  );
};

export default Profile;
