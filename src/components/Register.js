import React, {useState} from 'react';
import {Button, Modal, Form} from 'react-bootstrap';

function Register() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <>
    <Button variant="dark" onClick={handleShow} className="btn-sm mr-2">
      Register
    </Button>
    <Modal show={show} onHide={handleClose} className="foodways-modal" centered>
      
      <Modal.Body className="px-4">
        <div>
          <h2 className="text-warning">Register</h2>
        </div>
        <div className="mt-4">
          <Form>

            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Full Name" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="text" placeholder="Gender" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="text" placeholder="Phone" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control as="select">
                <option>As User</option>
                <option>As Admin</option>
              </Form.Control>
            </Form.Group>

            <div className="mt-4 text-center">
              <Button variant="dark" type="submit" className="btn-block">
                Register
              </Button>

              <Form.Text className="text-muted mt-2">
                Already have an account? Klik <a href="" className="text-dark font-weight-500">Here</a>
              </Form.Text>
            </div>

          </Form>
        </div>
      </Modal.Body>
    </Modal>
    </>
  );
}

export default Register