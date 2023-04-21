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
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
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
