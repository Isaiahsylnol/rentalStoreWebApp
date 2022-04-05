import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavHeader = styled.div`
  font-size: 1em;
  padding: 1em;
  color: palevioletred; 
  background-color: #e6d5c3;
  margin-bottom: 1em;
  text-align: center;
`; 

function Header(props) {
    return (
        <NavHeader data-cy="header">
    
                <nav data-cy="nav_links">
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/shop">About</Link>
                </nav>
        </NavHeader>
    );
}

export default Header;