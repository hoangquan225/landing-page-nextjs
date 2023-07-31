"use client";
import { css, styled } from "styled-components";
import { Button } from "./ui/Button";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Wide } from "./ui/Box/Wide";
import { useState } from "react";
import Logo from "../../public/svg/logo.svg";
import SmallDown from "../../public/svg/icons/small-down.svg";
import Link from "next/link";

const HeaderWapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  height: 5.3rem;
  margin-top: 1.9rem;

  .header__menu {
    display: none;
    font-size: 4rem;
  }

  .header__logo {
    height: 100%;

    & > img {
      height: 100%;
    }
  }

  .header__nav-mobile {
    background: linear-gradient(#e2f1ff, #ffffff);
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    font-size: 1.6rem;
    position: fixed;
    box-shadow: rgb(0 0 0 / 20%) 0px 8px 15px -5px;
    transform: scale(0);
    transform: ;
    transform-origin: top right;
    top: 0;
    right: 0;
    width: 60%;
    transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    border-bottom-left-radius: 3rem;
    z-index: 100;

    &.active {
      transform: scale(1);
      ${({ theme }) => css`
        @media (min-width: 575.98px) {
          display: none;
        }
      `}
    }

    .navbar__sidebar {
      display: flex;
      padding: 1.6rem;
      gap: 1.6rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 4rem;

      & > div {
        padding: 1rem;
        width: 100%;
        text-align: center;
      }
    }

    .header__icon-close {
      font-size: 3.6rem;
      padding: 0.8rem;
      top: 0;
      right: 0;
      position: absolute;
    }
  }

  ${({ theme }) => css`
    ${theme.mediaQueries.xs} {
      align-items: center;
      margin-top: 1.2rem;
      .header__nav {
        display: none;
      }

      .header__menu {
        display: block;
      }
    }

    ${theme.mediaQueries.sm} {
      // .header__nav {
      //     display: none;
      // }
    }
  `}
`;

const StyleUl = styled.ul`
  display: inline-flex;
  align-items: center;
  gap: 4rem;
  font-size: 1.4rem;

  & > li::after {
    content: "";
    position: absolute;
    width: 100%;
    left: 0px;
    bottom: -6px;
    background: var(--primary-purple, #722ed1);
    height: 2px;
    transition: all 300ms ease;
    opacity: 0;
    transform: scaleX(0);
  }

  & > li:hover::after {
    opacity: 1;
    transform: scaleX(1);
  }

  .header__small-down {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  li {
    position: relative;
    cursor: pointer;
    color: #000;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  ${({ theme }) => css`
    ${theme.mediaQueries.sm} {
      gap: 3rem;
    }
  `}
`;

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <Wide>
      <HeaderWapper>
        <div className="header__logo">
          <Logo />
        </div>
        <AiOutlineMenu
          className="header__menu"
          onClick={() => setShowNavbar(!showNavbar)}
        />
        <div
          className={
            showNavbar ? "header__nav-mobile active" : "header__nav-mobile"
          }
        >
          <div
            className="header__icon-close"
            onClick={() => setShowNavbar(!showNavbar)}
          >
            <AiOutlineClose />
          </div>
          <div className="navbar__sidebar">
            <div className="flex gap-[0.4rem] justify-center items-center">
              About
              <SmallDown />
            </div>
            <div>Pricing</div>
            <div>Contact Us</div>
            <div>Login</div>
            <Button>Start free trial</Button>
          </div>
        </div>
        <div className="header__nav">
          <StyleUl>
            <li>
              <Link className="header__small-down" href="#">
                About
                <SmallDown />
              </Link>
            </li>
            <li>
              <Link href="">Pricing</Link>
            </li>
            <li>
              <Link href="">Contact Us</Link>
            </li>
            <li>
              <Link href="">Login</Link>
            </li>
            <Button>Start free trial</Button>
          </StyleUl>
        </div>
      </HeaderWapper>
    </Wide>
  );
};

export default Header;
