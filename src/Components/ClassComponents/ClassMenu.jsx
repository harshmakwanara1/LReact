import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class ClassMenu extends Component {
    render() {
        return (
            <>
                <ul>
                    <li><Link to="classintro">Class intro</Link></li>
                    <li><Link to="jsxcompo">JSX</Link></li>
                    <li><Link to="propsinclass">Props</Link></li>
                    <li><Link to="stateinclass">State</Link></li>
                    <li><Link to="statelifecycleinclass">State LifeCycle</Link></li>
                    <li><Link to="ConditionalRenderingInClassCompo">ConditionalRenderingInClassCompo</Link></li>
                    <li><Link to="ListKeysInClassCompo">ListKeysInClassCompo</Link></li>
                </ul> 
                <Outlet/>
            </>
        );
    }
}

export default ClassMenu;