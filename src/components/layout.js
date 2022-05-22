/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import SimpleReactLightbox from "simple-react-lightbox"

//Global Styles
const GlobalStyle = createGlobalStyle`
  /* Reset Styles */
  * {
    box-sizing: border-box;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  /* True Global Styles */
  html {
    font-size: 18px;
  }
  h1, h2, h3 ,h4,
  h5, h6, p , a, li, footer {
    color:#545454;
    font-family:  sans-serif;
    font-family: 'Heebo', sans-serif;
  }
  h1 {
    font-size: 3.5rem;
    line-height: 1.25;
    letter-spacing: -0.175rem;
  }
  h2 {
    font-size: 1.75rem;
    line-height: 1.75;
  }
  p  {
    font-weight: 300;
    line-height: 1.875;

  }
  main {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: nowrap;
    padding: 1rem;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 2.25rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 425px) {
    main {
      flex-wrap: wrap;
    }
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <SimpleReactLightbox>
        <GlobalStyle />
        <main siteTitle={data.site.siteMetadata?.title || `Title`}>
          {children}
        </main>
        <footer
          style={{
            textAlign: "center"
          }}
        >
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://julianvalle.dev">Julian Valle</a>
        </footer>
      </SimpleReactLightbox>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
