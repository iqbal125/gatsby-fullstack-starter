const postQuery = `{
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            author
            date(formatString: "MMMM D, YYYY")
            tags
          }
          excerpt(pruneLength: 5000)
        }
      }
    }
  }`;
const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest
  }));

const settings = { attributesToSnippet: [`excerpt:20`] };
const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: `test_app2`,
    settings
  }
];
module.exports = queries;
