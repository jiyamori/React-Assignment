import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const FunctionMenu = () => {
    return (
        <>
            <div className="row">
                <div className="col-6 offset-6">
                    <ul>
                       
                       
                        <li><Link to="FunctionalCompoUseImp">FunctionalCompoUseImp</Link></li>
                        <li><Link to="FunctionListview">FunctionListview</Link></li>
                       
                       
                    </ul>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">

                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default FunctionMenu;