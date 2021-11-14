import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { SRLWrapper } from "simple-react-lightbox"

const Gallery = ({ className }) => {
  const data = useStaticQuery(graphql`
    query ImagesForGallery {
      allFile {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(placeholder: DOMINANT_COLOR, formats: JPG)
            }
            id
            name
          }
        }
      }
    }
  `)
  const thumbs = data.allFile.edges

  return (
    <SRLWrapper>
      {" "}
      <GalleryWrapper>
        {thumbs.map(thumb => {
          const img = getImage(thumb.node)
          const name = thumb.node.name
          const key = thumb.node.id

          return (
            <>
              <Image image={img} alt={name} key={key} id={key} />
            </>
          )
        })}
      </GalleryWrapper>
    </SRLWrapper>
  )
}

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  padding: 1rem;
  justify-items: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 425px) {
    grid-template-columns: 1fr;
    width: 100%;
  } ;
`
const Image = styled(GatsbyImage)`
  width: 250px;
  height: 300px;
  @media (max-width: 425px) {
    width: 100%;
    height: 400px;
  } ;
`

export default Gallery
