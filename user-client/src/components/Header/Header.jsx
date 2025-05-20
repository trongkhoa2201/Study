import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/original-dbbc84c08bd6b4b49fc97827fa5be468.webp";
import CountryDropdown from "../CountryDropdown/CountryDropdown";
import { CiSearch } from "react-icons/ci";
import { Button } from "@mui/material";
import { FaRegUser } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import Navigation from "../Navigations/Navigation";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-purple">
          <div className="container">
            <p className="mt-0 mb-0 text-center">
              Welcome to our website! Enjoy your stay.
            </p>
          </div>
        </div>

        <header className="header">
          <div className="container-fluid">
            <div className="row">
              <div className="logoWrapper col-sm-1">
                <Link to={"/"}>
                  <img src={Logo} alt="Logo"></img>
                </Link>
              </div>

              <div className="col-sm-11 d-flex align-items-center part2">
                <CountryDropdown />

                <div className="headerSearch">
                  <input type="text" placeholder="Search for products" />
                  <Button>
                    <CiSearch />
                  </Button>
                </div>

                <div className="part3 d-flex align-items-center ml-auto">
                  <Button className="circle mr-3" onClick={handleClick}>
                    <FaRegUser />
                  </Button>
                  <div className="cartTab d-flex align-items-center">
                    <span className="price">$3.29</span>
                    <div className="positon-relative ml-2">
                      <Button className="circle">
                        <IoBagOutline />
                      </Button>
                      <span className="count d-flex align-items-center justify-content-center">
                        1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <Navigation />
      </div>
    </>
  );
};

export default Header;
