import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

const Backdrop = ({ setIsShowModal }) => {
	return <div className='backdrop' onClick={() => setIsShowModal(false)}></div>;
};
const ModalOverlay = ({ children }) => {
	return (
		<div className='modal'>
			<div>{children}</div>
		</div>
	);
};

const portalElement = document.getElementById('overlays');

const Modal = ({ children, setIsShowModal }) => {
	return (
		<>
			{ReactDOM.createPortal(<Backdrop setIsShowModal={setIsShowModal} />, portalElement)}
			{ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
		</>
	);
};

export default Modal;
