import React, {useState} from 'react';
import {Button, Modal, Form} from 'react-bootstrap';

function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <>
    <Button variant="dark" onClick={handleShow} className="btn-sm">
      Login
    </Button>
    <Modal show={show} onHide={handleClose} className="foodways-modal" centered>
      
      <Modal.Body className="px-4">
        <div>
          <h2 className="text-warning">Login</h2>
        </div>
        <div className="mt-4">
          <Form>

            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <div className="mt-4 text-center">
              <Button variant="dark" type="submit" className="btn-block">
                Login
              </Button>

              <Form.Text className="text-muted mt-2">
                Don't have an account? Klik <a href="" className="text-dark font-weight-500">Here</a>
              </Form.Text>
            </div>

          </Form>
        </div>
      </Modal.Body>
    </Modal>
    </>
  );
}

export default Login