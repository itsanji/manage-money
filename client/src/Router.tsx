import React from "react";
import { Route, Routes } from "react-router";
import Layout from "./components/layout/Layout";
import App from "./App";
import NoMatch from "./pages/NoMatch";
import MonthList from "./pages/MonthList";
import MonthDetail from "./pages/MonthDetail";

const Router: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<App />} />
                    <Route path="/details" element={<MonthList />} />
                    <Route path="/detail" element={<MonthDetail />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </>
    );
};

export default Router;
