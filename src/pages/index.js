import * as React from "react"
import Gallery from "../components/gallery"
// import { Link } from "gatsby"
import { SRLWrapper } from "simple-react-lightbox"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Sidebar from "../components/sidebar"
import styled from "styled-components"

const IndexPage = ({ className }) => (
  <Layout>
    <Seo />
    <Sidebar />
    <SRLWrapper>
      <Srl />
    </SRLWrapper>
    <MobileGallery />
  </Layout>
)

const Srl = styled(Gallery)`
  @media (max-width: 425px) {
    display: none;
  }
`
const MobileGallery = styled(Gallery)`
  display: none;
  @media (max-width: 425px) {
    display: grid;
  }
`
export default IndexPage
