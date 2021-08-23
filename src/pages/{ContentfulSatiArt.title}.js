import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import slugify from "slugify"

const ArtTemplate = ({ data }) => {
  console.log(data)
  const {
    title,
    description: { description },
    image,
  } = data.contentfulSatiArt
  const pathToImage = getImage(image)

  return (
    <Layout>
      <main className="page">
        <h1 className="center">{title}</h1>
        <GatsbyImage
          image={pathToImage}
          alt={description}
          className="single-img"
        />
        <p className="description">{description}</p>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSinglePiece($title: String) {
    contentfulSatiArt(title: { eq: $title }) {
      id
      description {
        description
      }
      image {
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
        title
      }
    }
  }
`

export default ArtTemplate
