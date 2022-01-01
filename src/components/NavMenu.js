import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdMenu, MdClose } from "react-icons/md";

const NavMenuStyle = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--dark-bg);
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: all.3 ease background-color;
      &:hover {
        background-color: var(--deep-dark);
      }
    }
    a {
      display: inline-block;
      font-family: "RobotoMono Regular";
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--gray-1);
      outline: none;
    }
    .active {
      color: var(--white);
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
          pointer-events: none;
        }
  }
  .close-nav-icon {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - 1rem));
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      transition: 0.3s ease transform;
      background-color: var(--deep-dark);
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: 1rem;
      .close-nav-icon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`;

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <NavMenuStyle>
        <div
          className="mobile-menu-icon"
          onClick={() => {
            setShow(!show);
          }}
          role="button"
          onKeyDown={() => setShow(!show)}
          tabIndex={0}
        >
          <MdMenu />
        </div>
        <ul className={!show ? "navItems hide-item" : "navItems"}>
          <div
            className="close-nav-icon"
            onClick={() => {
              setShow(!show);
            }}
            role="button"
            onKeyDown={() => setShow(!show)}
            tabIndex={0}
          >
            <MdClose />
          </div>
          <li>
            <NavLink
              to="/"
              exact
              onClick={() => {
                setShow(!show);
              }}
              role="button"
              onKeyDown={() => setShow(!show)}
              tabIndex={0}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => {
                setShow(!show);
              }}
              role="button"
              onKeyDown={() => setShow(!show)}
              tabIndex={0}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              onClick={() => {
                setShow(!show);
              }}
              role="button"
              onKeyDown={() => setShow(!show)}
              tabIndex={0}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              onClick={() => {
                setShow(!show);
              }}
              role="button"
              onKeyDown={() => setShow(!show)}
              tabIndex={0}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/conatct"
              onClick={() => {
                setShow(!show);
              }}
              role="button"
              onKeyDown={() => setShow(!show)}
              tabIndex={0}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </NavMenuStyle>
    </>
  );
}
