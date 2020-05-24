import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import { kebabCase } from 'lodash';

const Tags = ({ data }) => {
  const tags = data.allMarkdownRemark.group;

  return (
    <Layout>
      <div>
        <h2> All Tags </h2>
        <div>
          {tags.map(tag => {
            return (
              <div key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>{tag.fieldValue}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
