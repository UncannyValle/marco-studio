import * as React from "react"
import Gallery from "../components/gallery"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Sidebar from "../components/sidebar"

const IndexPage = () => (
  <Layout>
    <Seo />
    <Sidebar />
    <Gallery />
  </Layout>
)

export default IndexPage
