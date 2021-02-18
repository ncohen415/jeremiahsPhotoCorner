import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Logo from "../images/logo.jpg"
import CartIcon from "../images/cart.svg"

const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  align-items: center;
  background-color: #ffdf63;
  .navWrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 30px 0 0;
    img {
      margin: 0 0 0 30px;
      padding: 0;
      max-width: 200px;
    }
    ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        margin: 0;
        padding: 0 20px 0 20px;
        font-family: "Poller One";
        font-size: 14px;
      }
    }
  }
`

const Header = ({ siteTitle }) => {
  return (
    <HeaderContainer>
      <div className="navWrapper">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <ul>
          <li>Shop</li>
          <li>Services</li>
          <a href="http://www.jeremiahflynn.com/">
            <li>Tintype Studio</li>
          </a>
          <li>Resources</li>
          <li>
            <img src={CartIcon} alt="" />
          </li>
        </ul>
      </div>
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
