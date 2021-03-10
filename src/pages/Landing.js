import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function Landing() {

	return (
		<div>
			<div className="bg-warning position-absolute landing-page">
				<Container>
					<Row className="landing-position">
						<Col md={8}>
							<div className="landing-text">
								<h1>Are You Hungry?</h1>
								<h1>Express Home Delivery</h1>
								<Row>
									<Col md={3}>
										<div className="line"></div>
									</Col>

									<Col md={4}>
										<span className="description">Lorem Ipsum is simply dummy text of the 
										printing and typesetting industry. Lorem Ipsum has 
										been the industry's standard dummy text ever since the 
										1500s.</span>
									</Col>
								</Row>
							</div>
						</Col>

						<Col md={4}>
							<div className="pizza">
								<img src="/images/Landing/10219 1.png" alt="pizza" />
							</div>
						</Col>
					</Row>
				</Container>
			</div>

			<div className="popular-restourant">
				<Container>
					<h2>Popular Restourant</h2>
				</Container>
			</div>

			<div className="restourant-near-you">
				<Container>
					<h2>Restourant Near You</h2>
				</Container>
			</div>
		</div>
	);
}

export default Landing;