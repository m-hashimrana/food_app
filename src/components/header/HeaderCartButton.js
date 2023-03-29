import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cartContext';
import CartIcon from '../cart/CartIcon';
import classes from './headerCartButton.module.css';

const HeaderCartButton = (props) => {
	const [isButtonBumped, setIsButtonBumped] = useState(false);
	const ctx = useContext(CartContext);
	const { items } = ctx;
	const numOfCartContext = ctx.items.reduce((currentNumber, item) => {
		return currentNumber + item?.amount;
	}, 0);
	const btnClasses = `${classes.button} ${isButtonBumped ? classes.bump : ''}`;
	useEffect(() => {
		if (items.length === 0) {
			return;
		}
		setIsButtonBumped(true);
		let timer = setTimeout(() => {
			setIsButtonBumped(false);
		}, 300);

		clearTimeout(timer);
	}, [items]);
	return (
		<button className={btnClasses} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numOfCartContext}</span>
		</button>
	);
};

export default HeaderCartButton;
