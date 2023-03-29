import React, { useContext } from 'react';
import Modal from '../common/Modal';
import './cart.css';
import CartContext from '../../store/cartContext';
import CartItem from './CartItem';

const Cart = ({ isShowModal, setIsShowModal }) => {
	const ctx = useContext(CartContext);
	const hasNoItems = ctx.items.length === 0;

	const cartItemAdd = (item) => {
		ctx.addItem(item);
	};
	const cartItemRemove = (id) => {
		ctx.renoveItem(id);
	};
	return (
		<div className='cart'>
			<Modal setIsShowModal={setIsShowModal}>
				{hasNoItems && <h3>please enter items to cart</h3>}
				{/* {ctx?.items?.map((item) => (
					<>
						<h4>{item.name}</h4>
						<p>
							<span>Total Amount</span>
							<span>${item.price}</span>
						</p>
					</>
				))} */}
				{ctx?.items.map((item) => (
					<CartItem
						name={item.name}
						price={item.price}
						amount={item.amount}
						key={item.id}
						onAdd={cartItemAdd.bind(null, item)}
						onRemove={cartItemRemove.bind(null, item.id)}
					/>
				))}
				{ctx.items.length > 0 && (
					<div className='actions'>
						<button onClick={() => setIsShowModal(!isShowModal)}>close</button>
						<button>order</button>
					</div>
				)}
			</Modal>
		</div>
	);
};

export default Cart;
