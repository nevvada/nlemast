import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';

import { StyledBlogPost, StyledTitle } from '../components/BlogPost/styles';

import useSiteMetadata from '../hooks/useSiteMetadata';

const BlogPostTemplate = ({ data }) => {
    const { body, excerpt, frontmatter } = data.mdx;
    const { siteLanguage = '', title = '' } = useSiteMetadata();

    return (
        <Layout>
            <SEO
                description={excerpt}
                siteLanguage={siteLanguage}
                title={title}
            />
            <StyledBlogPost>
                <StyledTitle>{frontmatter.title}</StyledTitle>
                <p>{frontmatter.date}</p>
                <hr />
                <MDXRenderer>{body}</MDXRenderer>
            </StyledBlogPost>
        </Layout>
    );
};

export const query = graphql`
    query PostsBySlug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            excerpt(pruneLength: 200)
            frontmatter {
                date(formatString: "YYYY MMMM Do")
                title
            }
        }
    }
`;

export default BlogPostTemplate;
