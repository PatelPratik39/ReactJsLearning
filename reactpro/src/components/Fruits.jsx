// render list of Array

import Fruit from "./Fruit";

const Fruits = () => {
  //   const fruits = ["Apple", "Mango", "Orange", "Banana", "Graps", "Pinapple", 'DragonFruit'];
  const fruits = [
    {
      name: "Apple",
      price: 10,
      emoji: " 🍎 "
    },
    {
      name: "Banana",
      price: 7,
      emoji: " 🍌 "
    },
    {
      name: "Mango",
      price: 20,
      emoji: " 🍎 "
    },
    {
      name: "Orange",
      price: 8,
      emoji: " 🍊 "
    },
    {
      name: "Graps",
      price: 11,
      emoji: " 🍇 "
    },
    {
      name: "Pineapple",
      price: 13,
      emoji: " 🍍 "
    },
    {
      name: "Kiwi",
      price: 4,
      emoji: " 🥝 "
    },
    {
      name: "Peach",
      price: 9,
      emoji: " 🍑 "
    }
  ];
  return (
    <div>
    {/* If i want to get Fruit component in Fruits component, we need to import "Fruit" component */}
    <ul>
        {fruits.map((fruit) => (
            <Fruit key={fruit.name} name = {fruit.name} price = {fruit.price} emoji = {fruit.emoji}/>
        ))}
    </ul>


      {/* <ul>
        {fruits.map((fruit) => (
          <li key={fruit.name}>
            {fruit.emoji} {fruit.name} = $ {fruit.price}
            {" "}
          </li>
        ))}
      </ul> */}

      {/* <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>
            {" "}
            {fruit.emoji}
            {fruit.name}
            {fruit.price}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Fruits;
