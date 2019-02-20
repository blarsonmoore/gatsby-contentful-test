import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const HomePage = () => (
  <StaticQuery
    query={graphql`
      query HomePage {
        contentfulBlog {
          title

          content {
            childMarkdownRemark {
              html
            }
          }
          image {
            file {
              url
            }
          }
        }
      }
    `}
    render={({
      contentfulBlog: {
        title,

        content: {
          childMarkdownRemark: { html }
        },
        image: {
          file: { url }
        }
      }
    }) => (
      <>
        <h1>{title}</h1>
        <img alt="hello" src={url} />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </>
    )}
  />
);

export default HomePage;
