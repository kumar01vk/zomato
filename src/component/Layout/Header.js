import React from 'react';

import headerimage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import CartButton from './CartButton';

const Header = props => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>Zomato</h1>
            <CartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img  src={headerimage} alt='Never have a bad meal' />
        </div>
    </React.Fragment> 
};


export default Header;