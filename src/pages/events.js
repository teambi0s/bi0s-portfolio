/**
 * @file             : events.js
 * @author           : Silipwn <YXNod2luMG5hbWJpYXJAZ21haWwuY29uKj8=>
 * Last Modified Date: 12.08.2019
 * Last Modified By  : Silipwn <YXNod2luMG5hbWJpYXJAZ21haWwuY29uKj8=>
 */
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleBar from "../components/theme/title-bar"
import events from "../components/events/events"

const eventt = () => (
  <Layout>
    <SEO title="Lifelub" />
    <TitleBar title="Events" />
    <events/>
  </Layout>
)

export default eventt 
