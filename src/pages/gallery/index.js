import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../../components/Layout'

export default function Gallery({ data }) {

    console.log(data)

    const img = data.allCloudinaryMedia.nodes

    return (
        <Layout>
            <div className="uk-section">
                <div className="uk-container">
                    <h1>Gallery</h1>
                    {img.map((image, index) => (
                  <div key={`${index}-cl`}>
                    <img src={image.secure_url} />
                  </div>
                ))
            }
                </div>
            </div>
        </Layout>
    )
}

export const Cloudinary = graphql`
query cloud {
    allCloudinaryMedia {
      nodes {
        secure_url
      }
    }
  }  
`