import * as React from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"
import styled from "styled-components"
import { Mail } from "@styled-icons/feather/Mail"
import { Instagram } from "@styled-icons/boxicons-logos/Instagram"
import { StyledIconBase } from "@styled-icons/styled-icon"

const Sidebar = () => (
  <SidebarContainer>
    <Title>
      <h1>Marco</h1>
      <h1>Antonio</h1>
      <h1>Álvarez Peña</h1>
    </Title>
    <SubTitle>Professional Mexican Oil Painter</SubTitle>
    <Body>
      <p>
        Marco Antonio has more than 10 years experience painting in oil medium.
        He specializes in Still Life and Nature painting.
      </p>
      <p>
        If you have any questions, or any commission requests, you can contact
        me via email.
      </p>
    </Body>
    <Contact>
      <a
        href="https://instagram.com/marcoalpeart"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram size="30" />
      </a>
      <a href="mailto: lbalvarez8@gmail.com">
        <Mail size="30" />
      </a>
    </Contact>
  </SidebarContainer>
)

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
}

Sidebar.defaultProps = {
  siteTitle: ``,
}

const SidebarContainer = styled.header`
  display: flex;
  flex-flow: column nowrap;
  min-width: 30%;
  height: 100%;
  min-height: 70vh;
  justify-content: space-between;
  padding: 0 1rem;
  @media (max-width: 425px) {
    height: 100%;
    width: 100%;
  }
`
const Title = styled.div`
  display: flex;
  flex-flow: column nowrap;
  @media (max-width: 425px) {
    text-align: center;
    justify-content: center;
  }
`
const SubTitle = styled.h2`
  font-weight: 300;
  text-align: left;
  @media (max-width: 512px) {
    text-align: center;
  }
`
const Body = styled.div`
  letter-spacing: -0.025rem;
  min-height: 50%;
  font-weight: 300;
  p {
    padding: 1rem 0;
  }
`
const Contact = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;
  ${StyledIconBase} {
    transition: 0.2s all ease-in;
    &:hover {
      color: cyan;
    }
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`

export default Sidebar
