
import React from 'react';
import {NavDropdown, Nav, Alert} from 'react-bootstrap';

function UserActive(props) {
    console.log(props)
    if(props.email == 'achmad10@gmail.com' && props.password == 'mypass'){
      if(props.role == 'admin'){
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
              <NavDropdown.Item href="#action/3.1" className="p-2">
                <img className="user-icon-dropdown" src="images/product.png" /> Product
              </NavDropdown.Item>
              <NavDropdown.Divider className="m-0" />
              <NavDropdown.Item href="#action/3.2" className="p-2">
                <img className="user-icon-dropdown" src="images/logout.png" /> Logout
              </NavDropdown.Item>
            </NavDropdown>
            </>
          );

      }else{

        return(
          <>
          <NavDropdown title={
                          <div className="pull-left">
                              <img className="user-icon" src="images/user.png" alt="user pic" />
                          </div>
                      } id="basic-nav-dropdown" className="float-right custom-dropdown">
            <NavDropdown.Item href="#action/3.1" className="p-2">
              <img className="user-icon-dropdown" src="images/user 2.png" /> Profile
            </NavDropdown.Item>
            <NavDropdown.Divider className="m-0" />
            <NavDropdown.Item href="#action/3.2" className="p-2">
              <img className="user-icon-dropdown" src="images/logout.png" /> Logout
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link" className="float-right">
            <img className="cart-icon" src="images/cart.png" alt="cart" />
          </Nav.Link>
          </>
        );

      }
    }
}

export default UserActive
