import React, { useRef, useState } from 'react';
import Input from '../../common/Input';
import classes from './mealItemForm.module.css';

const MealItemForm = (props) => {
	const inputRef = useRef();
	const [isValidAmount, setIsValidAmount] = useState(true);

	const submitHandler = (e) => {
		e.preventDefault();
		const enteredAmount = inputRef.current.value;
		const enteredAmountNumber = +enteredAmount;
		if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmount > 3) {
			setIsValidAmount(false);
			return;
		}
		props.onAddToCart(enteredAmountNumber);
	};
	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input
				ref={inputRef}
				label='Amount'
				input={{
					id: 'amount',
					type: 'number',
					min: '1',
					max: '5',
					step: '1',
					defaultValue: '1',
				}}
			/>
			<button>+Add</button>
			{!isValidAmount && <p>Please Enter Valid Amount(1 - 3)</p>}
		</form>
	);
};

export default MealItemForm;
