import React from 'react';
import logo from '../../assets/images/logo/Stratton Logo.png';

class Navigation extends React.Component {
    render() {
        return (
            <nav class="
                navbar navbar-light navbar-expand-md
                justify-content-center
                shadow-sm
                mb-0
            ">
                <div class="container-fluid navbar-section">
                    <a href="./index.html" class="navbar-brand d-flex w-50 me-auto">
                        <img src={logo} class="logo-img" alt="" width="335" height="110" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar3">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
                        <ul class="nav navbar-nav ms-auto w-100 justify-content-end">
                            <li class="nav-item">
                                <a class="nav-link text-uppercase fw-bolder" href="./services.html">Packages & Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-uppercase fw-bolder" href="./aboutus.html">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-uppercase fw-bolder" href="./bookstore.html">Bookstore</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-uppercase fw-bolder" href="#">|</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-uppercase fw-bolder" href="#"><img src="./assets/download.png"
                                    class="profile" width="25" height="25" /></a>
                            </li>
                            <li class="nav-item dropdown">
                                <button class="nav-link dropdown-toggle my-dropdown-toggle"
                                    data-bs-target="#navbarScrollingDropdown" type="button" data-bs-toggle="dropdown"
                                    aria-expanded="false" aria-controls="navbarToggleExternalContent">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-right" id="navbarScrollingDropdown">
                                    <li><a class="dropdown-item" href="#">Item</a></li>
                                    <li><a class="dropdown-item" href="#">Item</a></li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li><a class="dropdown-item" href="#">Item</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navigation;