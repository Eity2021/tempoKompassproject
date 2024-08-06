import React, { useState } from 'react';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function ExpandMenu({ route }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenusOpen, setIsSubMenusOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleSubMenus = () => {
    setIsSubMenusOpen(!isSubMenusOpen);
  };
  return (
    <SMenu>
      <MenuButton onClick={toggleMenu}>
        {route.name} {isMenuOpen ? <FaAngleDown /> : <FaAngleRight />}
      </MenuButton>
      <SubRoutesContainer isOpen={isMenuOpen}>
        {route.subRoutes && route.subRoutes.length > 0 && (
          <SubRoutes>
            {route.subRoutes.map((subRoute) => (
              <React.Fragment key={subRoute.name}>
                <SubRoute to={subRoute.link}>
                  {subRoute.name}
                  {subRoute.subMenus && subRoute.subMenus.length > 0 && (
                    <SubMenuArrow  onClick={toggleSubMenus}>
                      {isSubMenusOpen ? <FaAngleDown /> : <FaAngleRight />}
                    </SubMenuArrow>
                  )}
                </SubRoute>
                {subRoute.subMenus && subRoute.subMenus.length > 0 && (
                  <SubMenusContainer isOpen={isSubMenusOpen}>
                    {subRoute.subMenus.map((subMenu) => (
                      <SubMenu to={subMenu.link} key={subMenu.name}>
                        {subMenu.name}
                      </SubMenu>
                    ))}
                  </SubMenusContainer>
                )}
              </React.Fragment>
            ))}
          </SubRoutes>
        )}
      </SubRoutesContainer>
    </SMenu>
  );
}

const SubRoutesContainer = styled.div`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  padding: 1rem;
`;

const SubRoutes = styled.div`
  display: flex;
  flex-direction: column;
`;

const SMenu = styled.div``;

const MenuButton = styled.div`
  font-size: 1rem;
  padding: 0.5rem;
  display: flex;
  color: #757575;
  align-items: center;
  justify-content: space-between;
`;

const SubRoute = styled(Link)`
  text-decoration: none;
  color: #757575;
  padding: 0.5rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  position: relative;

  &:hover {
    color: #000; // Change the color on hover if needed
  }
`;

const SubMenuArrow = styled.div`
  margin-left: auto;
`;

const SubMenu = styled(Link)`
  text-decoration: none;
  color: #757575;
  padding: 0.5rem;
  font-size: 1rem;
`;

const SubMenusContainer = styled.div`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  padding-left: 1rem;
`;

