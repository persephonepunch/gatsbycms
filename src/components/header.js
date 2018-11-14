import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';


import logo from '../images/clogoFFffffsvg.svg'


const HeaderWrapper = styled.div`
  background: #F18A0E;
  margin-bottom: 0rem;
  img {
    margin-bottom: 0;
  }
`;


const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 2200px;
  padding: .5rem;
`;


const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img
            style={{
              width: '30px',
            }}
            src={logo}
            alt="ChalkDust Consulting"
          />
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)


export default Header