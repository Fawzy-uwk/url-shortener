import styled, { StyleSheetManager } from "styled-components";
import Button from "../UI/Button";
import logo from "../Assets/logo.svg";
import { useState } from "react";

const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 200px;
  background-color: #fff;

  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
`;
const Logo = styled.h2`
  color: #000;
  font-size: 30px;
  font-weight: 700;
`;

const UL = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  @media only screen and (max-width: 768px) {
    color: #fff;
    flex-direction: column;
    gap: 2rem;
  }
`;

const LI = styled.li`
  font-size: 16px;
  font-weight: 400;
  color: hsl(0, 0%, 75%);
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    color: #000;
  }
  @media only screen and (max-width: 768px) {
    color: #fff;
    flex-direction: column;
    font-weight: 500;
    font-size: 18px;
  }
`;

const Menu = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    margin: 10px 20px;
    border: none;
    border-radius: 10px;
    color: #fff;
    padding: 20px;
    display: ${(props) => (props.show ? "flex" : "none")};
    align-items: center;
    flex-direction: column;
    background-color: hsl(257, 27%, 26%);
  }
`;
function NavBar() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Nav>
        <img src={logo} alt="" className="block sm:hidden" />
        <div className="hidden sm:flex sm:items-center sm:gap-8">
          <Logo>Shortly</Logo>
          <UL>
            <LI>Features</LI>
            <LI>pricing</LI>
            <LI>resources</LI>
          </UL>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <p className=" capitalize text-base text-gray-300 hover:text-black cursor-pointer">
            login
          </p>
          <Button className="rounded-full">Sign Up</Button>
        </div>
        <i
          className="fa-solid fa-bars text-2xl sm:hidden"
          onClick={() => setShow(!show)}
        ></i>
      </Nav>

      <StyleSheetManager shouldForwardProp={(prop) => prop !== "show"}>
        <Menu show={show}>
          <UL className="text-white mb-5">
            <LI>Features</LI>
            <LI>pricing</LI>
            <LI>resources</LI>
          </UL>
          <hr className=" w-full bg-gray-200 rounded-full" />
          <div className="flex sm:hidden items-center flex-col gap-4 mt-2">
            <p className=" capitalize text-lg font-semibold text-gray-100 hover:text-black cursor-pointer">
              login
            </p>
            <Button className="rounded-full w-60">Sign Up</Button>
          </div>
        </Menu>
      </StyleSheetManager>
    </>
  );
}

export default NavBar;
