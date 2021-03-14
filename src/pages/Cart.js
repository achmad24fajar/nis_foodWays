import React, {useContext} from 'react'
import {CartContext} from '../context/cartContext';
import {Container} from 'react-bootstrap'

function Cart() {

	const [state] = useContext(CartContext);

	return(
		<div>
			{(state.carts.length == 0) ? (
			    <div className="text-center my-5">
			       <Container>
				        <h2 className="text-muted">You haven't ordered yet</h2>
			       </Container>
			    </div>
			) : (
				<h1>Ini adalah Cart</h1>
			)}
		</div>
	)
}

export default Cart