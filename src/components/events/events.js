/**
 * @file             : events.js
 * @author           : Silipwn <YXNod2luMG5hbWJpYXJAZ21haWwuY29uKj8=>
 * Last Modified Date: 12.08.2019
 * Last Modified By  : Silipwn <YXNod2luMG5hbWJpYXJAZ21haWwuY29uKj8=>
 */
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SectionCard from "../theme/section-card"

export default () => {
  const data = useStaticQuery(graphql`
  query alleventsyaml {
    eventsYaml {
          Title
          Content
        }
  }
      `)

  return data.allEventsYaml.nodes.map((node, i) => (
    <SectionCard
      title={node.Title}
      content={node.Content}
    />
  ))
}
