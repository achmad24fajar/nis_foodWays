import React, {useContext} from 'react'
import {CartContext} from '../context/cartContext';
import {Container, Row, Col} from 'react-bootstrap';

import Order from '../components/Order'

function Profile() {

	return(
		<div>
			<div className="bg-warning position-absolute foodways-nav"></div>
			
			<div className="mt-5">
				<Container>
					<div className="user-profile">
						<h2 className="libre">Profile</h2>
					</div>
				</Container>
			</div>
		</div>
	)
}

export default Profile