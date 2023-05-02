import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
class FunctionalCompoMenu extends Component {
    render() {
        return (
            <>
            <div className="row">
                <div className="col-6 offset-6">

                <ul>
                    <li><Link to="fetchapi">FetchApi</Link></li>
                    <li><Link to="ImgApi">imgApi</Link></li>
                </ul>
                </div>
            </div>
                <Outlet></Outlet>
            </>
        );
    }
}

export default FunctionalCompoMenu;