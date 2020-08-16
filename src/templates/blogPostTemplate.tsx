import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

import Layout from '../components/Layout/Layout';
import { StyledBlogPost, StyledTitle } from '../components/BlogPost/styles';

const BlogPostTemplate = ({ data }) => {
    const { body, frontmatter } = data.mdx;

    return (
        <Layout>
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
            frontmatter {
                date(formatString: "YYYY MMMM Do")
                title
            }
        }
    }
`;

export default BlogPostTemplate;
