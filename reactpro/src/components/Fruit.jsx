const Fruit = ({ name, price, emoji }) => {
  return (
    <div>
      <li>
        {emoji} {name} {price}
      </li>
    </div>
  );
};

export default Fruit;
