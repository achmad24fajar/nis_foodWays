import {useContext} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {UserContext} from '../context/userContext';
import {CartContext} from '../context/cartContext';
import {NavDropdown, Nav, Alert} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

function UserActive(props) {

  const [userState, dispatch] = useContext(UserContext);
  const [cartState] = useContext(CartContext);

  const logoutHandler = (event) => {
    dispatch({
      type: "LOGOUT"
    })
  }
  
  let qty = [];
  if(cartState.carts !== null){
    const carts = cartState.carts.map(cart => {
      qty.push(cart.qty);
    })
  }

  let total = (qty.length != 0 ? qty.reduce((a, b) => a + b) : 0 )
 
  return(
    <>
      <NavDropdown
        title={
        <div className="pull-left">
          <img className="user-icon" src={process.env.PUBLIC_URL + '/user.png'} alt="user pic" />
        </div>
        } id="basic-nav-dropdown" className="float-right custom-dropdown">

        {(props.role == 'partner') ? (
        <Nav.Link as={Link} to="/partner/profile-partner">
          <NavDropdown.Item href="#action/3.1" className="p-2">
            <span style={{marginRight: "15px"}}>
              <FontAwesomeIcon icon={faUser} className="text-dark font-standart" />
            </span>
            <span>
              Profile
            </span>
          </NavDropdown.Item>
        </Nav.Link>
        ) : (
        <Nav.Link as={Link} to="/profile">
          <NavDropdown.Item className="p-2 font-weight-bold">
            <span style={{marginRight: "15px"}}>
              <FontAwesomeIcon icon={faUser} className="text-dark font-standart" />
            </span>
            <span>
              Profile
            </span>
          </NavDropdown.Item>
        </Nav.Link>
        )}

        { props.role == 'partner' && 
        <Nav.Link as={Link} to="/partner/add-product">
          <NavDropdown.Item href="#action/3.1" className="p-2">
            <img className="user-icon-dropdown" src={process.env.PUBLIC_URL + '/product.png'} /> Product
          </NavDropdown.Item> 
        </Nav.Link>
        }

        <NavDropdown.Divider className="m-0" />

        <NavDropdown.Item className="p-2 font-weight-bold" onClick={logoutHandler}>
        <span style={{marginRight: "15px"}}>
          <FontAwesomeIcon icon={faSignOutAlt} className="text-dark font-standart" />
        </span>
        <span>
          Logout
        </span>
          
        </NavDropdown.Item>

      </NavDropdown>
      
      {props.role == 'user' &&
        <Nav.Link as={Link} to="/carts" className="float-right">
          <FontAwesomeIcon icon={faCartPlus} className="text-dark font-big mt-1" />
          {(total > 0 ) ? (
          <span className="position-absolute bg-danger rounded-circle badge text-white" style={{right: "60px"}}>
            {total}
          </span>
            ) : (null)}

        </Nav.Link>
      }
    </>
  );

}

export default UserActive
