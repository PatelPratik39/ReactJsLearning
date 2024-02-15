const Profile = (props) => {
  // destructureing object
  const { name, lastName } = props;
  return (
    <h1>
      Name : {name} {lastName}
    </h1>
  );
};

export default Profile;
