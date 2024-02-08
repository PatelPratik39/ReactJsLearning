// render list of Array

import Fruit from "./Fruit";

const Fruits = () => {
  //   const fruits = ["Apple", "Mango", "Orange", "Banana", "Graps", "Pinapple", 'DragonFruit'];
  const fruits = [
    {
      name: "Apple",
      price: 10,
      emoji: " 🍎 ",
      soldout: false
    },
    {
      name: "Banana",
      price: 7,
      emoji: " 🍌 ",
      soldout: false
    },
    {
      name: "Mango",
      price: 20,
      emoji: " 🍎 ",
      soldout: false
    },
    {
      name: "Orange",
      price: 8,
      emoji: " 🍊 ",
      soldout: false
    },
    {
      name: "Graps",
      price: 11,
      emoji: " 🍇 ",
      soldout: false
    },
    {
      name: "Pineapple",
      price: 13,
      emoji: " 🍍 ",
      soldout: true
    },
    {
      name: "Kiwi",
      price: 4,
      emoji: " 🥝 ",
      soldout: true
    },
    {
      name: "Peach",
      price: 9,
      emoji: " 🍑 ",
      soldout: false
    }
  ];
  return (
    <div>
      {/* If i want to get Fruit component in Fruits component, we need to import "Fruit" component */}
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
            soldout = {fruit.soldout}
          />
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
