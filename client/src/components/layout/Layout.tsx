import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import "./Layout.css";

interface LayoutProps {
    children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({}) => {
    return (
        <>
            <nav className="layout_nav-container">
                <Link to="/">Input</Link>
                <Link to="/details">Month List</Link>
                {/* This month */}
                <Link to="/detail">Detail by Month</Link>
            </nav>
            <main className="root">
                <div className="layout_centering">
                    <Outlet />
                </div>
            </main>
        </>
    );
};
export default Layout;
