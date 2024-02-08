const Fruit = ({ name, price, emoji, soldout }) => {
  return (
    <div>
      <li>
        {/* {emoji} {name} {price} */}
        {emoji} {name} {price} {soldout ? '  =====>  soldout' : ""}
      </li>
    </div>
  );
};

export default Fruit;
