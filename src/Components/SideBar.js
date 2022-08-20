// import Nav from 'react-bootstrap/Nav';
import './SideBar.css';

function Sidebar() {
  return (
    <div className='dash-vertical-navigation'>
    <div class=" px-sm-2 px-0">
            <div class="d-flex flex-column align-items-center align-items-sm-start pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">
                        <img src='../images/ER-LOGO.png' alt='logo'/>
                    </span>
                </a>
                <ul class="side-custom-nav flex-column m-0 p-0 align-items-center align-items-sm-start w-100" id="menu">
                    <li class="nav-item active">
                        <a href="/dashboard" class="align-middle px-0">
                            <i class="fas fa-home"></i>
                            <span class="ms-1 d-none d-sm-inline">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="/add-patient" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample" class="px-0 align-middle">
                        <i class="fas fa-hospital-user"></i> <span class="ms-1 d-none d-sm-inline">Add patients</span> </a>
                        {/* <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1 </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2 </a>
                            </li>
                        </ul> */}
                    </li>
                    <li>
                        <a href="/user" class="px-0 align-middle">
                        <i class="fas fa-users"></i> <span class="ms-1 d-none d-sm-inline">Users</span></a>
                    </li>
                    <li>
                        <a href="/report" class="px-0 align-middle">
                        <i class="fas fa-clipboard"></i> <span class="ms-1 d-none d-sm-inline">Reports</span> </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Sidebar;