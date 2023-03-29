import mealsImage from '../../assets/meals.jpg';
import classes from './header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = ({ onCartHandler }) => {
	return (
		<>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton onClick={onCartHandler} />
			</header>
			<div className={classes['main-image']}>
				<img src={mealsImage} alt='A table full of delicious food!' />
			</div>
		</>
	);
};

export default Header;
