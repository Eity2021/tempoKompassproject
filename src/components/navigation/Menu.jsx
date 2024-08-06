import React, { useState } from "react";
import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Menu({ route }) {
  const [hoveredSubRoute, setHoveredSubRoute] = useState(null);
  const location = useLocation();
  return (
    <SMenu>
      <div className="flex items-center">
        <MenuButton transparentColor={location?.pathname === "/"}>
          {route.name}{" "}
        </MenuButton>
        {route.subRoutes && route.subRoutes.length > 0 && <FaAngleDown />}
      </div>
      {route.subRoutes && route.subRoutes.length > 0 && (
        <SubRoutesContainer>
          {route.subRoutes.map((subRoute) => (
            <div
              key={subRoute.name}
              onMouseEnter={() => setHoveredSubRoute(subRoute.name)}
              onMouseLeave={() => setHoveredSubRoute(null)}
            >
              <SubRoute to={subRoute.link}>{subRoute.name}</SubRoute>
              {hoveredSubRoute === subRoute.name && subRoute.subMenus && (
                <SubMenusContainer>
                  {subRoute.subMenus.map((subMenu) => (
                    <SubMenus key={subMenu.name} to={subMenu.link}>
                      {subMenu.name}
                    </SubMenus>
                  ))}
                </SubMenusContainer>
              )}
            </div>
          ))}
        </SubRoutesContainer>
      )}
    </SMenu>
  );
}

const SubMenusContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  box-shadow: 0 8px 16px 0px rgba(0, 0, 0, 0.2);
  width: 16rem;
  background: #1e1e1e;
  border-radius: 0.5rem;
  margin-left: 6rem;
  justify-content: end-flex;
`;

// ... (rest of the code remains unchanged)

const SubRoutesContainer = styled.div`
  position: absolute;
  width: 14rem;
  height: 5.6rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 0.4rem 0.4rem 0.4rem 1rem;
  left: -1rem;
  top: 30px;
  visibility: hidden;
  opacity: 0;
  border-radius: 0.5rem;
  transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
  background: #1e1e1e;
`;

const SMenu = styled.div`
  position: relative;
  display: inline-block;
  padding-right: 41px;

  &:hover ${SubRoutesContainer} {
    visibility: visible;
    opacity: 1;
    cursor: pointer;
  }
`;

const MenuButton = styled.div`
  padding-left:0.5rem;
  color:${({ transparentColor }) => (transparentColor ? "#fff" : "#21383E")}
  font-size:14px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;

  &:hover {
    transition: 0.5s ease;
color: ${({ transparentColor }) => (transparentColor ? "#f1f1f1" : "#12a9b2")}; 
  }

  
`;

const SubRoute = styled(Link)`
  text-decoration: none;
  color: #fff;
  padding: 0.3rem;
  border-radius: 0.5rem;
  transition: 0.3s ease-in;
  font-size: 14px;
  &:hover {
    transition: 0.3s ease-in;
    color: #12a9b2;
  }
`;
const SubMenus = styled(Link)`
  text-decoration: none;
  color: #fff;
  padding: 0.3rem;
  border-radius: 0.5rem;
  transition: 0.3s ease-in;
  font-size: 14px;
  margin-left: 6px;
  &:hover {
    transition: 0.3s ease-in;
    color: #12a9b2;
  }
`;
