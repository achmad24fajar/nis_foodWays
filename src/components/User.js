import {useContext} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {UserContext} from '../context/userContext';
import {CartContext} from '../context/cartContext';
import {NavDropdown, Nav, Alert} from 'react-bootstrap';

function UserActive(props) {

  const [userState, dispatch] = useContext(UserContext);
  const [cartState] = useContext(CartContext);

  const logoutHandler = (event) => {
    dispatch({
      type: "LOGOUT"
    })
  }
  
  let qty = [];
  const carts = cartState.carts.map(cart => {
    qty.push(cart.qty);
  })

  let total = (qty.length != 0 ? qty.reduce((a, b) => a + b) : 0 )
 
  return(
    <>
      <NavDropdown
        title={
        <div className="pull-left">
          <img className="user-icon" src="user.png" alt="user pic" />
        </div>
        } id="basic-nav-dropdown" className="float-right custom-dropdown">

        {(props.role == 'admin') ? (
          <NavDropdown.Item href="#action/3.1" className="p-2">
            <img className="user-icon-dropdown" src="user 2.png" /> Profile
          </NavDropdown.Item>
        ) : (
        <Nav.Link as={Link} to="/profile">
          <NavDropdown.Item href="#action/3.1" className="p-2">
            <img className="user-icon-dropdown" src="user 2.png" /> Profile
          </NavDropdown.Item>
        </Nav.Link>
        )}

        { props.role == 'admin' && 
          <NavDropdown.Item href="#action/3.1" className="p-2">
          <img className="user-icon-dropdown" src="product.png" /> Product
          </NavDropdown.Item> }

        <NavDropdown.Divider className="m-0" />

        <NavDropdown.Item className="p-2" onClick={logoutHandler}>
          <img className="user-icon-dropdown" src="logout.png" /> Logout
        </NavDropdown.Item>

      </NavDropdown>
      
      {props.role == 'user' &&
        <Nav.Link as={Link} to="/carts" className="float-right">
          <img className="cart-icon" src="cart.png" alt="cart" />
          <span className="position-absolute bg-danger rounded-circle badge text-white" style={{right: "60px"}}>
            {total}
          </span>
        </Nav.Link>
      }
    </>
  );

}

export default UserActive
