import { useContext } from 'react';

import MeanuForm from './MenuForm';
import classes from './Menu.module.css';
import CartContext from '../../../store/cart-context';

const Menu = (props) => {
  const cartCtx = useContext(CartContext);
    const price = `Rs.${props.price.toFixed(0)}`;

    const addToCartHandler = amount => {
      cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price
      });
    };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MeanuForm onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
};

export default Menu;
