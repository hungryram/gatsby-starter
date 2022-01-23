import React from "react"
import Layout from "../components/Layout"
import {header} from '../styles/home.module.css'
import { Link, graphql } from "gatsby"

export default function Home({ data }) {

  const { description } = data.site.siteMetadata

  return (
    <Layout>
      <div className={`uk-section uk-section-xlarge ${header}`}>
        <div className="uk-container">
          <h1>Design and Develop</h1>
          <p>{ description }</p>
          <Link to="/projects" className="uk-button uk-button-secondary">Projects</Link>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  site {
    siteMetadata {
      description
    }
  }
}
`