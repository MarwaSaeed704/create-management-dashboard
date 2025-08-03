import React from "react";
import Navbar from "../components/Navbar";
// import { Outlet } from "react-router";
import HomePage from "./HomePage";

const MainPage: React.FC = () => {
    return (
        <>
            <div className="bg-[#1C1E53] h-[100vh] px-4 ">
                <Navbar />
                <HomePage />

            </div>
        </>
    )
};

export default MainPage;