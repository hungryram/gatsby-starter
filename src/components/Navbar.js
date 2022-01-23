import { Link, graphql, useStaticQuery } from 'gatsby'
import React from "react"

export default function Navbar() {

    const data = useStaticQuery(graphql`
    query siteInfo {
        site {
          siteMetadata {
            description
            title
          }
        }
      }
      
    `)

    const { title, description } = data.site.siteMetadata

    return (
        <nav className="uk-navbar-container uk-margin" data-uk-navbar>
            <div className="uk-navbar-left">
                <h1>{ title }</h1>
            </div>
            <div className="uk-navbar-right">
                <ul className="uk-navbar-nav">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

