import React from 'react';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';
import PostList from '../components/PostList';
import styles from './styles/blog.module.css';
import { AiFillStar } from 'react-icons/ai';

const BlogIndex = props => {
  const edges = props.data.allMarkdownRemark.edges;
  const previousPagePath = props.pageContext.previousPagePath;
  const nextPagePath = props.pageContext.nextPagePath;
  const isFirstPage = props.path === '/blog';
  const isLastPage = edges.length < 5;

  return (
    <Layout title="Blog" description="All the posts">
      <div className={styles.blog_layout}>
        <div className={styles.blog_post_column}>
          <h2>Latest Posts:</h2>
          {edges
            ? edges.map(edge => (
                <PostList
                  key={edge.node.id}
                  excerpt={edge.node.excerpt}
                  post={edge.node.frontmatter}
                />
              ))
            : null}
          <div className={styles.pagination_row}>
            <div>
              <Link
                className={!isFirstPage ? styles.next : styles.disable_pagination}
                to={previousPagePath}
              >
                More Recent Posts
              </Link>
            </div>

            <div>
              <Link
                className={!isLastPage ? styles.next : styles.disable_pagination}
                to={nextPagePath}
              >
                Older Posts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 300)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            author
            heading
            featuredImage {
              childImageSharp {
                fixed(width: 125, height: 125) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
