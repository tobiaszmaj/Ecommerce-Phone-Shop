import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                {/* 
            https://www.iconfinder.com/icons/1243689/call_phone_icon
            Creative Commons (Attribution 3.0 Unported);
            https://www.iconfinder.com/Makoto_msk */}
                <Link to='/Ecommerce-Phone-Shop/'>
                    <img src={logo} alt="store" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5"></li>
                    <Link to="/Ecommerce-Phone-Shop/" className="nav-link">Products</Link>
                </ul>
                <Link to='/cart' className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-shopping-cart">My Cart</i>
                        </span>
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
height: 92px;
background: var(--mainDark) !important;
border-bottom: 1px solid #eee;

ul li{
	list-style: none;
	float: left;
	margin-right: 30px;	
}

.nav-link,
.mr-2 {
    font-weight: 700;
	color: var(--mainWhite) !important;
	font-size: 14px;	
	text-decoration: none;
	text-transform: uppercase;
	letter-spacing: 1px;
}
`