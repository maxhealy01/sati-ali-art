import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

const Gallery = ({ data }) => {
  const artArray = data.allContentfulSatiArt.nodes
  console.log(artArray)

  return (
    <Layout>
      <main className="page">
        {artArray.map(piece => {
          const { id, title, image, description } = piece
          const pathToImage = getImage(image)
          const slug = slugify(title, { lower: true })

          return (
            <Link key={id} to={`/${slug}`} className="piece">
              <h5>{title}</h5>
              <GatsbyImage
                image={pathToImage}
                className="art-img"
                alt={description}
              />
            </Link>
          )
        })}
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulSatiArt {
      nodes {
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        title
        description {
          description
        }
      }
    }
  }
`

export default Gallery
