// import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navbar() {
  return (
    <div className="">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><i class="fas fa-bars"></i></a>
          <div class="ms-auto" id="navbarNav">
            <div className="user-dropdown">
          
            <NavDropdown
              id="nav-dropdown-dark-example"
              className='user-d-area'
              title={
                <div className='profile-detail' variant="success" id="dropdown-basic">
                  <img src='../images/user.jpg' alt='user'/>
                </div>
              }
              menuVariant="dark"
              eventKey={1}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;