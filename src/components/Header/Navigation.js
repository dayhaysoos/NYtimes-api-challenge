import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({homeFunc}) => (
    <div className="nav-bar-container container">
        <ul className="nav-bar row large-12">
            <li   className="nav-item large-2"><Link to={'/'}>Home</Link></li>
            <li className="nav-item large-2"><Link to={'/nothing'}>World</Link></li>
            <li className="nav-item large-2"><Link to={'/nothing'}>U.S</Link></li>
            <li className="nav-item large-2"><Link to={'/nothing'}>Politics</Link></li>
            <li className="nav-item large-2"><Link to={'/nothing'}>N.Y.</Link></li>
            <li className="nav-item large-2"><Link to={'/nothing'}>More</Link></li>
        </ul>
    </div>
)

export default Navigation;