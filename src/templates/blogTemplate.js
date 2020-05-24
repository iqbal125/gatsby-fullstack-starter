import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import TagsList from '../components/TagsList';
import styles from './styles/blogTemplate.module.css';
import SEO from '../components/SEO';
import { Disqus } from 'gatsby-plugin-disqus';

const BlogTemplate = ({ data }) => {
  const { siteMetadata } = data.site;
  const { siteUrl } = siteMetadata;
  const { frontmatter, html, excerpt, id } = data.markdownRemark;
  const { title, date, author, tags, path, heading } = frontmatter;
  const image = frontmatter.featuredImage.childImageSharp.fluid;
  console.log(frontmatter);

  const seoData = {
    title,
    description: excerpt,
    image,
    article: true,
    pathname: path
  };

  const disqusConfig = {
    url: `${siteUrl + path}`,
    identifier: id,
    title: title
  };

  return (
    <>
      <SEO seoData={seoData} />
      <Layout>
        <div className={styles.blog_layout}>
          <div className={styles.post_title}>{title}</div>
          <small className={styles.date_author}>
            {date} by {author}
          </small>
          <h2 className={styles.heading}>{heading}</h2>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <TagsList tags={tags} />
          <br />
          <br />
          <Disqus config={disqusConfig} />
        </div>
      </Layout>
    </>
  );
};

export default BlogTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(format: MARKDOWN)
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
        path
        author
        heading
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
