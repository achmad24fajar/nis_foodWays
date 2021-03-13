import {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {UserContext} from '../context/userContext';
import {NavDropdown, Nav, Alert} from 'react-bootstrap';

function UserActive(props) {

  const [state, dispatch] = useContext(UserContext);

  const logoutHandler = (event) => {
    dispatch({
      type: "LOGOUT"
    })
  }

  return(
    <>
      <NavDropdown
        title={
                <div className="pull-left">
                    <img className="user-icon" src="images/user.png" alt="user pic" />
                </div>
              } id="basic-nav-dropdown" className="float-right custom-dropdown">

        <NavDropdown.Item href="#action/3.1" className="p-2">
          <img className="user-icon-dropdown" src="images/user 2.png" /> Profile
        </NavDropdown.Item>

        { props.role == 'admin' && 
          <NavDropdown.Item href="#action/3.1" className="p-2">
          <img className="user-icon-dropdown" src="images/product.png" /> Product
          </NavDropdown.Item> }

        <NavDropdown.Divider className="m-0" />

        <NavDropdown.Item className="p-2" onClick={logoutHandler}>
          <img className="user-icon-dropdown" src="images/logout.png" /> Logout
        </NavDropdown.Item>

      </NavDropdown>
      
      {props.role == 'user' &&
        <Nav.Link href="#link" className="float-right">
          <img className="cart-icon" src="images/cart.png" alt="cart" />
          <span className="position-absolute bg-danger rounded-circle badge text-white" style={{right: "60px"}}>0</span>
        </Nav.Link>
      }
    </>
  );

}

export default UserActive
