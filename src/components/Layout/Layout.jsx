// import React from 'react'
import { NavLink, Outlet } from "react-router-dom";
import {
  Header,
  ButtonContainer, Logo,
  LogInBtn,
  SignUpBtn,
} from "./Layout.styled";

export default function Layout() {
  return (
    <div>
      <nav>
          <Header>
            <Logo to="/">My Logo</Logo>
            <ButtonContainer>
              <NavLink to="/login">
                <LogInBtn type="button"> Log In</LogInBtn>
              </NavLink>
              <NavLink to="/signup">
                <SignUpBtn type="button"> Sign Up</SignUpBtn>
              </NavLink>
            </ButtonContainer>
          </Header>

        <Outlet />
      </nav>
    </div>
  );
}
