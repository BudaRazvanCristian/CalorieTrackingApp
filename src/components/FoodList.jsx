const FoodList = () => {
  const basicFoodsRomanian = [
    {
      id: 1,
      name: "Eggs",
      calories: 155,
      protein: 13,
      carbohydrates: 1.1,
      fat: 11,
      image: "https://example.com/images/eggs.jpg",
    },
    {
      id: 2,
      name: "Whole Milk",
      calories: 61,
      protein: 3.3,
      carbohydrates: 5,
      fat: 3.3,
      image: "https://example.com/images/milk.jpg",
    },
    {
      id: 3,
      name: "Chicken (breast)",
      calories: 239,
      protein: 27,
      carbohydrates: 0,
      fat: 14,
      image: "https://example.com/images/chicken.jpg",
    },
    {
      id: 4,
      name: "Beef",
      calories: 250,
      protein: 26,
      carbohydrates: 0,
      fat: 17,
      image: "https://example.com/images/beef.jpg",
    },
    {
      id: 5,
      name: "Fish (salmon)",
      calories: 206,
      protein: 22,
      carbohydrates: 0,
      fat: 13,
      image: "https://example.com/images/salmon.jpg",
    },
    {
      id: 6,
      name: "White Bread",
      calories: 265,
      protein: 9,
      carbohydrates: 49,
      fat: 3.2,
      image: "https://example.com/images/white_bread.jpg",
    },
    {
      id: 7,
      name: "Whole Wheat Bread",
      calories: 247,
      protein: 13,
      carbohydrates: 41,
      fat: 4.2,
      image: "https://example.com/images/whole_wheat_bread.jpg",
    },
    {
      id: 8,
      name: "Oats",
      calories: 389,
      protein: 16.9,
      carbohydrates: 66.3,
      fat: 6.9,
      image: "https://example.com/images/oats.jpg",
    },
    {
      id: 9,
      name: "Potatoes",
      calories: 77,
      protein: 2,
      carbohydrates: 17,
      fat: 0.1,
      image: "https://example.com/images/potatoes.jpg",
    },
    {
      id: 10,
      name: "Carrots",
      calories: 41,
      protein: 0.9,
      carbohydrates: 10,
      fat: 0.2,
      image: "https://example.com/images/carrots.jpg",
    },
    {
      id: 11,
      name: "Onions",
      calories: 40,
      protein: 1.1,
      carbohydrates: 9.3,
      fat: 0.1,
      image: "https://example.com/images/onions.jpg",
    },
    {
      id: 12,
      name: "Tomatoes",
      calories: 18,
      protein: 0.9,
      carbohydrates: 3.9,
      fat: 0.2,
      image: "https://example.com/images/tomatoes.jpg",
    },
    {
      id: 13,
      name: "Apples",
      calories: 52,
      protein: 0.3,
      carbohydrates: 14,
      fat: 0.2,
      image: "https://example.com/images/apples.jpg",
    },
    {
      id: 14,
      name: "Bananas",
      calories: 89,
      protein: 1.1,
      carbohydrates: 23,
      fat: 0.3,
      image: "https://example.com/images/bananas.jpg",
    },
    {
      id: 15,
      name: "Cucumbers",
      calories: 16,
      protein: 0.7,
      carbohydrates: 3.6,
      fat: 0.1,
      image: "https://example.com/images/cucumbers.jpg",
    },
    {
      id: 16,
      name: "Olive Oil",
      calories: 884,
      protein: 0,
      carbohydrates: 0,
      fat: 100,
      image: "https://example.com/images/olive_oil.jpg",
    },
    {
      id: 17,
      name: "Nuts (almonds)",
      calories: 579,
      protein: 21,
      carbohydrates: 22,
      fat: 50,
      image: "https://example.com/images/almonds.jpg",
    },
    {
      id: 18,
      name: "Natural Yogurt",
      calories: 59,
      protein: 10,
      carbohydrates: 3.6,
      fat: 0.4,
      image: "https://example.com/images/yogurt.jpg",
    },
    {
      id: 19,
      name: "Beans",
      calories: 127,
      protein: 9,
      carbohydrates: 23,
      fat: 0.5,
      image: "https://example.com/images/beans.jpg",
    },
    {
      id: 20,
      name: "Peas",
      calories: 81,
      protein: 5.4,
      carbohydrates: 14.5,
      fat: 0.4,
      image: "https://example.com/images/peas.jpg",
    },
    {
      id: 21,
      name: "Coffee",
      calories: 2,
      protein: 0.3,
      carbohydrates: 0,
      fat: 0.1,
      image: "https://example.com/images/coffee.jpg",
    },
    {
      id: 22,
      name: "Protein Powder",
      calories: 375,
      protein: 80,
      carbohydrates: 8,
      fat: 6,
      image: "https://example.com/images/protein_powder.jpg",
    },
    {
      id: 23,
      name: "Sausage",
      calories: 301,
      protein: 12,
      carbohydrates: 0,
      fat: 27,
      image: "https://example.com/images/sausage.jpg",
    },
    {
      id: 24,
      name: "Chicken Salad",
      calories: 150,
      protein: 20,
      carbohydrates: 5,
      fat: 7,
      image: "https://example.com/images/chicken_salad.jpg",
    },
  ];

  return (
    <div>
      <h1>List of Basic Foods in the Romanian Diet</h1>
      <ul>
        {basicFoodsRomanian.map((food) => (
          <li key={food.id}>
            <img
              src={food.image}
              alt={food.name}
              style={{ width: "100px", height: "100px" }}
            />
            <div>
              <strong>{food.name}</strong>: {food.calories} calories,{" "}
              {food.protein}g protein, {food.carbohydrates}g carbohydrates,{" "}
              {food.fat}g fat
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
