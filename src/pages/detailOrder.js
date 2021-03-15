import React, {useContext} from 'react'
import {CartContext} from '../context/cartContext';
import {Container, Row, Col} from 'react-bootstrap';

import Order from '../components/Order'

function DetailOrder() {

	const [state, dispatch] = useContext(CartContext);
	const carts = state.carts;

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
								<button className="btn btn-dark">Select on map</button>
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
													<span style={{background: "rgba(246, 230, 218, 1)"}}>{cart.qty}</span>
												</div>
											</Col>
											<Col md={5} className="text-right">
												<div className="mt-2">
													<h6 className="text-danger">Rp. {cart.price}</h6>
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
						<button className="btn btn-dark" style={{width: "250px"}}>See On Map</button>
					</div>
				</Container>
			</div>
		</div>
	)
}

export default DetailOrder