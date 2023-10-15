// import React from 'react'
import { NavLink, Outlet } from "react-router-dom";
import {
  Header,
  ButtonContainer, Logo,
  LogInBtn,
  SignUpBtn,
} from "./Layout.styled";

import { useAuth } from "../../hooks/index";

export default function Layout() {
    const { isLoggedIn } = useAuth();
   
    if(isLoggedIn) {return (
      <nav>
        <Header>
          <Logo to="/">My Logo</Logo>
          <ButtonContainer>    
            <NavLink to="/signup">
              <SignUpBtn type="button"> Sign Out</SignUpBtn>
            </NavLink>
          </ButtonContainer>
        </Header>
        <Outlet />
      </nav>
    );
    } else {
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
    
  
}
