import { useState } from 'react';
import './App.css';
import Cart from './components/cart/Cart';
import Modal from './components/common/Modal';
import Header from './components/header/Header';
import Meals from './components/meals/Meals';
import CartContext from './store/cartContext';
import CartProvider from './store/CartProvider';

function App() {
	const [isShowModal, setIsShowModal] = useState(false);
	const handleCart = () => {
		setIsShowModal(true);
	};

	return (
		<CartProvider>
			{isShowModal && <Cart isShowModal={isShowModal} setIsShowModal={setIsShowModal} />}
			<Header onCartHandler={handleCart} />
			<Meals />
		</CartProvider>
	);
}

export default App;
