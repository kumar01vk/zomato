import Card from "../UI/Card";
import Menu from "./Menu/Menu";
import classes from "./MealsAvailable.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Paneer Butter Masala",
    description: "Finest paneer and veggies",
    price: 280,
  },
  {
    id: "m2",
    name: "Chicken Biryani",
    description:
      "A delightful preparation of richly flavored aromatic rice layered with marinated chicken pieces in a delicate blend of whole spices.",
    price: 480,
  },
  {
    id: "m3",
    name: "Chicken with Light Soy and Scallion",
    description: "Chicken stir fried with ginger, fresh scallion and three coloured peppers served with pan fried dumplings, double fried beans and choice of staples.",
    price: 750,
  },
  {
    id: "m4",
    name: "Crumb Fried Fish Fillet",
    description: "Served with house salad, spiced potato wedges, carrot raisin slaw, caper garlic dipping.",
    price: 600,
  },
  {
    id: "m5",
    name: "Margherita Pizza",
    description: "Classic delight with 100% real mozzarella cheese. Available in Cheese Burst, Wheat Thin Crust and Pan Crust options.",
    price: 109,
  },
  {
    id: "m6",
    name: "Pepper Barbecue Chicken Pizza",
    description: "Pepper barbecue chicken for that extra zing. Available in Cheese Burst, Wheat Thin Crust and Pan Crust options.",
    price: 259,
  },
  {
    id: "m8",
    name: "Baked Falafal wraps",
    description: "Kcal Parsley and Foxtail millet tabouleh, pickled cucumber, onions and spicy chutney, centered in whole wheat pita pocket",
    price: 550,
  },
  {
    id: "m9",
    name: "Chicken Sheesh Taouk Pita Wrap",
    description: "Lebanese kebab wrapped in pita, served with chickpea hummus, garlic labneh, cilantro tabbouleh, pickled vegetables and zatar spiced lavash.",
    price: 575,
  },
  {
    id: "m10",
    name: "Classic Chicken Shawarma",
    description: "Grilled chicken in garlic mayo, red chutney, hummus, lettuce, pickle and French fries.",
    price: 160,
  },
];

const MealsAvailable = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <Menu
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default MealsAvailable;
