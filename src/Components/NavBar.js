import React from 'react';
import { Link } from 'react-router-dom';

import Brand from '../StyledComponents/Brand';

const NavBar = () => 
<div>
    <Link to="/"><Brand>Ask apiko</Brand></Link>

    <div className="pullRight">
        <Link to="/signIn">signIn</Link>
        <Link to="/signUp">signUp</Link>
    </div>
</div>;

export default NavBar;