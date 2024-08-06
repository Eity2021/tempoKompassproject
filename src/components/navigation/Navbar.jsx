import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Menu from "./Menu";
import logo from "../../assets/Nimages/Header/logo.png";
import logoTwo from "../../assets/Nimages/Header/logoTwo.png";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./NavStyles.css";
import { useNavigate } from "react-router-dom";
import { useContextProvider } from "../contextProvider/PricingProvider";



export default function Navbar({ toggleDrawer, routes }) {
  const location = useLocation();
  const { cart, setCart } = useContextProvider();
  const navigate = useNavigate();

  const handleEventChange = () => {
    navigate("/corporate-events");
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const removeCartFromLocalStorage = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  useEffect(() => {
    const cartData = localStorage.getItem("cart");

    if (cartData) {
      setCart(JSON.parse(cartData));
    }

    const timerId = setTimeout(removeCartFromLocalStorage, 20 * 60 * 1000); //

    return () => clearTimeout(timerId);
  }, []);

  const [transparentLogo, setTransparentLogo] = useState(false);
  const [navbarFixed, setNavbarFixed] = useState(false);

  useEffect(() => {
    setTransparentLogo(
      location?.pathname === "/" ||
        location?.pathname === "/appointment" ||
        location?.pathname === "/lobby" ||
        location?.pathname === "/payroll"
    );
  }, [location?.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setNavbarFixed(true);
      } else {
        setNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SNavbar transparent={transparentLogo} fixed={navbarFixed}>
      <NavContainer transparentColor={transparentLogo}>
        <Justify>
          <DrawerButton onClick={toggleDrawer}>
            <FaBars />
          </DrawerButton>
          <div>
            {transparentLogo ? (
              <Link to="/">
                <LazyLoadImage
                  effect="opacity"
                  src={logo}
                  alt="logo"
                  className="w-100"
                />
              </Link>
            ) : (
              <Link to="/">
                <LazyLoadImage
                  effect="opacity"
                  src={logoTwo}
                  alt="logo"
                  className="w-100"
                />
              </Link>
            )}
          </div>

          <RightNav>
            <NavRoutes>
              {routes.map((route) => {
                if (route.subRoutes) {
                  return <Menu route={route} key={route.name} />;
                }
                return (
                  <NavRoute
                    to={route.link}
                    key={route.name}
                    transparentColor={transparentLogo}
                  >
                    {route.name}
                  </NavRoute>
                );
              })}
            </NavRoutes>

            <div className="flex item-center lg:pr-[0px] pr-[10px]  ">
              {cart?.length === 0 ? (
                <Link to="/pricing" className="">
                  <div className="relative mt-[-2px] ml-[26px]">
                    <Cart transparentColor={transparentLogo}>
                      {cart?.length || 0}
                    </Cart>
                  </div>
                </Link>
              ) : (
                <Link to="/services">
                  <div className="relative mt-[-2px] ml-[26px]">
                    <Cart transparentColor={transparentLogo}>
                      {cart?.length || 0}
                    </Cart>
                  </div>
                </Link>
              )}
            </div>
          </RightNav>
        </Justify>
        <div className="flex gap-4">
          <Event transparentColor={transparentLogo} onClick={handleEventChange}>
            <EventButton transparentColor={transparentLogo}>Event</EventButton>
          </Event>

          <Account transparentColor={transparentLogo}>
            <a
              className="NavRoute"
              href="https://my.hellokompass.com/login"
              target="_blank"
              rel="noreferrer"
            >
              <AccountButton transparentColor={transparentLogo}>
                Account
              </AccountButton>
            </a>
          </Account>
        </div>
      </NavContainer>
    </SNavbar>
  );
}

const Justify = styled.div`
  display: flex;
`;

const DrawerButton = styled.button`
  all: unset;
  display: grid;
  font-size: 1.5rem;
  padding-right: 20px;
  @media (min-width: 991px) {
    display: none;
  }
`;

const SNavbar = styled.nav`
  // background-color: ${({ transparent }) =>
    transparent ? "transparent" : "#fff"};

  background-color: ${({ transparent, fixed }) =>
    fixed ? (transparent ? "#0c1e21" : "#fff") : "transparent"};
  border-bottom: 1px solid rgba(33, 56, 62, 0.1);
  padding: 24px 0px;
  position: ${({ fixed }) => (fixed ? "fixed" : "absolute")};
  top: ${({ fixed }) => (fixed ? "0" : "0")};
  transition: top 0.3s ease;
  width: 100%;
  z-index: 100;
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 70px;
  color: ${({ transparentColor }) => (transparentColor ? "#fff" : "#21383E")};
  @media (max-width: 776px) {
    margin: 0px 20px;
  }
`;

const RightNav = styled.div`
  display: flex;
  margin-left: 48px;
`;
const NavRoutes = styled.div`
  @media (max-width: 990px) {
    display: none;
  }
  display: flex;
  font-size: 14px;
  align-items: center;
`;
const NavRoute = styled(Link)`
  text-decoration: none;
  color: ${({ transparentColor }) => (transparentColor ? "#fff" : "#21383E")};
  padding-right: 41px;
  transition: 0.5s ease;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
  &:hover {
    transition: 0.5s ease;
    color: ${({ transparentColor }) =>
      transparentColor ? "#f1f1f1" : "#12a9b2"};
  }
`;

const EventButton = styled.div`
  border: none;
  color: ${({ transparentColor }) => (transparentColor ? "#fff" : "#21383E")};
  font-size: 14px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-style: normal;
`;
const AccountButton = styled.div`
  border: none;
  color: ${({ transparentColor }) => (transparentColor ? "#fff" : "#21383E")};
  font-size: 14px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-style: normal;
`;
const Account = styled.div`
  width: 93px;
  height: 42px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ transparentColor }) =>
    transparentColor ? "rgba(255, 255, 255, 0.2)" : "#bdc4c4"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ transparentColor }) =>
    transparentColor ? "rgba(255, 255, 255, 0.1)" : "#dbdfdf"};
`;
const Event = styled.div`
  width: 93px;
  height: 42px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ transparentColor }) =>
    transparentColor ? "rgba(255, 255, 255, 0.2)" : "#bdc4c4"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ transparentColor }) =>
    transparentColor ? "rgba(255, 255, 255, 0.1)" : "#dbdfdf"};
`;

const Cart = styled.div`
  background-color: ${({ transparentColor }) =>
    transparentColor ? "rgba(255, 255, 255, 0.1)" : "#eaecec"};

  color: ${({ transparentColor }) => (transparentColor ? "#fff" : "#21383E")};
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  right: -2px;
  border-width: 2px;
  border-style: solid;

  border-color: ${({ transparentColor }) =>
    transparentColor ? "rgba(255, 255, 255, 0.2)" : "#bdc4c4"};
  font-family: "Poppins", sans-serif;
`;
