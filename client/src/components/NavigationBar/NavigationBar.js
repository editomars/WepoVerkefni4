import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import NavBarLinkWrapper from '../NavBarLinkWrapper/NavBarLinkWrapper';

const NavigationBar = ({ logoImageUrl }) => {
    return (
        <nav className="navbar">
            <div>
                <div className="nav-logo">
                    <img className="logo" src={logoImageUrl} alt="" />
                </div>
                <NavBarLinkWrapper>
                    <NavLink exact to = "/pizzas" activeClassName="active" className="nav-link">Menu</NavLink>
                    <NavLink exact to = "/offers" activeClassName="active" className="nav-link">Offers</NavLink>
                    <NavLink exact to = "/cart" activeClassName="active" className="nav-link">Cart</NavLink>
                    <NavLink exact to = "/about" activeClassName="active" className="nav-link">About</NavLink>
                </NavBarLinkWrapper>
            </div>
        </nav>
    );
};

NavigationBar.propTypes = {
    logoImageUrl: PropTypes.string.isRequired
};

export default NavigationBar;
