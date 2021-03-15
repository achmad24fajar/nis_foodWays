import React, {useContext} from 'react'
import {CartContext} from '../context/cartContext';
import {Container, Row, Col} from 'react-bootstrap';

import Order from '../components/Order';
import Map from '../components/Map';

function Cart() {

	const [state, dispatch] = useContext(CartContext);
	const carts = state.carts;

	const add = (id) => {
	    dispatch({
			type: "ADD_CART",
			payload: {
			    id,
			},
			addOrRemove: true
	    });
	};

	const reduce = (id) => {
	    dispatch({
			type: "ADD_CART",
			payload: {
			    id,
			},
			addOrRemove: false
	    });
	};

	const removeProductToCart = (id) => {
	    dispatch({
			type: "REMOVE_CART",
			payload: {
			    id,
			},
	    });
	};

	let qty = [];
	let price = [];
	const pushCarts = carts.map(cart => {
		qty.push(cart.qty);
		price.push(cart.price * cart.qty)
	})

	console.log(state.ongkir);

	let subTotal = (price.length != 0 ? price.reduce((a, b) => a + b) : 0 )
	let totalItem = (qty.length != 0 ? qty.reduce((a, b) => a + b) : 0 )
	let total = subTotal + state.ongkir

	return(
		<div>
			<div className="bg-warning position-absolute foodways-nav"></div>
			{(carts.length == 0) ? (
			    <div className="text-center my-5">
			       <Container>
				        <h2 className="text-muted libre">You haven't ordered yet</h2>
			       </Container>
			    </div>
			) : (
				<div className="mt-5">
					<Container>
						<div className="cart">
							<h2 className="libre">{state.currentRestaurant}</h2>
							<div className="location mt-5"> 
								<label>Delivery Location</label>
								<div className="form-group d-flex">
									<input name="location" type="text" className="form-control" style={{
										width: "86%",
										marginRight: "5px",
									}} />
									<Map/>
								</div>
								<div className="cartItem mt-3">
									<Row>
										<Col md={8}>
											<div className="border-bottom border-dark py-2">
												Review Your Order
											</div>
											{carts.map(cart => (
											<div className="border-bottom border-dark pt-2 pb-3">
											<Row className="mt-3" key={cart.id}>
												<Col md={2}>
													<img src={cart.image} alt={cart.name} 
													style={{
														width: "100%"
													}} />
												</Col>
												<Col md={5}>
													<div className="mt-2">
														<h5>{cart.name}</h5>
													</div>
													<div className="d-flex counter mt-3">
														<span onClick={id => reduce(cart.id)}>-</span>
														<span style={{background: "rgba(246, 230, 218, 1)"}}>{cart.qty}</span>
														<button onClick={id => add(cart.id)}>+</button>
													</div>
												</Col>
												<Col md={5} className="text-right">
													<div className="mt-2">
														<h6 className="text-danger">Rp. {cart.price}</h6>
													</div>
													<div className="mt-3">
														<button onClick={id => removeProductToCart(cart.id)}>Hapus</button>
													</div>
												</Col>
											</Row>
											</div>
											))}
										</Col>
										<Col md={4}>
											<div className="border-bottom border-top border-dark calculate">
											<Row>
												<Col md={6}>
													<div className="mt-1">
														<span>Subtotal</span>
													</div>
													<div className="mt-2">
														<span>Qty</span>
													</div>
													<div className="mt-2">
														<span>Ongkir</span>
													</div>
												</Col>
												<Col md={6} className="text-right">
													<div className="mt-1">
														<span className="text-danger">Rp. {subTotal}</span>
													</div>
													<div className="mt-2">
														<span>{totalItem}</span>
													</div>
													<div className="mt-2">
														<span className="text-danger">Rp. {state.ongkir}</span>
													</div>
												</Col>
											</Row>
											</div>
											<Row className="mt-3">
												<Col md={6}>
													<div>
														<span>Total</span>
													</div>
												</Col>
												<Col md={6} className="text-right">
													<div>
														<h5 className="text-danger">Rp. {total}</h5>
													</div>
												</Col>
											</Row>
										</Col>
									</Row>						
								</div>
							</div>
						</div>
						<div className="text-right mt-5">
							<Order carts={carts} total={total} subtotal={subTotal} ongkir={state.ongkir}/>
						</div>
					</Container>
				</div>
			)}
		</div>
	)
}

export default Cart