import {Container, Row, Col, Table} from 'react-bootstrap';

function Partner() {

	return(
		<div>
			<div className="bg-warning position-absolute foodways-nav"></div>
			
			<div className="mt-5">
				<Container>
					<div className="user-profile">
						<h3 className="libre">Income Transaction</h3>
						<div className="mt-4">
							<Table bordered hover>
								<thead>
									<tr>
										<th>No</th>
										<th>Name</th>
										<th>Address</th>
										<th>Product Order</th>
										<th>Status</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th>1</th>
										<th>Dina</th>
										<th>Bogor</th>
										<th>KFC Kombo</th>
										<th className="text-warning">Waiting Approve</th>
										<th>
											<button className="btn btn-danger btn-sm mr-2">Cancel</button>
											<button className="btn btn-success btn-sm">Approve</button>
										</th>
									</tr>
									<tr>
										<th>2</th>
										<th>Dika</th>
										<th>Bogor</th>
										<th>KFC Kombo</th>
										<th className="text-success">Success</th>
										<th>
											
										</th>
									</tr>
									<tr>
										<th>3</th>
										<th>Nabila</th>
										<th>Bandung</th>
										<th>KFC Kombo</th>
										<th className="text-primary">On the way</th>
										<th>
											
										</th>
									</tr>
									<tr>
										<th>4</th>
										<th>Asep</th>
										<th>Garut</th>
										<th>KFC Kombo</th>
										<th className="text-danger">Cancel</th>
										<th>
											
										</th>
									</tr>
								</tbody>
							</Table>
						</div>
					</div>
				</Container>
			</div>
		</div>
	)
}

export default Partner