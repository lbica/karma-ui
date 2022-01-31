import React from "react";
import brandlogwhite from "../../assets/brand-logo-white.png";


function Header() {
    return (
        <div id="header" className="header-fixed clearfix">
            <ul className="header-inner">
                <li>
                    <div className="header-link hide-menu">
                        <i className="fa fa-bars" />
                    </div>
                </li>
                <li className="logo">
                    <a href="https://reactjs.org">
                        <img
                            className="brand-logo logo-lg"
                            src={brandlogwhite}
                            alt="brandlogwhite"
                        />
                    </a>
                </li>
                <li className="pull-right">
                    <ul className="top-menu">
                        <li className="dropdown">
                            <a data-toggle="dropdown"
                                href="/"
                                title="User"
                                aria-expanded="false"
                            >
                                <div className="loged-user">
                                    <i className="tm-icon zmdi zmdi-account-circle zmdi-hc-2x" />
                                    <span className="loged-mesage hidden-xs">
                                        <small>Welcome</small> Lascarica
                                    </span>
                                    <i className="tm-icon zmdi zmdi-chevron-down zmdi-hc-lg hidden-xs" />
                                </div>
                            </a>
                            <ul className="dropdown-menu dm-icon pull-right">
                                <li>
                                    <a href="/">
                                        <i className="zmdi zmdi-key" /> Change password
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <i className="zmdi zmdi-power" /> Logout
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Header;
