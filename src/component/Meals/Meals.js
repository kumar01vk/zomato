import MealsSummary from "./MealsSummary";
import MealsAvailable from "./MealsAvailable";
import React from "react";

const Meals = () => {
    return <React.Fragment>
        <MealsSummary/>
        <MealsAvailable/>
    </React.Fragment>
};

export default Meals;