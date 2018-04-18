import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => 
<div>
    <h1>Brand</h1>
    <p>
        <Link path="/signIn" component={}/>
        <Link path="/signOut" component={}/>
    </p>
</div>;

export default NavBar;