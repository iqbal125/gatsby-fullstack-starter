import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';

const TagTemplate = ({ data, pageContext }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;

  return (
    <Layout>
      <div>
        <h2>
          Posts Tagged: {tag} <small>({totalCount})</small>
        </h2>
        <h3>
          <Link to='/tags'>All tags</Link>
        </h3>
        <div>
          {edges.map(({ node }) => {
            const { title, path } = node.frontmatter;
            return (
              <div key={node.id}>
                <Link to={path}>{title}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default TagTemplate;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;
