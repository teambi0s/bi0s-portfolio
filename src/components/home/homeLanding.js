import React from "react"
import Typing from 'react-typing-animation';

export default () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     cover: allFile(filter: { name: { eq: "cover"}, extension: { eq: "jpg"}})
  //     {
  //       nodes
  //       {
  //         childImageSharp
  //         {
  //           fluid
  //           {
  //             src
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <div
        id="home-landing"
    >
      <div className="overlay">
        <div className="text-center">

            <Typing speed={50} >
              <h3>
              <span>A Student Community of Security Enthusiasts</span>
              <Typing.Reset count={1} delay={500} />
              <span>We are bi0s</span>
              <Typing.Reset count={1} delay={500}/>
              </h3>
              <h1>
                India's Leading <span>Security Team</span>
              </h1>
            </Typing>
        </div>
      </div>
    </div>
  )
}
