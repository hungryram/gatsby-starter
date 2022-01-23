import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'

export default function Projects({ data }) {
    const projects = data.projects.nodes
    const contact = data.contact.siteMetadata.contact

    return (
        <Layout>
            <section className="uk-section">
                <div>
                    <h1>Projects</h1>
                    <p>My list of projects</p>
                </div>
            </section>
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-child-width-1-2@s" data-uk-grid>
                        {projects.map(project => (
                            <div>
                                <div className="uk-card uk-card-default">
                                    <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                                        <div>
                                            <h3>{project.frontmatter.title}</h3>
                                            <p>{project.frontmatter.stack}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <a href={`mailto:${contact}`} >{contact}</a>

                </div>
            </div>
        </Layout>
    )
}


export const query = graphql`
query projectsPage {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}) {
        nodes {
          id
          frontmatter {
            title
            slug
            stack
          }
        }
      }
      contact: site {
          siteMetadata {
              contact
          }
      }
  }
  
`