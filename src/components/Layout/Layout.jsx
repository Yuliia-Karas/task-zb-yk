import { NavLink, Outlet } from "react-router-dom";
import {
  Header,
  ButtonContainer,
  Logo,
  LogInBtn,
  SignUpBtn,
} from "./Layout.styled";

import { useAuth } from "../../hooks/index";

import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";

export default function Layout() {
  const { token } = useAuth();
   const dispatch = useDispatch();
    
  if (token) {
    return (
      <nav>
        <Header>
          <Logo to="/">My Logo</Logo>
          <ButtonContainer>
            <NavLink to="/signup">
              <SignUpBtn type="button" onClick={() => dispatch(logOut())}>
                {" "}
                Sign Out
              </SignUpBtn>
            </NavLink>
          </ButtonContainer>
        </Header>
        <Outlet />
      </nav>
    );
  } else {
    return (
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
    );
  }
}
